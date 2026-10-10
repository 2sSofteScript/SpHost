const mobileMenu = document.getElementById('mobile-menu');
const navbarItems = document.getElementById('navbar-items');

mobileMenu.addEventListener('click', () => {
    navbarItems.classList.toggle('active');

    // Opcional: troca o ícone de barras para um "X" quando aberto
    const icon = mobileMenu.querySelector('i');
    if (navbarItems.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
