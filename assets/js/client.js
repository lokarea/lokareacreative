// Partner Logo Marquee Script
document.addEventListener('DOMContentLoaded', function () {
    const marqueeContainer = document.querySelector('.partners-marquee-container');
    const marquee = document.querySelector('.partners-marquee');

    // Cek apakah element marquee ada di halaman
    if (!marquee || !marqueeContainer) return;

    // Perbaiki animasi saat window resize
    function adjustMarquee() {
        // Hitung kembali lebar total untuk memastikan animasi bekerja dengan baik
        const firstTrack = marquee.querySelector('.partners-track');
        if (firstTrack) {
            const trackWidth = firstTrack.offsetWidth;

            // Update animasi CSS dengan durasi yang tepat berdasarkan ukuran
            const newDuration = trackWidth / 50; // Sesuaikan angka untuk kecepatan
            marquee.style.animationDuration = `${newDuration}s`;
        }
    }

    // Set animasi untuk pertama kali
    adjustMarquee();

    // Reset animasi saat window resize
    window.addEventListener('resize', adjustMarquee);

    // Pause atau jalankan animasi saat hover
    marqueeContainer.addEventListener('mouseenter', () => {
        marquee.style.animationPlayState = 'paused';
    });

    marqueeContainer.addEventListener('mouseleave', () => {
        marquee.style.animationPlayState = 'running';
    });

    // Tambahkan interaksi saat klik logo partner
    const partnerLogos = document.querySelectorAll('.partner-logo');
    partnerLogos.forEach(logo => {
        logo.addEventListener('click', () => {
            // Misalnya, bisa buka tautan ke website partner
            // window.open(logo.dataset.url, '_blank');
            console.log('Partner logo clicked:', logo.querySelector('img').alt);
        });
    });
});