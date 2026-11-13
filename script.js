document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const href=link.getAttribute('href');
    if(!href || href==="#") return;
    const target=document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

const bag=document.querySelector('.header-actions b');

document.querySelectorAll('.product').forEach(card=>{
  card.addEventListener('click',()=>{
    if(bag){
      bag.textContent=String(Number(bag.textContent)+1);
    }
    card.animate(
      [{transform:'scale(1)'},{transform:'scale(.985)'},{transform:'scale(1)'}],
      {duration:220,easing:'ease-out'}
    );
  });
});

/* Scroll reveal — keeps the existing structure, but makes the page feel alive. */
const revealItems=document.querySelectorAll(
  '.feature-bar article, .collection-intro, .product, .campaign, .technology > div, .tech-grid article, .about'
);
revealItems.forEach((el,index)=>{
  el.classList.add('reveal');
  el.style.setProperty('--reveal-delay', `${Math.min(index * 45, 220)}ms`);
});

const revealObserver=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
revealItems.forEach(el=>revealObserver.observe(el));

/* Small scroll progress indicator. */
const progress=document.createElement('div');
progress.className='scroll-progress';
document.body.appendChild(progress);

const updateProgress=()=>{
  const scrollable=document.documentElement.scrollHeight-window.innerHeight;
  const amount=scrollable>0 ? window.scrollY/scrollable : 0;
  progress.style.transform=`scaleX(${amount})`;
};
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();

/* Lightweight cursor glow on desktop. */
const cursorGlow=document.createElement('div');
cursorGlow.className='cursor-glow';
document.body.appendChild(cursorGlow);
window.addEventListener('pointermove',e=>{
  cursorGlow.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
},{passive:true});

/* Gentle parallax for the campaign image only — the hero stays uncropped. */
const campaignImage=document.querySelector('.campaign-image img');
if(campaignImage && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('scroll',()=>{
    const rect=campaignImage.getBoundingClientRect();
    const offset=(window.innerHeight/2-rect.top)/window.innerHeight;
    campaignImage.style.transform=`translateY(${Math.max(-10,Math.min(10,offset*10))}px)`;
  },{passive:true});
}
