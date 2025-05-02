document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-consent');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const manageCookiesBtn = document.getElementById('manage-cookies');

    // Cek apakah cookies sudah disetujui
    function checkCookieConsent() {
        return localStorage.getItem('cookieConsent') === 'accepted';
    }

    // Tampilkan banner jika belum disetujui
    function showCookieBanner() {
        if (!checkCookieConsent()) {
            cookieBanner.classList.add('show');
        }
    }

    // Terima semua cookies
    function acceptCookies() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBanner.classList.remove('show');

        // Aktifkan Google Analytics atau tracking lain
        initTracking();
    }

    // Kelola preferensi cookies
    function manageCookies() {
        // Buka modal pengaturan cookies
        openCookiePreferencesModal();
    }

    // Fungsi tracking (contoh)
    function initTracking() {
        // Implementasi Google Analytics atau tracking lain
        console.log('Tracking cookies diaktifkan');
    }

    // Modal preferensi cookies (opsional)
    function openCookiePreferencesModal() {
        // Buat modal dengan pilihan cookies yang detail
        alert('Fitur pengaturan cookies akan segera hadir!');
    }

    // Event listeners
    acceptCookiesBtn.addEventListener('click', acceptCookies);
    manageCookiesBtn.addEventListener('click', manageCookies);

    // Tampilkan banner saat halaman dimuat
    showCookieBanner();
});