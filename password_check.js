const contentBox = document.querySelector('.content');
const form = document.getElementById('password-form');
const input = document.getElementById('password-input');

function checkPassword() {
    const inputHash = sha256(input.value);
    const correctPasswordHash = 'fEO2XSqoGKAIPSUIbcr/MCYwmdJye3yZJ5Xh1+5MfYM=';
    if (inputHash === correctPasswordHash) {
        const result = CryptoJS.AES.decrypt('U2FsdGVkX19hT7jsiRO7jSx9aPe3PtCsTl+qwH6p9aM=', input.value).toString(CryptoJS.enc.Utf8);
        form.style.display = 'none';
        contentBox.innerHTML = `<div class="correct-password-block">${result}</div>`;
    } else {
        input.style.borderColor = 'red';
    }
}

input.addEventListener('input', function () {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

form.addEventListener('submit', function (event) {
    event.preventDefault();
    checkPassword();
});
