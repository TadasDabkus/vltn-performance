const menu=document.querySelector('.menu');
if(menu){menu.addEventListener('click',()=>{menu.classList.toggle('active');const s=menu.querySelectorAll('span');if(menu.classList.contains('active')){s[0].style.transform='translateY(3.5px) rotate(45deg)';s[1].style.transform='translateY(-3.5px) rotate(-45deg)'}else{s[0].style.transform='';s[1].style.transform=''}})}
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.manifesto-grid,.product,.campaign-card,.statement,.footer-cta h2').forEach(el=>observer.observe(el));
