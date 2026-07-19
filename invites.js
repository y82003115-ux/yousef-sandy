// Real invitation and guest-approval workflow for Yousef & Sandy.
(async function () {
  const inviteCode = new URLSearchParams(location.search).get('invite');
  const authScreen = document.querySelector('#authScreen');
  const authCard = authScreen?.querySelector('.auth-card');
  const appShell = document.querySelector('#appShell');

  function safe(value) {
    return String(value || '').replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }

  function waitingScreen(name) {
    authCard.innerHTML = `
      <div class="auth-heart">💗</div>
      <h1>طلبك وصل</h1>
      <p>أهلًا ${safe(name)}، ينتظر طلبك موافقة الملك يوسف.</p>
      <div class="auth-error" id="guestStatus">جاري انتظار الموافقة…</div>
      <button class="pink" id="cancelGuest">إلغاء الطلب والخروج</button>`;
    authScreen.classList.remove('hidden');
    appShell.classList.remove('ready');
    document.querySelector('#cancelGuest').onclick = async () => {
      await db.auth.signOut();
      location.href = location.pathname;
    };
  }

  async function pollApproval(requestId) {
    const timer = setInterval(async () => {
      const { data } = await db.from('join_requests')
        .select('status,mic_allowed').eq('id', requestId).single();
      if (!data) return;
      if (data.status === 'approved') {
        clearInterval(timer);
        location.href = location.pathname;
      }
      if (data.status === 'rejected' || data.status === 'blocked') {
        clearInterval(timer);
        const label = document.querySelector('#guestStatus');
        if (label) label.textContent = 'لم تتم الموافقة على طلب الدخول.';
      }
    }, 5000);
  }

  async function submitGuest(name) {
    const button = document.querySelector('#guestButton');
    const errorBox = document.querySelector('#guestError');
    button.disabled = true;
    button.textContent = 'جاري إرسال الطلب…';

    const { data: authData, error: authError } = await db.auth.signInAnonymously();
    if (authError) {
      errorBox.textContent = 'تعذّر إنشاء جلسة الضيف. حاول مجددًا.';
      button.disabled = false;
      return;
    }

    const userId = authData.user.id;
    const { data: invitation, error: inviteError } = await db.from('invitations')
      .select('id,code,expires_at').eq('code', inviteCode).single();
    if (inviteError || !invitation) {
      await db.auth.signOut();
      errorBox.textContent = 'رابط الدعوة غير صالح أو انتهت مدته.';
      button.disabled = false;
      button.textContent = 'إرسال طلب الدخول';
      return;
    }

    const { error: profileError } = await db.from('profiles').insert({
      id: userId, display_name: name, role: 'guest', love_balance: 0,
      level_name: 'Guest'
    });
    if (profileError) {
      await db.auth.signOut();
      errorBox.textContent = 'تعذّر تجهيز حساب الضيف.';
      button.disabled = false;
      return;
    }

    const { data: request, error: requestError } = await db.from('join_requests')
      .insert({ user_id: userId, invitation_id: invitation.id })
      .select('id').single();
    if (requestError) {
      errorBox.textContent = 'تعذّر إرسال طلب الدخول.';
      return;
    }
    waitingScreen(name);
    pollApproval(request.id);
  }

  async function showGuestEntry() {
    if (!inviteCode || !authCard) return;
    const { data: sessionData } = await db.auth.getSession();
    if (sessionData.session) return;
    authCard.innerHTML = `
      <div class="auth-heart">💗</div>
      <h1>دعوة إلى القلعة</h1>
      <p>أدخل اسمك لإرسال طلب الدخول إلى الملك يوسف.</p>
      <form class="auth-form" id="guestForm">
        <input id="guestName" maxlength="30" placeholder="اسم الضيف" required>
        <button id="guestButton">إرسال طلب الدخول</button>
        <div class="auth-error" id="guestError"></div>
      </form>
      <p class="auth-note">الدعوة لشخص واحد ولا تسمح بدخول الروم قبل موافقة يوسف.</p>`;
    document.querySelector('#guestForm').onsubmit = e => {
      e.preventDefault();
      const name = document.querySelector('#guestName').value.trim();
      if (name.length >= 2) submitGuest(name);
    };
  }

  async function enforceGuestApproval() {
    const { data: sessionData } = await db.auth.getSession();
    const session = sessionData.session;
    if (!session || !session.user.is_anonymous) return;
    const { data: profile } = await db.from('profiles')
      .select('display_name').eq('id', session.user.id).single();
    if (!profile) return;
    const { data: request } = await db.from('join_requests')
      .select('id,status').eq('user_id', session.user.id)
      .order('created_at', { ascending: false }).limit(1).single();
    if (!request) return;
    if (request.status !== 'approved') {
      waitingScreen(profile.display_name);
      pollApproval(request.id);
    }
  }

  async function createInvitation() {
    const { data: sessionData } = await db.auth.getSession();
    if (!sessionData.session) return;
    const code = 'YS-' + crypto.getRandomValues(new Uint32Array(2))
      .join('').slice(0, 12);
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const { error } = await db.from('invitations').insert({
      code, created_by: sessionData.session.user.id, expires_at: expires
    });
    if (error) return toast('تعذّر إنشاء الدعوة');
    document.querySelector('#invite').value = code;
    toast('تم إنشاء دعوة حقيقية صالحة 24 ساعة');
  }

  async function copyInvitation() {
    const code = document.querySelector('#invite').value;
    if (!code || code === 'YS-LOVE-0723') return toast('أنشئ رمزًا جديدًا أولًا');
    const link = `${location.origin}${location.pathname}?invite=${encodeURIComponent(code)}`;
    await navigator.clipboard.writeText(link);
    toast('تم نسخ رابط الدعوة');
  }

  async function loadRequests() {
    const list = document.querySelector('.requests');
    if (!list) return;
    const { data: requests } = await db.from('join_requests')
      .select('id,user_id,status,created_at').eq('status', 'pending')
      .order('created_at', { ascending: false });
    list.innerHTML = '<h2>طلبات الدخول</h2>';
    if (!requests?.length) {
      list.innerHTML = '<p class="muted">لا توجد طلبات جديدة.</p>';
      return;
    }
    for (const request of requests) {
      const { data: profile } = await db.from('profiles')
        .select('display_name').eq('id', request.user_id).single();
      const row = document.createElement('article');
      row.innerHTML = `<div class="avatar">G</div><div><b>${safe(profile?.display_name || 'ضيف')}</b><small class="muted">يطلب الدخول والمايك</small></div><button class="pink">قبول</button>`;
      row.querySelector('button').onclick = async () => {
        const { data: sessionData } = await db.auth.getSession();
        const { error } = await db.from('join_requests').update({
          status: 'approved', mic_allowed: true,
          reviewed_by: sessionData.session.user.id,
          reviewed_at: new Date().toISOString()
        }).eq('id', request.id);
        if (!error) { toast('تم قبول الضيف والسماح له بالمايك'); loadRequests(); }
      };
      list.appendChild(row);
    }
  }

  const newInvite = document.querySelector('#newInvite');
  const copyInvite = document.querySelector('#copyInvite');
  if (newInvite) newInvite.onclick = createInvitation;
  if (copyInvite) copyInvite.onclick = copyInvitation;
  const responsiveFix = document.createElement('style');
  responsiveFix.textContent = '@media(max-width:800px){html,body{max-width:100%;overflow-x:hidden}.grid{grid-template-columns:1fr!important}.invite-card{flex-wrap:wrap}.invite-card input{min-width:0;flex-basis:100%}.panel,.room{min-width:0}.owner{gap:4px}.top{overflow:hidden}}';
  document.head.appendChild(responsiveFix);
  document.querySelectorAll('[data-page="admin"]').forEach(button => {
    button.addEventListener('click', () => setTimeout(loadRequests, 100));
  });

  await showGuestEntry();
  await enforceGuestApproval();
})();
