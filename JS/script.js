// --- LÓGICA PARA OCULTAR LA BARRA DE NAVEGACIÓN AL HACER SCROLL ---

const navbar = document.querySelector('.navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (lastScrollY < window.scrollY) {
        navbar.classList.add('navbar--hidden');
    } else {
        navbar.classList.remove('navbar--hidden');
    }
    lastScrollY = window.scrollY;
});
 // --- Enviar a WhatsApp al enviar el formulario ---
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío tradicional

        const nombre = this.nombre.value.trim();
        const telefono = this.telefono.value.trim();
        const servicio = this.servicio.value;
        const mensaje = this.mensaje.value.trim();

        // Número de WhatsApp al que se enviará el mensaje (formato internacional sin +)
        const numeroWhatsApp = '524496547684';

        // Mensaje prellenado
        const texto = 
`Hola, quisiera agendar un servicio:
Nombre: ${nombre}
Teléfono: ${telefono}
Servicio: ${servicio}
Mensaje: ${mensaje}`;

        const textoCodificado = encodeURIComponent(texto);
        const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

        // Abre WhatsApp en nueva pestaña
        window.open(url, '_blank');
});
