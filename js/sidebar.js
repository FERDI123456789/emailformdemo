const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar')

burgerMenu.addEventListener('click', () => {
    sidebar.classList.toggle('open')
});