(function(){
  const VERSION='20260719-4';
  const css=document.createElement('link');css.rel='stylesheet';css.href='mobile-ui.css?v='+VERSION;document.head.appendChild(css);
  const home=document.createElement('script');home.src='home-ui.js?v='+VERSION;document.body.appendChild(home);
  const manifest=document.createElement('link');manifest.rel='manifest';manifest.href='manifest.webmanifest';document.head.appendChild(manifest);
  const theme=document.createElement('meta');theme.name='theme-color';theme.content='#d4c2f6';document.head.appendChild(theme);
  if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
  document.addEventListener('click',e=>{if(e.target.closest('.write:before'))document.querySelector('.gifts-mini')?.classList.toggle('open')});
  const chat=document.querySelector('.write');if(chat){chat.addEventListener('dblclick',()=>document.querySelector('.gifts-mini')?.classList.toggle('open'));}
  const giftPanel=document.querySelector('.gifts-mini');if(giftPanel){
    const toggle=document.createElement('button');toggle.className='pink';toggle.textContent='🎁 الهدايا والألعاب';toggle.style.cssText='position:fixed;left:16px;bottom:72px;z-index:31;border:0;border-radius:18px;padding:8px 12px';
    toggle.classList.add('gift-panel-toggle');toggle.onclick=()=>giftPanel.classList.toggle('open');document.body.appendChild(toggle);
  }
})();
