const form = document.querySelector('.form');
const inputs = document.querySelectorAll('input')

function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach(input => {
        const parent = input.parentElement;
        const isEmail = input.type === 'email';

        // Remove any previous classes
        parent.classList.remove('error', 'good');

        if (!input.value.trim()) {
            // If the input is empty
            parent.classList.add('error');
        } else if (isEmail && !validateEmail(input.value)) {
            // If the input is an email and is invalid
            parent.classList.add('error');
        } else {
            // If the input is valid
            parent.classList.add('good');
        }
    });
});