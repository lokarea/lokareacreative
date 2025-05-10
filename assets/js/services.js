document.addEventListener('DOMContentLoaded', function () {
    // Swiper Testimonial Initialization
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        breakpoints: {
            // Responsive breakpoints
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });

    // Testimonial Hover Effect
    const testimonialSlides = document.querySelectorAll('.testimonial-swiper .swiper-slide');
    testimonialSlides.forEach(slide => {
        slide.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
        });
        slide.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });

    // Service Card Interaction
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        const ctaButton = card.querySelector('.service-cta .btn');

        card.addEventListener('mouseenter', function () {
            ctaButton.classList.remove('btn-primary');
            ctaButton.classList.add('btn-success');
        });

        card.addEventListener('mouseleave', function () {
            ctaButton.classList.remove('btn-success');
            ctaButton.classList.add('btn-primary');
        });
    });
});