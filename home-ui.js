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
    back: '<svg viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>',
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
    landing.innerHTML=`<div class="cinema-landing"><div class="cinema-landing-bg"></div><div class="cinema-entry-actions"><button class="cinema-enter" data-route="cinema-room"><b>🎥</b><span>السينما</span></button><button class="cinema-library-button" type="button"><b>🎞️</b><span>الأفلام</span></button></div><aside class="cinema-library"><header><label class="cinema-plus" aria-label="إضافة فيلم">＋<input class="cinema-storage-input" type="file" accept="video/*"></label><b>الأفلام</b><button class="cinema-library-close" type="button" aria-label="رجوع">‹</button></header><div class="cinema-media-list"><p class="cinema-media-empty">جاري تحميل الأفلام…</p></div><p class="cinema-upload-status"></p></aside></div>`;
    const player=document.createElement('section');player.className='page app-extra-page';player.id='cinema-player';player.innerHTML=`<div class="standalone-player"><header><b>مشغل الأفلام</b><button class="player-close" type="button">‹</button></header><video class="universal-video" controls playsinline preload="metadata"></video><div class="player-title"></div><button class="download-film" type="button">تنزيل الفيلم ⬇</button></div>`;shell.appendChild(player);
    const cinema=document.createElement('section');cinema.className='page app-extra-page';cinema.id='cinema-room';cinema.innerHTML=`<div class="cinema-room"><div class="cinema-live-bg"></div><header><b>السينما</b></header><section class="movie-screen"><video class="cinema-video" controls playsinline preload="metadata"></video><button class="cinema-watch" type="button">مشاهدة</button><aside class="watch-sources"><button data-source="gallery">المعرض</button><button data-source="films">الأفلام</button><button data-source="memories">الذكريات</button><button data-source="moments">اللحظات</button><input class="cinema-gallery-input" type="file" accept="video/*"></aside></section><section class="cinema-mics"><article class="cinema-mic occupied" data-mic="1"><div class="mic-frame frame-one"><span>Y</span></div><b>يوسف</b><small>المايك 1</small><div class="mic-actions"><button data-mic-action="mute">غلق المايك</button><button data-mic-action="leave">ترك المايك</button></div></article><span class="cinema-bond">💍<i>♥</i></span><article class="cinema-mic" data-mic="2"><div class="mic-frame frame-two"><span>＋</span></div><b>المايك 2</b><small>متاح لساندي</small><div class="mic-actions"><button data-mic-action="take">أخذ المايك</button><button data-mic-action="invite">دعوة ساندي</button></div></article></section><div class="cinema-audience"><span class="audience-avatar">Y</span><small>يوسف داخل السينما</small></div><div class="cinema-entry-banner"><span>Y</span><b>يوسف دخل السينما</b><em>Level 32</em></div><footer class="cinema-controls"><button class="cinema-emote-button" type="button">☺</button><button class="cinema-effects-button" type="button">✨</button><button class="cinema-mic-button" type="button">🎙️</button></footer><aside class="cinema-panel emote-panel"><button>😂</button><button>😍</button><button>🥰</button><button>😘</button><button>😮</button><button>👏</button><button>💃</button><button>❤️</button></aside><aside class="cinema-panel effects-panel"><button data-fx="popcorn">🍿<small>فشار</small></button><button data-fx="cola">🥤<small>كولا</small></button><button data-fx="icecream">🍦<small>آيس كريم</small></button><button data-fx="baklava">🧁<small>بقلاوة</small></button><button data-fx="wind">🌬️<small>هواء</small></button><button data-fx="snow">❄️<small>ثلج</small></button><button data-fx="rain">🌧️<small>مطر</small></button><button data-fx="hearts">💞<small>قلوب</small></button><button data-fx="stars">✨<small>نجوم</small></button><button data-fx="roses">🌹<small>ورود</small></button></aside><div class="cinema-fx-stage"></div></div>`;shell.appendChild(cinema);
    cinema.querySelectorAll('.cinema-mic').forEach((mic,index)=>{const picker=document.createElement('div');picker.className='frame-picker';picker.innerHTML='<button class="active" data-frame="one">◉</button><button data-frame="two">◉</button><button data-frame="three">◉</button>';mic.insertBefore(picker,mic.querySelector('.mic-actions'));});
  }
  buildCinema();
  document.querySelectorAll('.universal-video,.cinema-video').forEach(video=>{const jumps=document.createElement('div');jumps.className='video-jumps';jumps.innerHTML='<button type="button" data-jump="-10">↶ 10</button><button type="button" data-jump="10">10 ↷</button>';video.insertAdjacentElement('afterend',jumps);});

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
  const titles = { room: 'الروم الملكي', messages: 'الرسائل', 'private-chat': 'ساندي', profile: 'الملف الشخصي', backpack: 'حقيبة الظهر', tasks: 'المهام', games: 'الألعاب', memories: 'الذكريات', cinema: 'سينمتنا', 'cinema-room': 'السينما', 'cinema-player':'الأفلام', store: 'المتجر', studio: 'استوديو الهدايا', admin: 'إدارة يوسف' };

  function setPage(page, push = true) {
    page = map[page] || page;
    const target = document.getElementById(page);
    if (!target) return;
    home.style.display = 'none';
    document.querySelector('.tabs').style.display = 'none';
    document.querySelectorAll('.page').forEach(p => p.classList.toggle('active', p === target));
    const immersive=['room','cinema-room','cinema-player','private-chat'].includes(page);
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
    if(e.target.closest('.cinema-library-button')) { const library=document.querySelector('.cinema-library');library.dataset.target=e.target.closest('#cinema-room')?'cinema':'player';library.classList.add('open');loadCinemaMedia(); }
    if(e.target.closest('.cinema-library-close')) document.querySelector('.cinema-library')?.classList.remove('open');
    const film=e.target.closest('[data-cinema-film]');
    if(film){ document.querySelector('.cinema-library')?.dataset.target==='cinema'?playInCinema(film.dataset.cinemaFilm):playCinemaFilm(film.dataset.cinemaFilm,film.dataset.filmTitle); }
    if(e.target.closest('.player-close')) history.back();
    if(e.target.closest('.download-film')) downloadCurrentFilm();
    if(e.target.closest('.cinema-watch')) document.querySelector('.watch-sources')?.classList.toggle('open');
    const source=e.target.closest('[data-source]');if(source) chooseCinemaSource(source.dataset.source);
    if(e.target.closest('.cinema-emote-button')) toggleCinemaPanel('.emote-panel');
    if(e.target.closest('.cinema-effects-button')) toggleCinemaPanel('.effects-panel');
    if(e.target.closest('.cinema-mic-button')) document.querySelector('.cinema-mics')?.classList.toggle('manage');
    const emote=e.target.closest('.emote-panel button');if(emote) launchCinemaFx(emote.textContent,'emote');
    const effect=e.target.closest('[data-fx]');if(effect) launchCinemaFx(effect.firstChild.textContent,effect.dataset.fx);
    const micAction=e.target.closest('[data-mic-action]');if(micAction) handleCinemaMic(micAction);
    const frame=e.target.closest('[data-frame]');if(frame){const mic=frame.closest('.cinema-mic'),ring=mic.querySelector('.mic-frame');ring.className=`mic-frame frame-${frame.dataset.frame}`;mic.querySelectorAll('[data-frame]').forEach(b=>b.classList.toggle('active',b===frame));}
    const jump=e.target.closest('[data-jump]');if(jump){const video=jump.parentElement.previousElementSibling;if(video?.tagName==='VIDEO')video.currentTime=Math.max(0,Math.min(video.duration||Infinity,video.currentTime+Number(jump.dataset.jump)));}
  });
  bottom.addEventListener('click', e => {
    const button = e.target.closest('[data-home-nav]');
    if (!button) return;
    button.dataset.homeNav === 'home' ? showHome() : setPage(button.dataset.homeNav);
  });
  async function loadCinemaMedia(){
    const list=document.querySelector('.cinema-media-list');if(!list)return;
    list.innerHTML='<p class="cinema-media-empty">جاري تحميل الأفلام المحفوظة…</p>';
    try{
      const {data,error}=await db.storage.from('cinema-films').list('',{limit:100,sortBy:{column:'created_at',order:'desc'}});if(error)throw error;
      if(!data?.length){list.innerHTML='<p class="cinema-media-empty">لا توجد أفلام محفوظة بعد</p>';return;}
      list.innerHTML='';
      for(const file of data.filter(x=>x.name&&!x.name.endsWith('.emptyFolderPlaceholder'))){
        const {data:signed}=await db.storage.from('cinema-films').createSignedUrl(file.name,3600);
        const parts=file.name.split('__'),rawTitle=(parts.slice(2).join('__')||file.name).replace(/\.[^.]+$/,''),title=/^\d+$/.test(rawTitle)?`فيلم ${list.children.length+1}`:rawTitle.replaceAll('_',' ');
        const card=document.createElement('button');card.className='cinema-film-card';card.dataset.cinemaFilm=signed?.signedUrl||'';card.dataset.filmTitle=title;card.innerHTML=`<div class="film-preview"><video src="${signed?.signedUrl||''}" crossorigin="anonymous" muted playsinline preload="auto"></video><canvas></canvas><span>▶</span></div><b>${title}</b>`;list.appendChild(card);
        captureFilmPoster(card.querySelector('video'),card.querySelector('canvas'));
      }
    }catch(err){list.innerHTML='<p class="cinema-media-empty">يلزم تفعيل مخزن cinema-films في Supabase</p>';}
  }
  function playCinemaFilm(url,title='فيلم'){if(!url)return;const video=document.querySelector('.universal-video');video.src=url;video.dataset.download=url;document.querySelector('.player-title').textContent=title;document.querySelector('.cinema-library')?.classList.remove('open');setPage('cinema-player');video.play().catch(()=>{});}
  function captureFilmPoster(video,canvas){let done=false;const capture=()=>{if(done||!video.videoWidth)return;done=true;try{canvas.width=320;canvas.height=320;const vw=video.videoWidth,vh=video.videoHeight,side=Math.min(vw,vh),sx=(vw-side)/2,sy=(vh-side)/2;canvas.getContext('2d').drawImage(video,sx,sy,side,side,0,0,320,320);canvas.classList.add('ready');video.remove();}catch{video.play().then(()=>setTimeout(()=>video.pause(),250)).catch(()=>{})}};video.addEventListener('loadeddata',()=>{try{video.currentTime=Math.min(2,Math.max(.1,(video.duration||8)/10))}catch{}},{once:true});video.addEventListener('seeked',capture,{once:true});video.addEventListener('canplay',()=>setTimeout(capture,250),{once:true});}
  async function downloadCurrentFilm(){const video=document.querySelector('.universal-video');if(!video?.dataset.download)return;const button=document.querySelector('.download-film'),old=button.textContent;button.textContent='جاري التنزيل…';try{const response=await fetch(video.dataset.download),blob=await response.blob(),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=(document.querySelector('.player-title')?.textContent||'film')+'.mp4';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch{location.href=video.dataset.download}finally{button.textContent=old}}
  function playInCinema(url){if(!url)return;const video=document.querySelector('.cinema-video');video.src=url;document.querySelector('.cinema-library')?.classList.remove('open');setPage('cinema-room');video.play().catch(()=>{});}
  function chooseCinemaSource(source){document.querySelector('.watch-sources')?.classList.remove('open');if(source==='gallery'){document.querySelector('.cinema-gallery-input')?.click();return;}if(source==='films'){const library=document.querySelector('.cinema-library');library.dataset.target='cinema';library.classList.add('open');loadCinemaMedia();return;}setPage('memories');}
  function toggleCinemaPanel(selector){document.querySelectorAll('.cinema-panel').forEach(p=>p.classList.toggle('open',p.matches(selector)&&!p.classList.contains('open')));}
  function launchCinemaFx(symbol,type){
    const stage=document.querySelector('.cinema-fx-stage');if(!stage)return;
    document.querySelector('#cinema-room .cinema-room')?.classList.remove('snow-frozen');
    document.querySelectorAll('.cinema-panel.open').forEach(p=>p.classList.remove('open'));
    stage.innerHTML='';stage.className=`cinema-fx-stage active ${type}`;
    if(type==='emote'){
      const mic=document.querySelector('.cinema-mic.occupied'),bubble=document.createElement('i');bubble.className='mic-emote';bubble.textContent=symbol;mic?.appendChild(bubble);setTimeout(()=>bubble.remove(),2400);return;
    }
    if(type==='snow'){launchSnowstorm(stage);return;}
    if(type==='popcorn'){launchPopcornBurst(stage);return;}
    if(type==='rain'){
      for(let i=0;i<34;i++){const p=document.createElement('i');p.className='weather-particle rain';p.textContent='│';p.style.setProperty('--x',`${(i*37)%101}%`);p.style.setProperty('--delay',`${(i%9)*.16}s`);p.style.setProperty('--drift',`${-28+(i*19)%57}px`);stage.appendChild(p)}
      setTimeout(()=>{stage.className='cinema-fx-stage';stage.innerHTML=''},4300);return;
    }
    const y=document.querySelector('.cinema-mic[data-mic="1"] .mic-frame'),sandy=document.querySelector('.cinema-mic[data-mic="2"] .mic-frame');
    const from=y?.getBoundingClientRect(),to=sandy?.getBoundingClientRect(),gift=document.createElement('i');
    gift.className=`direct-gift ${type}`;gift.textContent=type==='hearts'?'💗':type==='baklava'?'🥮':type==='popcorn'?'🍿':type==='cola'?'🥤':type==='icecream'?'🍨':type==='wind'?'🌬️':type==='stars'?'✨':'🌹';
    const sx=(from?.left||40)+(from?.width||70)/2,sy=(from?.top||innerHeight*.55)+(from?.height||70)/2,ex=(to?.left||innerWidth-90)+(to?.width||70)/2,ey=(to?.top||innerHeight*.55)+(to?.height||70)/2;
    gift.style.setProperty('--sx',`${sx}px`);gift.style.setProperty('--sy',`${sy}px`);gift.style.setProperty('--mx',`${(sx+ex)/2}px`);gift.style.setProperty('--my',`${(sy+ey)/2-105}px`);gift.style.setProperty('--ex',`${ex}px`);gift.style.setProperty('--ey',`${ey}px`);stage.appendChild(gift);
    setTimeout(()=>{stage.className='cinema-fx-stage';stage.innerHTML=''},2600);
  }

  function launchSnowstorm(stage){
    const canvas=document.createElement('canvas'),light=document.createElement('div');canvas.className='cinema-snow-canvas';light.className='snow-white-light';stage.append(light,canvas);
    const ctx=canvas.getContext('2d'),dpr=Math.min(devicePixelRatio||1,1.7);let w=0,h=0,start=performance.now(),raf;
    const resize=()=>{w=innerWidth;h=innerHeight;canvas.width=w*dpr;canvas.height=h*dpr;canvas.style.width=w+'px';canvas.style.height=h+'px';ctx.setTransform(dpr,0,0,dpr,0,0)};resize();
    const flakes=Array.from({length:235},()=>{const z=.15+Math.random()*.95;return{x:Math.random()*innerWidth,y:Math.random()*innerHeight,r:.55+z*z*8.5,z,a:.2+z*.78,v:2.2+z*8.6,spin:Math.random()*6.28,tw:(Math.random()-.5)*.11,seed:Math.random()*8}});
    const drawCrystal=(f)=>{ctx.save();ctx.translate(f.x,f.y);ctx.rotate(f.spin);ctx.globalAlpha=f.a;ctx.strokeStyle=f.z>.72?'#ffffff':'#d9f5ff';ctx.fillStyle='#fff';ctx.lineCap='round';ctx.lineWidth=Math.max(.45,f.r*.12);ctx.shadowColor='#7dd8ff';ctx.shadowBlur=f.r*(f.z>.72?2.7:1.2);for(let k=0;k<6;k++){ctx.rotate(Math.PI/3);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(f.r,0);if(f.r>3.2){ctx.moveTo(f.r*.55,0);ctx.lineTo(f.r*.78,-f.r*.22);ctx.moveTo(f.r*.55,0);ctx.lineTo(f.r*.78,f.r*.22)}ctx.stroke()}ctx.beginPath();ctx.arc(0,0,Math.max(.45,f.r*.1),0,7);ctx.fill();ctx.restore()};
    const frame=now=>{const t=(now-start)/1000,fadeIn=Math.min(1,t/.65),fadeOut=Math.min(1,(8.7-t)/1.3),life=Math.max(0,fadeIn*fadeOut);if(t>8.8){cancelAnimationFrame(raf);stage.className='cinema-fx-stage';stage.innerHTML='';return}ctx.clearRect(0,0,w,h);const impact=Math.exp(-Math.pow((t-3.7)/1.7,2)),gust=(5+impact*18+Math.sin(t*2.1)*5)*life;flakes.forEach(f=>{f.x+=(gust*f.z+Math.sin(t*2.2+f.seed)*1.5)*(.35+f.z);f.y+=f.v*(.72+life*.72+impact*.6);f.spin+=f.tw*(1+impact);if(f.y>h+30){f.y=-20-Math.random()*90;f.x=Math.random()*w}if(f.x>w+55)f.x=-25;if(f.x<-55)f.x=w+25;f.a=(.2+f.z*.76)*life;drawCrystal(f)});raf=requestAnimationFrame(frame)};
    addEventListener('resize',resize,{once:true});raf=requestAnimationFrame(frame);
  }

  function launchPopcornBurst(stage){
    const scene=document.createElement('div');scene.className='popcorn-3d-scene';
    scene.innerHTML='<div class="popcorn-glow"></div><div class="popcorn-bucket"><div class="popcorn-top"></div><div class="popcorn-stripes"></div><b>YS<br><small>CINEMA</small></b></div>';
    stage.appendChild(scene);
    const pieces=['🍿','●','●','✦'];
    for(let i=0;i<26;i++){
      const p=document.createElement('i');p.className='popcorn-kernel';p.textContent=pieces[i%pieces.length];
      const angle=(-155+(i*67)%130)*Math.PI/180,distance=105+(i*43)%235;
      p.style.setProperty('--tx',`${Math.cos(angle)*distance}px`);p.style.setProperty('--ty',`${Math.sin(angle)*distance-70}px`);
      p.style.setProperty('--rz',`${-160+(i*79)%320}deg`);p.style.setProperty('--delay',`${.72+(i%7)*.055}s`);p.style.setProperty('--scale',`${.55+(i%5)*.16}`);
      scene.appendChild(p);
    }
    setTimeout(()=>{stage.className='cinema-fx-stage';stage.innerHTML=''},4700);
  }
  function handleCinemaMic(button){const mic=button.closest('.cinema-mic'),action=button.dataset.micAction;if(action==='take'){mic.classList.add('occupied');mic.querySelector('.mic-frame span').textContent=(document.querySelector('#currentName')?.textContent||'ساندي').includes('ساندي')?'S':'Y';mic.querySelector('b').textContent=(document.querySelector('#currentName')?.textContent||'ساندي').replace('الملكة ','').replace('الملك ','');mic.querySelector('small').textContent='على المايك';mic.querySelector('.mic-actions').innerHTML='<button data-mic-action="mute">غلق المايك</button><button data-mic-action="leave">ترك المايك</button>';return;}if(action==='leave'){mic.classList.remove('occupied','muted');mic.querySelector('.mic-frame span').textContent='＋';mic.querySelector('b').textContent='المايك '+mic.dataset.mic;mic.querySelector('small').textContent='متاح';mic.querySelector('.mic-actions').innerHTML='<button data-mic-action="take">أخذ المايك</button><button data-mic-action="invite">دعوة ساندي</button>';return;}if(action==='mute'){mic.classList.toggle('muted');button.textContent=mic.classList.contains('muted')?'فتح المايك':'غلق المايك';return;}if(action==='invite'){button.textContent='تم إرسال الدعوة ✓';}}
  document.addEventListener('change',async e=>{
    const gallery=e.target.closest('.cinema-gallery-input');if(gallery?.files?.[0]){const url=URL.createObjectURL(gallery.files[0]),video=document.querySelector('.cinema-video');video.src=url;video.play().catch(()=>{});return;}
    const input=e.target.closest('.cinema-storage-input');if(!input?.files?.[0])return;
    const status=document.querySelector('.cinema-upload-status'),file=input.files[0];status.textContent='جاري حفظ الفيلم…';
    try{const who=(document.querySelector('#currentName')?.textContent||'يوسف').includes('ساندي')?'sandy':'yousef',ext=(file.name.split('.').pop()||'mp4').toLowerCase();let suggested=file.name.replace(/\.[^.]+$/,'').replace(/^\d+$/,'فيلم جديد');const chosen=(prompt('اكتب اسم الفيلم',suggested)||suggested).trim();const safe=chosen.replace(/[^\p{L}\p{N}._-]/gu,'_');const path=`${who}__${Date.now()}__${safe}.${ext}`;const {error}=await db.storage.from('cinema-films').upload(path,file,{cacheControl:'3600'});if(error)throw error;status.textContent='تم حفظ الفيلم في الوسائط ✓';input.value='';loadCinemaMedia();}catch(err){status.textContent='تعذر الحفظ: فعّل مخزن الأفلام أولًا';}
  });
  document.querySelector('#appBack').onclick = () => history.back();
  window.addEventListener('popstate', e => e.state?.appPage && e.state.appPage !== 'home' ? setPage(e.state.appPage, false) : showHome(false));
  document.querySelector('.private-write')?.addEventListener('submit', e => { e.preventDefault(); const input=e.currentTarget.querySelector('input'); if(input.value.trim()){ const p=document.createElement('p');p.className='bubble mine';p.textContent=input.value;e.currentTarget.previousElementSibling.appendChild(p);input.value=''; } });

  const observer = new MutationObserver(() => {
    if (!shell.classList.contains('ready')) return;
    document.querySelector('#homeUser').textContent = document.querySelector('#currentName').textContent.replace('الملك ', '').replace('الملكة ', '');
    document.querySelector('#homeLove').textContent = document.querySelector('#balance').textContent;
    const fullName=document.querySelector('#currentName')?.textContent||'الملك يوسف',isSandy=fullName.includes('ساندي'),shortName=isSandy?'ساندي':'يوسف',letter=isSandy?'S':'Y';
    const firstMic=document.querySelector('.cinema-mic[data-mic="1"]');if(firstMic){firstMic.querySelector('.mic-frame span').textContent=letter;firstMic.querySelector('b').textContent=shortName;}
    document.querySelectorAll('.audience-avatar,.cinema-entry-banner>span').forEach(node=>node.textContent=letter);const audience=document.querySelector('.cinema-audience small');if(audience)audience.textContent=`${shortName} داخل السينما`;const banner=document.querySelector('.cinema-entry-banner b');if(banner)banner.textContent=`${shortName} دخل السينما`;
    if (!history.state?.appPage) history.replaceState({ appPage: 'home' }, '', location.pathname + location.search);
    showHome(false);
  });
  observer.observe(shell, { attributes: true });
  if (shell.classList.contains('ready')) showHome(false);
})();
