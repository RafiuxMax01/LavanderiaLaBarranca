document.addEventListener('DOMContentLoaded', () => {
    // Manejo del menú de navegación
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Ocultar/mostrar la barra de navegación al hacer scroll
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > navbar.offsetHeight) {
            // Scroll hacia abajo
            navbar.classList.add('navbar--hidden');
        } else {
            // Scroll hacia arriba
            navbar.classList.remove('navbar--hidden');
        }
        lastScrollTop = scrollTop;
    });

    // Manejo del formulario de contacto para enviar por WhatsApp
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nombre = this.nombre.value;
            const telefono = this.telefono.value;
            const servicio = this.servicio.value;
            const mensaje = this.mensaje.value;

            const whatsappMessage = `¡Hola! Soy ${nombre} (Tel: ${telefono}). Me gustaría solicitar información/cotización sobre el servicio de ${servicio}. Mi mensaje es: ${mensaje}`;
            const whatsappURL = `https://wa.me/4496547684?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappURL, '_blank');
        });
    }
});