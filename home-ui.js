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
    <section class="page app-extra-page" id="private-chat"><div class="private-chat"><header><span class="chat-avatar">S<i></i></span><div><b>ساندي ♥</b><small>متصلة الآن</small></div></header><div class="private-feed"><p class="bubble other">أهلًا بملك قلبي ♥</p><p class="bubble mine">وأنتِ ملكة قلبي للأبد</p></div><form class="private-write"><button type="button">＋</button><input placeholder="اكتب رسالة خاصة..."><button class="send-plane" aria-label="إرسال"><svg viewBox="0 0 24 24"><path d="M21 3 3 12l18 9-4-9Z"/></svg></button></form></div></section>
    <section class="page app-extra-page" id="profile"><div class="profile-card"><div class="profile-avatar">Y<i></i></div><h2>الملك يوسف</h2><p>مالك قلعة Yousef & Sandy</p><div class="profile-actions"><button data-route="studio">🎬<b>استوديو الهدايا</b><small>صمّم فيديو أو هدية متحركة</small></button><button data-route="backpack">🎒<b>حقيبة الظهر</b><small>الهدايا والإطارات والفقاعات</small></button><button data-route="tasks">♥<b>المهام</b><small>ألعاب وأسئلة ومكافآت</small></button><button data-route="store">🛍️<b>المتجر</b><small>هدايا وخلفيات وإطارات</small></button></div><p class="privacy-note">لا عائلة · لا زوار · لا متابعين · لا ماسات</p></div></section>
    <section class="page app-extra-page" id="backpack"><div class="inner-card"><h2>🎒 حقيبة الظهر</h2><div class="inventory-tabs"><button class="active">الهدايا</button><button>الإطارات</button><button>فقاعات الدردشة</button><button>الخلفيات</button></div><div class="inventory-grid"><article><b>🎻</b><strong>الكمان</strong><span>1</span></article><article><b>🎮</b><strong>لوحة الألعاب</strong><span>1</span></article><article><b>🎧</b><strong>سماعات</strong><span>5</span></article><article><b>🎼</b><strong>نوتة موسيقية</strong><span>5</span></article><article><b>💜</b><strong>صندوق نادر</strong><span>1</span></article></div></div></section>
    <section class="page app-extra-page" id="tasks"><div class="inner-card"><h2>♥ مهام الحب</h2><p>أكمل الألعاب والأسئلة لتحصل على قلوب أو هدايا نادرة.</p><div class="task-list"><article><b>سؤال اليوم</b><span>+50 ♥</span><button>ابدأ</button></article><article><b>اربح جولة XO</b><span>صندوق نادر</span><button data-route="games">العب</button></article><article><b>اجمع 100 نقطة حب</b><span>إطار ملكي</span><button data-route="games">ابدأ</button></article></div></div></section>`;
  while (extras.firstElementChild) shell.appendChild(extras.firstElementChild);

  function buildRoyalRoom() {
    const roomPage = document.querySelector('#room');
    if (!roomPage) return;
    roomPage.innerHTML = `<div class="live-room">
      <div class="live-bg" aria-hidden="true"></div><div class="petals" aria-hidden="true"></div>
      <header class="room-status"><button class="room-owner" type="button"><span class="mini-avatar">Y</span><div><b>Yousef</b><small>مستوى الروم 5 · يتقدم نقطة كل أسبوع</small></div></button><div class="room-tools"><button class="background-button" aria-label="الخلفيات">🌌</button><button aria-label="المزيد">•••</button><button aria-label="تشغيل وإيقاف">◉</button></div></header>
      <button class="rocket-bar" type="button"><span>🚀</span><div><b>صاروخ الحب الأول</b><small>اضغط لمشاهدة هدايا جميع المستويات</small><i><em style="width:28%"></em></i></div><strong>28%</strong></button>
      <section class="room-revenue"><b>ربح الروم من الهدايا</b><span>284,500 Love</span><i><em style="width:28.45%"></em></i><small>الهدف الأسبوعي 1,000,000 Love</small></section>
      <section class="royal-mics"><article><div class="royal-ring sandy-ring"><span>S</span></div><b>الملكة ساندي</b><small>14,250 Love</small></article><div class="love-link">♥<small>23·7·2025</small></div><article><div class="royal-ring"><span>Y</span></div><b>الملك يوسف</b><small>8,420 Love</small></article></section>
      <section class="room-seats"><button><span>＋</span><b>مايك 3</b></button><button><span>＋</span><b>مايك 4</b></button><button><span>＋</span><b>مايك 5</b></button><button><span>＋</span><b>مايك 6</b></button></section>
      <section class="room-chat-feed"><div class="room-notice">الغرفة خاصة بيوسف وساندي · استمتعوا باحترام واصنعوا ذكريات جميلة ♥</div><div class="room-game-card"><b>♥ مهمة نقاط الحب</b><span>أجيبا عن سؤال اليوم لتحصلا على 50 قلبًا</span><button data-route="tasks">ابدأ</button></div><p><span class="msg-avatar">S</span><b>ساندي <i>ملكة الروم</i></b><em>أهلًا بملك قلبي الأبدي ♥</em></p><p><span class="msg-avatar yousef">Y</span><b>يوسف <i>VIP الملكي</i></b><em>وأنتِ ملكة قلبي للأبد</em></p><div class="rocket-message">🚀 بقي 720 Love لإطلاق صاروخ الحب الأول</div></section>
      <footer class="room-compose"><button class="room-gift-button" type="button">🎁</button><button type="button">▦</button><button type="button">💬</button><button type="button">🎙️</button><button type="button">☺</button><form><input placeholder="قل شيئًا..."><button class="send-plane" aria-label="إرسال"><svg viewBox="0 0 24 24"><path d="M21 3 3 12l18 9-4-9Z"/></svg></button></form></footer>
      <aside class="room-gift-drawer"><div class="drawer-handle"></div><header><b>صندوق الهدايا</b><button type="button">✕</button></header><nav><button class="active">الحقيبة</button><button>الأعلام</button><button>الأحداث الأسبوعية</button><button>الخاصة</button><button>VIP</button><button>SVIP</button><button>هدايا المستوى</button><button>تفاعلية</button></nav><div class="drawer-gifts"><article><b>🎒</b><span>من حقيبتي</span><small>1 متاح</small></article><article><b>🇸🇾</b><span>علم سوريا</span><small>140 Love</small></article><article><b>🇮🇶</b><span>علم العراق</span><small>140 Love</small></article><article><b>💞</b><span>هدية تفاعلية</span><small>500 Love</small></article><article><b>👑</b><span>هدية SVIP</span><small>5,000 Love</small></article></div><button class="drawer-send">إرسال الهدية</button></aside>
      <aside class="room-popup backgrounds-popup"><header><b>الخلفيات الحية</b><button>✕</button></header><div><button data-bg="sunset"><span>🌅</span>قصر الغروب</button><button data-bg="stars"><span>🌌</span>ليل النجوم</button><button data-bg="cinema"><span>🎬</span>سينما الحب</button><button data-bg="royal"><span>🏰</span>القلعة الملكية</button></div></aside>
      <aside class="room-popup rockets-popup"><header><b>مستويات صواريخ الحب</b><button>✕</button></header><div class="rocket-levels"><article><b>🚀 Level 1</b><span>🌹 🧸 💜</span><small>10,000 Love</small></article><article><b>🚀 Level 2</b><span>💍 🕊️ 🎻</span><small>50,000 Love</small></article><article><b>🚀 Level 3</b><span>🐺 👑 🏰</span><small>150,000 Love</small></article><article><b>🚀 Level 4</b><span>💞 🦋 🌌</span><small>500,000 Love</small></article><article><b>🚀 Level 5</b><span>🏰 💍 👑</span><small>1,000,000 Love</small></article></div></aside>
      <aside class="room-popup level-popup"><header><b>مستوى الغرفة</b><button>✕</button></header><div class="level-detail"><strong>Level 5</strong><p>يتقدم مستوى الروم نقطة تلقائيًا كل أسبوع.</p><i><em style="width:60%"></em></i><small>بقي 3 أيام للنقطة التالية</small></div></aside>
    </div>`;
    const drawer = roomPage.querySelector('.room-gift-drawer');
    roomPage.querySelector('.room-gift-button').onclick = () => drawer.classList.add('open');
    drawer.querySelector('header button').onclick = () => drawer.classList.remove('open');
    const backgrounds=roomPage.querySelector('.backgrounds-popup'), rockets=roomPage.querySelector('.rockets-popup'), level=roomPage.querySelector('.level-popup');
    roomPage.querySelector('.background-button').onclick=()=>backgrounds.classList.add('open');
    roomPage.querySelector('.rocket-bar').onclick=()=>rockets.classList.add('open');
    roomPage.querySelector('.room-owner').onclick=()=>level.classList.add('open');
    roomPage.querySelectorAll('.room-popup header button').forEach(button=>button.onclick=()=>button.closest('.room-popup').classList.remove('open'));
    roomPage.querySelectorAll('[data-bg]').forEach(button=>button.onclick=()=>{roomPage.querySelector('.live-bg').dataset.theme=button.dataset.bg;backgrounds.classList.remove('open')});
    roomPage.querySelector('.room-compose form').onsubmit = e => {
      e.preventDefault(); const input=e.currentTarget.querySelector('input'); if(!input.value.trim()) return;
      const p=document.createElement('p'); p.innerHTML=`<span class="msg-avatar yousef">Y</span><b>يوسف <i>VIP الملكي</i></b><em></em>`;p.querySelector('em').textContent=input.value;
      roomPage.querySelector('.room-chat-feed').appendChild(p);input.value='';p.scrollIntoView({behavior:'smooth',block:'end'});
    };
    for(let n=0;n<15;n++){const petal=document.createElement('i');petal.style.setProperty('--x',`${(n*37)%100}%`);petal.style.setProperty('--d',`${7+(n%6)}s`);petal.style.setProperty('--delay',`${-(n%8)}s`);roomPage.querySelector('.petals').appendChild(petal);}
  }
  buildRoyalRoom();

  function buildCinema() {
    const landing=document.querySelector('#cinema');if(!landing)return;
    landing.innerHTML=`<div class="cinema-landing"><div>🎬</div><h2>سينمتنا الخاصة</h2><p>ادخلا غرفة السينما، ارفعا فيلمًا واجلسا على المايكين للمشاهدة معًا.</p><button data-route="cinema-room">دخول غرفة السينما</button></div>`;
    const cinema=document.createElement('section');cinema.className='page app-extra-page';cinema.id='cinema-room';cinema.innerHTML=`<div class="cinema-room"><div class="cinema-live-bg"></div><header><b>سينما يوسف وساندي</b><span>9D CINEMA</span></header><section class="movie-screen"><div class="screen-glow"></div><b>🎞️</b><h2>الشاشة الملكية المباشرة</h2><p>ارفع الفيلم لبدء المشاهدة المتزامنة</p><button>اختيار فيلم</button></section><nav class="cinema-effects"><button>🌬️ هواء 9D</button><button>✨ نجوم</button><button>🌧️ مطر</button><button>💗 رومانسية</button><button>🔊 صوت محيطي</button></nav><section class="cinema-mics"><article><div>S</div><b>ساندي</b><small>المايك 1</small></article><span>♥</span><article><div>Y</div><b>يوسف</b><small>المايك 2</small></article></section><footer><button type="button">🎁</button><form><input placeholder="اكتب أثناء الفيلم..."><button class="send-plane" aria-label="إرسال"><svg viewBox="0 0 24 24"><path d="M21 3 3 12l18 9-4-9Z"/></svg></button></form><button type="button">🎙️</button></footer></div>`;shell.appendChild(cinema);
  }
  buildCinema();

  let roomScroll=0;
  document.addEventListener('focusin',event=>{
    if(!event.target.closest('.room-compose,.cinema-room>footer,.private-write'))return;
    roomScroll=scrollY;document.documentElement.style.setProperty('--app-height',`${window.visualViewport?.height||innerHeight}px`);
    document.body.classList.add('keyboard-open');requestAnimationFrame(()=>scrollTo(0,0));
  });
  document.addEventListener('focusout',event=>{
    if(!event.target.closest('.room-compose,.cinema-room>footer,.private-write'))return;
    setTimeout(()=>{document.body.classList.remove('keyboard-open');scrollTo(0,roomScroll)},120);
  });
  window.visualViewport?.addEventListener('resize',()=>{
    document.documentElement.style.setProperty('--app-height',`${window.visualViewport.height}px`);
    if(document.body.classList.contains('keyboard-open'))scrollTo(0,0);
  });
  window.visualViewport?.addEventListener('scroll',()=>{if(document.body.classList.contains('keyboard-open'))scrollTo(0,0)});

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
  bottom.innerHTML = navItems.map(([key, label]) => `<button type="button" data-home-nav="${key}"><b class="nav-3d-icon">${icons[key]}</b><span>${label}</span></button>`).join('');
  document.body.appendChild(bottom);

  const map = { rooms: 'room', moments: 'memories' };
  const titles = { room: 'الروم الملكي', messages: 'الرسائل', 'private-chat': 'ساندي', profile: 'الملف الشخصي', backpack: 'حقيبة الظهر', tasks: 'المهام', games: 'الألعاب', memories: 'الذكريات', cinema: 'سينمتنا', 'cinema-room': 'غرفة السينما', store: 'المتجر', studio: 'استوديو الهدايا', admin: 'إدارة يوسف' };

  function setPage(page, push = true) {
    page = map[page] || page;
    const target = document.getElementById(page);
    if (!target) return;
    home.style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p === target));
    const immersive=['room','cinema-room','private-chat'].includes(page);
    document.body.classList.toggle('inner-view',immersive);
    document.body.classList.toggle('section-view',!immersive);
    innerHeader.classList.add('show');
    document.querySelector('#innerTitle').textContent = titles[page] || 'Yousef Sandy';
    const navPage = page === 'room' ? 'rooms' : page;
    bottom.querySelectorAll('button').forEach(button => {
      const active = button.dataset.homeNav === navPage;
      button.classList.toggle('active', active);
      button.setAttribute('aria-current', active ? 'page' : 'false');
    });
    if (push) history.pushState({ appPage: page }, '', `#${page}`);
    scrollTo(0, 0);
  }

  function showHome(push = true) {
    home.style.display = 'block';
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.body.classList.remove('inner-view');
    document.body.classList.remove('section-view');
    innerHeader.classList.remove('show');
    bottom.querySelectorAll('button').forEach(b => {
      const active = b.dataset.homeNav === 'home';
      b.classList.toggle('active', active);
      b.setAttribute('aria-current', active ? 'page' : 'false');
    });
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
