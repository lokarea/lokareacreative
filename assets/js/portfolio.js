document.addEventListener('DOMContentLoaded', () => {
    // Interactive Portfolio Filter
    const portfolioItems = document.querySelectorAll('.work-item');
    const filterButtons = document.querySelectorAll('.portfolio-filter');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    gsap.to(item, {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                } else {
                    gsap.to(item, {
                        opacity: 0.3,
                        scale: 0.9,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            });
        });
    });
});