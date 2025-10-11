document.addEventListener('DOMContentLoaded', () => {
    // Asegurarse de que GSAP y ScrollTrigger estén cargados
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
        console.warn("GSAP o ScrollTrigger no están cargados. Algunas animaciones no funcionarán.");
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Animación para el Hero Section
    gsap.from(".hero h1", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power3.out"
    });
    gsap.from(".hero p", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5
    });

    // Animación de las Feature Panels
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