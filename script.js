document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click',e=>{
    const target=document.querySelector(link.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
  });
});
const bag=document.querySelector('.header-actions b');
document.querySelectorAll('.product').forEach(card=>{
  card.addEventListener('click',()=>{
    bag.textContent=String(Number(bag.textContent)+1);
    card.animate([{transform:'scale(1)'},{transform:'scale(.985)'},{transform:'scale(1)'}],{duration:220});
  });
});
