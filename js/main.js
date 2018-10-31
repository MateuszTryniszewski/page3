document.getElementById('hamburger').addEventListener("click",function(){
     document.getElementById('mobile').classList.toggle('show');
});

window.sr = ScrollReveal();
sr.reveal('.flex-item', {
    reset: false,
    delay: 300,
    distance: '100px',
    origin: 'right'
});
sr.reveal('img,i,.about-content', {
    reset: false,
    delay: 500,
    distance: '100px',
    origin: 'right'
});
sr.reveal('p,h1,h2,h3,.col', {
    reset: false,
    delay: 500,
    distance: '100px',
    origin: 'right'
});
