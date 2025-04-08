document.addEventListener("DOMContentLoaded", () => {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');

    button1.addEventListener('click', () => {
        alert('Вы нажали на кнопку 1!');
        button1.classList.add('clicked');
        setTimeout(() => button1.classList.remove('clicked'), 300);
    });

    button2.addEventListener('click', () => {
        alert('Вы нажали на кнопку 2!');
        button2.classList.add('clicked');
        setTimeout(() => button2.classList.remove('clicked'), 300);
    });
});
