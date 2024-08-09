const menuToggle = document.querySelector('#menu-toggle');
const sideBar = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
    sideBar.classList.toggle('active');
    if(menuToggle.classList.contains('fa-bars')) {
        menuToggle.classList.remove('fa-bars');
        menuToggle.classList.add('fa-xmark');
    } else {
        menuToggle.classList.remove('fa-xmark');
        menuToggle.classList.add('fa-bars');
    }
})