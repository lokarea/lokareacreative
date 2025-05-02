document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('projectForm');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxs_BiGwCA1nbECRMyeViKY1KASQocYkCxcmtBq5V6bnmIOD1SwrGpeHRnAau8gzLzJIg/exec';

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            project_type: formData.get('project_type'),
            project_details: formData.get('project_details'),
            budget: formData.get('budget')
        };

        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                alert(result.message);
                form.reset();
            })
            .catch(error => {
                console.error('Error!', error);
                alert('Terjadi kesalahan. Silakan coba lagi.');
            });
    });
});