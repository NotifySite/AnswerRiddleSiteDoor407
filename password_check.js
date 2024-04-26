function checkPassword() {
    const input = document.getElementById('password-input');
    allert(ipnut.value)
    const inputHash = sha256(input.value); // Хэшируем введенное значение с использованием SHA-256

    // Хэш правильного пароля (замените на свой)
    const correctPasswordHash = '4c7e6c8d5f2a5c1c6d2f3f7e9e8d8c1a0b6d4c9a7b1f0b3a5c2d2f1a8c6e9'; // Пример: 'password'

    if (inputHash === correctPasswordHash) {
        alert('Пароль верный!');
    } else {
        input.style.borderColor = 'red'; // Подсвечиваем поле ввода красным
        alert('Неверный пароль!');
    }
}

document.getElementById('password-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
});

document.getElementById('password-input').addEventListener('input', function() {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10); // Обрезаем введенное значение до 10 символов
    }
});