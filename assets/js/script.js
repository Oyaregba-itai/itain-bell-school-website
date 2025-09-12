// Mobile menu toggle
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
if (burger && menu){
  burger.addEventListener('click', ()=> menu.classList.toggle('open'));
}

// Mark active nav based on filename
(function(){
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.menu a').forEach(a=>{
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
})();

// Simple lightbox for gallery
const lightbox = document.querySelector('.lightbox');
if (lightbox){
  lightbox.addEventListener('click', ()=> lightbox.classList.remove('show'));
  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click', ()=>{
      lightbox.querySelector('img').src = img.src;
      lightbox.classList.add('show');
    });
  });
}

// Basic form handler (demo)
function handleSubmit(e){
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Sending...';
  setTimeout(()=>{
    btn.textContent = original;
    alert('Form submitted successfully. (Demo only)');
    e.target.reset();
  }, 800);
}
