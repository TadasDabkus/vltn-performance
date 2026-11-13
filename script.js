const bag = document.querySelector('.header-actions b');
const progress = document.querySelector('.scroll-progress');

/* Smooth internal navigation */
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

/* Product interaction */
document.querySelectorAll('.product').forEach(card=>{
  card.addEventListener('click',()=>{
    if(bag) bag.textContent=String(Number(bag.textContent)+1);
    card.animate(
      [{transform:'translateY(0)'},{transform:'translateY(-3px)'},{transform:'translateY(0)'}],
      {duration:260,easing:'ease-out'}
    );
  });
});

/* Scroll reveal */
const revealItems=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver((entries,observer)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12,rootMargin:'0px 0px -40px'});
revealItems.forEach(el=>revealObserver.observe(el));

/* Page progress */
const updateProgress=()=>{
  const scrollable=document.documentElement.scrollHeight-window.innerHeight;
  progress.style.transform=`scaleX(${scrollable>0 ? window.scrollY/scrollable : 0})`;
};
window.addEventListener('scroll',updateProgress,{passive:true});
updateProgress();

/* Desktop cursor atmosphere */
const glow=document.querySelector('.cursor-glow');
if(glow && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('pointermove',e=>{
    glow.style.transform=`translate3d(${e.clientX}px,${e.clientY}px,0)`;
  },{passive:true});
}

/* Very subtle hero movement on scroll; never changes the crop/layout. */
const heroBg=document.querySelector('.hero-bg');
if(heroBg && window.matchMedia('(pointer:fine)').matches){
  window.addEventListener('scroll',()=>{
    const y=Math.min(window.scrollY*.035,18);
    heroBg.style.transform=`scale(1.002) translateY(${y}px)`;
  },{passive:true});
}
