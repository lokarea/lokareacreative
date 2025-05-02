document.addEventListener('DOMContentLoaded', () => {
    // GSAP ScrollTrigger Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from('.hero-content', {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out'
    });

    // Services Section Animation
    gsap.utils.toArray('.service-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power2.out'
        });
    });

    // Testimonial Carousel Animation
    gsap.utils.toArray('.testimonial-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            scale: 0.8,
            duration: 0.6,
            ease: 'back.out(1.7)'
        });
    });

    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.2
        });
    });

    // Clients Marquee
    gsap.to('.client-logos', {
        x: '-50%',
        ease: 'linear',
        repeat: -1,
        duration: 10
    });
});