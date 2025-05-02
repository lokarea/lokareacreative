document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'GOOGLE_SHEETS_SCRIPT_URL';
    const form = document.getElementById('projectForm');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);

        fetch(scriptURL, {
            method: 'POST',
            body: formData
        })
            .then(response => {
                alert("Terima kasih! Tim kami segera menghubungi Anda.");
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error.message);
            });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const budgetRange = document.querySelector('input[name="budget"]');
    const budgetDisplay = document.querySelector('.budget-display');

    budgetRange.addEventListener('input', () => {
        const value = budgetRange.value;
        budgetDisplay.textContent = `Rp ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    });
});