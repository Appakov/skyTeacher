
// Выбираем все кнопки и секции
const buttons = document.querySelectorAll('.disciple-btn');
const sections = document.querySelectorAll('.window section');

// Сначала скрываем все секции кроме той, которая соответствует первой кнопке
sections.forEach(section => {
    if (section.dataset.category !== 'btn-journal') {
        section.classList.add('hidden');
    }
});

// Для каждой кнопки добавляем обработчик события
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем значение атрибута data-category нажатой кнопки
        const category = button.dataset.category;

        // Сначала скрываем все секции
        sections.forEach(section => {
            section.classList.add('hidden');
        });

        // Затем показываем соответствующую секцию
        document.querySelector(`section[data-category="${category}"]`).classList.remove('hidden');
    });
});

