const menuOpen= document.getElementById('open-menu');
function openMenu(){
    const menu= document.getElementById('menu-mobile');
    menu.classList.toggle('active');
}
menuOpen.addEventListener('click',openMenu);
