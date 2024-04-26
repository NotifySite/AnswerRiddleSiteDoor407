const contentBox = document.querySelector('.content');
const input = document.getElementById('password-input');

function checkPassword() {
    const inputHash = sha256(input.value);
    const correctPasswordHash = '6468e22921802c6d2264cb4c452ef810f2915330f7ef71d5a3d4b5c5bddd4f52';
    if (inputHash === correctPasswordHash) {
        const result = CryptoJS.AES.decrypt('U2FsdGVkX1/DWgFkxJyFvBxV5JlOBuTcKN5ZQiL7fOY=', input.value).toString(CryptoJS.enc.Utf8);
        input.style.display = 'none';
        contentBox.innerHTML = `<div class="correct-password-block">${result}</div>`;
    } else {
        input.style.borderColor = 'red';
    }
}

document.getElementById('password-input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

document.getElementById('password-input').addEventListener('input', function () {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});