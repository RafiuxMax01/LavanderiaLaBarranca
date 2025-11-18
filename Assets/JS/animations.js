document.addEventListener('DOMContentLoaded', () => {
    // Esencial: Asegurar que GSAP y ScrollTrigger estén cargados
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn("GSAP o ScrollTrigger no están cargados. Algunas animaciones no funcionarán.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // =========================================================
    // 1. ANIMACIÓN CONSTANTE DEL LOGO (WOBBLE - TIPO LAVADO)
    // =========================================================
    // La animación se repite infinitamente para dar la sensación de un logo "activo" o una lavadora funcionando.
    gsap.to(".navbar-logo img", {
        rotation: 1, 
        duration: 0.8,
        ease: "power1.inOut",
        yoyo: true, // Va y vuelve a la posición inicial
        repeat: -1 // Repetición infinita
    });

    // =========================================================
    // 2. ANIMACIÓN: MOVIMIENTO DE FONDO EN BUCLE (SUTIL)
    // =========================================================
    // Mueve la posición del fondo del Hero sutilmente en bucle para darle vida
    // sin depender del scroll.
    gsap.to(".hero", {
        backgroundPosition: "50% 55%", // Mueve el fondo ligeramente hacia abajo
        duration: 8, // Duración larga para que sea muy sutil
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });

    // =========================================================
    // 3. ANIMACIONES DE ENTRADA (ESTÁNDAR)
    // =========================================================

    // Animación para el Hero Section
    gsap.from(".hero h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.out",
        scrollTrigger: { trigger: ".hero", start: "top 90%", toggleActions: "play none none none" }
    });
    gsap.from(".hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5,
        scrollTrigger: { trigger: ".hero", start: "top 90%", toggleActions: "play none none none" }
    });

    // Animación de las Feature Panels (Entrada y rebote)
    // Vuelve a la animación de entrada original, sin pinning, por lo que el scroll fluye normalmente.
    gsap.from(".feature-panel", {
        scrollTrigger: {
            trigger: ".features",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "back.out(1.7)"
    });

    // Animación de las Service Cards
    gsap.from(".service-card", {
        scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power2.out"
    });

    // Animación de la sección CTA
    gsap.from(".cta-section h2, .cta-section p, .cta-section .cta-button", {
        scrollTrigger: {
            trigger: ".cta-section",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.3,
        ease: "power2.out"
    });

    // Animación de elementos en la sección de Contacto
    gsap.from(".contact-info-grid, .contact-form", {
        scrollTrigger: {
            trigger: ".contact-container",
            start: "top 75%",
            toggleActions: "play none none none"
        },
        duration: 1.2,
        opacity: 0,
        x: (i, target) => i % 2 === 0 ? -100 : 100, // Alternar dirección
        ease: "power3.out",
        stagger: 0.2
    });

    // Animación de Comentarios
    gsap.from(".comentario", {
        scrollTrigger: {
            trigger: ".contenedor-comentarios",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        duration: 0.8,
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: "power2.out"
    });
});