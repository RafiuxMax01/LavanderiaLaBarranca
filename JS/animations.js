document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE LA PANTALLA DE CARGA (PRELOADER) ---
    const preloader = document.querySelector('.preloader');
    // Forzamos que se muestre al menos medio segundo para que no sea un flash rápido
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('hidden');
        }
    }, 500);

    // --- INICIALIZACIÓN DE GSAP Y SCROLLTRIGGER ---
    gsap.registerPlugin(ScrollTrigger);

    // --- ANIMACIONES ---

    // 1. Animación de Texto en el Hero (solo en index.html)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        // Dividimos el texto en caracteres envueltos en <span>
        const text = heroTitle.textContent;
        heroTitle.innerHTML = '';
        for (let char of text) {
            heroTitle.innerHTML += `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`;
        }

        // Animamos los caracteres y el párrafo
        gsap.to('.hero .char', {
            y: 0,
            stagger: 0.05,
            delay: 0.7, // Retraso para que empiece después del preloader
            duration: 1.5,
            ease: 'expo.out'
        });

        gsap.fromTo('.hero p', 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, delay: 1.5, duration: 1 }
        );
    }

    // 2. Animación de Paneles de Beneficios (index.html)
    gsap.utils.toArray('.feature-panel').forEach(panel => {
        gsap.fromTo(panel, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: panel,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // 3. Animación de Tarjetas de Servicios (servicios.html)
    gsap.utils.toArray('.service-card').forEach(card => {
        gsap.fromTo(card, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
    
    // 4. Animación de la sección "Nosotros" (nosotros.html)
    if (document.querySelector('.about-section')) {
        gsap.from('.about-section > *', {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.3,
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none none'
            }
        });

        // Animación del SVG
        const svgPath = document.querySelector('#svg-path');
        if (svgPath) {
            const pathLength = svgPath.getTotalLength();
            gsap.set(svgPath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
            gsap.to(svgPath, {
                strokeDashoffset: 0,
                duration: 3,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.animated-svg',
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1
                }
            });
        }
    }

    // 5. Animación del formulario de contacto (contacto.html)
    if (document.querySelector('.contact-container')) {
        gsap.from('.contact-info', {
            opacity: 0, x: -100, duration: 1,
            scrollTrigger: {
                trigger: '.contact-container',
                start: 'top 70%',
            }
        });
        gsap.from('.contact-form', {
            opacity: 0, x: 100, duration: 1,
            scrollTrigger: {
                trigger: '.contact-container',
                start: 'top 70%',
            }
        });
    }

});