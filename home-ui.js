(function () {
  const shell = document.querySelector('#appShell');
  if (!shell) return;

  const icons = {
    home: '<svg viewBox="0 0 24 24"><path d="m3 11 9-8 9 8v10h-6v-6H9v6H3Z"/></svg>',
    rooms: '<svg viewBox="0 0 24 24"><path d="M5 21V5l7-3 7 3v16M9 8h1m4 0h1M9 12h1m4 0h1M3 21h18"/></svg>',
    messages: '<svg viewBox="0 0 24 24"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3 1.5-5A7 7 0 0 1 3 13V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 10h8M8 14h5"/></svg>',
    moments: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="m8 5 1.5-2h5L16 5"/><circle cx="12" cy="13" r="4"/></svg>',
    games: '<svg viewBox="0 0 24 24"><path d="M8 8h8a5 5 0 0 1 4.7 6.7l-1.2 3.4a2.5 2.5 0 0 1-4.1 1L14.2 18H9.8l-1.2 1.1a2.5 2.5 0 0 1-4.1-1l-1.2-3.4A5 5 0 0 1 8 8Z"/><path d="M8 12v4m-2-2h4"/><circle cx="16" cy="13" r=".8"/><circle cx="18" cy="15" r=".8"/></svg>',
    cinema: '<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M3 10h18M7 3l2 3m4-3 2 3m4-3 2 3"/><path d="m10 13 5 2.5-5 2.5Z"/></svg>',
    memories: '<svg viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z"/></svg>',
    profile: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
    back: '<svg viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>',
    backpack: '<svg viewBox="0 0 24 24"><path d="M7 8V6a5 5 0 0 1 10 0v2M5 8h14l2 13H3Z"/><path d="M8 13h8v5H8Z"/></svg>'
  };

  const home = document.createElement('section');
  home.id = 'mobileHome';
  home.className = 'mobile-home';
  home.innerHTML = `
    <header class="home-welcome"><div class="home-photo">Y<span></span></div><div><h2>مرحبًا، <b id="homeUser">يوسف</b></h2><div class="home-balances"><span>🪙 <b id="homeLove">0</b> Love</span><span>♥ <b>980</b> قلب</span></div></div><button aria-label="البحث">⌕</button><button aria-label="الإشعارات">♢<i></i></button></header>
    <article class="home-hero"><div><h1>عِش أجواء الدردشة</h1><p>اقترب ممن تحب<br>واصنع ذكرى بكل لحظة ✨</p><button data-route="room">استكشف الآن ‹</button></div></article>
    <div class="quick-grid"><button data-route="tasks"><b>♥</b><strong>مهامي</strong><small>ألعاب وأسئلة ومكافآت</small></button><button data-route="backpack"><b>🎒</b><strong>حقيبتي</strong><small>هدايا وإطارات وخلفيات</small></button><button data-route="store"><b>🛍️</b><strong>المتجر</strong><small>هدايا وإطارات بالقلوب</small></button><button data-route="messages"><b>💬</b><strong>الرسائل</strong><small>الخاص ورسائل الروم</small></button></div>
    <div class="home-section"><header><h2>✦ المتجر والهدايا</h2><button data-route="store">عرض الكل ‹</button></header><div class="featured-gifts"><article><div>⛵</div><b>رحلة الأحلام</b><span>800 🪙</span></article><article><div>💜</div><b>قلادة السنبلة</b><span>350 🪙</span></article><article><div>🏮</div><b>مصباح السهرة</b><span>200 🪙</span></article><article><div>💝</div><b>باقة رومانسية</b><span>150 🪙</span></article></div></div>
    <div class="home-section"><header><h2>🎁 هدايا القلوب</h2><small>لا توجد ماسات</small></header><div class="points-gifts"><article><div>🏰</div><b>قصر الأحلام</b><span>2000 ♥</span></article><article><div>💍</div><b>خاتم الحب</b><span>1000 ♥</span></article><article><div>💗</div><b>قلب</b><span>500 ♥</span></article><article><div>🧸</div><b>دبدوب</b><span>300 ♥</span></article><article><div>🌹</div><b>وردة</b><span>100 ♥</span></article></div></div>`;
  shell.insertBefore(home, shell.children[1]);

  const extras = document.createElement('div');
  extras.innerHTML = `
    <section class="page app-extra-page" id="messages"><div class="inner-card"><h2>الرسائل</h2><p>محادثاتك الخاصة مستقلة عن غرفة الدردشة.</p><button class="conversation" data-message="sandy"><span class="chat-avatar">S<i></i></span><span><b>ساندي ♥</b><small>محادثة خاصة بينكما</small></span><em>الآن</em></button><button class="conversation" data-route="room"><span class="chat-avatar room-avatar">♕</span><span><b>رسائل الروم الملكي</b><small>دردشة قلعة يوسف وساندي</small></span><em>2</em></button></div></section>
    <section class="page app-extra-page" id="private-chat"><div class="private-chat"><header><span class="chat-avatar">S<i></i></span><div><b>ساندي ♥</b><small>متصلة الآن</small></div></header><div class="private-feed"><p class="bubble other">أهلًا بملك قلبي ♥</p><p class="bubble mine">وأنتِ ملكة قلبي للأبد</p></div><form class="private-write"><button type="button">＋</button><input placeholder="اكتب رسالة خاصة..."><button>إرسال</button></form></div></section>
    <section class="page app-extra-page" id="profile"><div class="profile-card"><div class="profile-avatar">Y<i></i></div><h2>الملك يوسف</h2><p>مالك قلعة Yousef & Sandy</p><div class="profile-actions"><button data-route="studio">🎬<b>استوديو الهدايا</b><small>صمّم فيديو أو هدية متحركة</small></button><button data-route="backpack">🎒<b>حقيبة الظهر</b><small>الهدايا والإطارات والفقاعات</small></button><button data-route="tasks">♥<b>المهام</b><small>ألعاب وأسئلة ومكافآت</small></button><button data-route="store">🛍️<b>المتجر</b><small>هدايا وخلفيات وإطارات</small></button></div><p class="privacy-note">لا عائلة · لا زوار · لا متابعين · لا ماسات</p></div></section>
    <section class="page app-extra-page" id="backpack"><div class="inner-card"><h2>🎒 حقيبة الظهر</h2><div class="inventory-tabs"><button class="active">الهدايا</button><button>الإطارات</button><button>فقاعات الدردشة</button><button>الخلفيات</button></div><div class="inventory-grid"><article><b>🎻</b><strong>الكمان</strong><span>1</span></article><article><b>🎮</b><strong>لوحة الألعاب</strong><span>1</span></article><article><b>🎧</b><strong>سماعات</strong><span>5</span></article><article><b>🎼</b><strong>نوتة موسيقية</strong><span>5</span></article><article><b>💜</b><strong>صندوق نادر</strong><span>1</span></article></div></div></section>
    <section class="page app-extra-page" id="tasks"><div class="inner-card"><h2>♥ مهام الحب</h2><p>أكمل الألعاب والأسئلة لتحصل على قلوب أو هدايا نادرة.</p><div class="task-list"><article><b>سؤال اليوم</b><span>+50 ♥</span><button>ابدأ</button></article><article><b>اربح جولة XO</b><span>صندوق نادر</span><button data-route="games">العب</button></article><article><b>اجمع 100 نقطة حب</b><span>إطار ملكي</span><button data-route="games">ابدأ</button></article></div></div></section>`;
  while (extras.firstElementChild) shell.appendChild(extras.firstElementChild);

  const innerHeader = document.createElement('header');
  innerHeader.className = 'inner-header';
  innerHeader.innerHTML = `<button id="appBack" aria-label="رجوع">${icons.back}</button><h1 id="innerTitle"></h1><span></span>`;
  shell.insertBefore(innerHeader, shell.children[1]);

  const navItems = [
    ['profile', 'الملف الشخصي'], ['moments', 'اللحظات'], ['games', 'الألعاب'],
    ['messages', 'الرسائل'], ['rooms', 'الغرف'], ['memories', 'الذكريات'],
    ['cinema', 'سينمتنا'], ['home', 'الرئيسية']
  ];
  const bottom = document.createElement('nav');
  bottom.className = 'mobile-bottom';
  bottom.innerHTML = navItems.map(([key, label]) => `<button data-home-nav="${key}">${icons[key]}<span>${label}</span></button>`).join('');
  document.body.appendChild(bottom);

  const map = { rooms: 'room', moments: 'memories' };
  const titles = { room: 'الروم الملكي', messages: 'الرسائل', 'private-chat': 'ساندي', profile: 'الملف الشخصي', backpack: 'حقيبة الظهر', tasks: 'المهام', games: 'الألعاب', memories: 'الذكريات', cinema: 'سينمتنا', store: 'المتجر', studio: 'استوديو الهدايا', admin: 'إدارة يوسف' };

  function setPage(page, push = true) {
    page = map[page] || page;
    const target = document.getElementById(page);
    if (!target) return;
    home.style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p === target));
    document.body.classList.add('inner-view');
    innerHeader.classList.add('show');
    document.querySelector('#innerTitle').textContent = titles[page] || 'Yousef & Sandy';
    if (push) history.pushState({ appPage: page }, '', `#${page}`);
    scrollTo(0, 0);
  }

  function showHome(push = true) {
    home.style.display = 'block';
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.body.classList.remove('inner-view');
    innerHeader.classList.remove('show');
    bottom.querySelectorAll('button').forEach(b => b.classList.toggle('active', b.dataset.homeNav === 'home'));
    if (push) history.pushState({ appPage: 'home' }, '', location.pathname + location.search);
    scrollTo(0, 0);
  }

  document.addEventListener('click', e => {
    const route = e.target.closest('[data-route]');
    if (route) { e.preventDefault(); setPage(route.dataset.route); }
    const message = e.target.closest('[data-message="sandy"]');
    if (message) setPage('private-chat');
  });
  bottom.addEventListener('click', e => {
    const button = e.target.closest('[data-home-nav]');
    if (!button) return;
    button.dataset.homeNav === 'home' ? showHome() : setPage(button.dataset.homeNav);
  });
  document.querySelector('#appBack').onclick = () => history.back();
  window.addEventListener('popstate', e => e.state?.appPage && e.state.appPage !== 'home' ? setPage(e.state.appPage, false) : showHome(false));
  document.querySelector('.private-write')?.addEventListener('submit', e => { e.preventDefault(); const input=e.currentTarget.querySelector('input'); if(input.value.trim()){ const p=document.createElement('p');p.className='bubble mine';p.textContent=input.value;e.currentTarget.previousElementSibling.appendChild(p);input.value=''; } });

  const observer = new MutationObserver(() => {
    if (!shell.classList.contains('ready')) return;
    document.querySelector('#homeUser').textContent = document.querySelector('#currentName').textContent.replace('الملك ', '').replace('الملكة ', '');
    document.querySelector('#homeLove').textContent = document.querySelector('#balance').textContent;
    if (!history.state?.appPage) history.replaceState({ appPage: 'home' }, '', location.pathname + location.search);
    showHome(false);
  });
  observer.observe(shell, { attributes: true });
  if (shell.classList.contains('ready')) showHome(false);
})();
