
// // Выбираем все кнопки и секции
// const buttons = document.querySelectorAll('.disciple-btn');
// const sections = document.querySelectorAll('.window section');

// // Сначала скрываем все секции кроме той, которая соответствует первой кнопке
// sections.forEach(section => {
//     if (section.dataset.category !== 'btn-journal') {
//         section.classList.add('hidden');
//     }
// });

// // Для каждой кнопки добавляем обработчик события
// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         // Получаем значение атрибута data-category нажатой кнопки
//         const category = button.dataset.category;

//         // Сначала скрываем все секции
//         sections.forEach(section => {
//             section.classList.add('hidden');
//         });

//         // Затем показываем соответствующую секцию
//         document.querySelector(`section[data-category="${category}"]`).classList.remove('hidden');
//     });
// });

// Выбираем все кнопки и секции
const buttons = document.querySelectorAll('.disciple-btn');
const sections = document.querySelectorAll('.window section');

// Сначала скрываем все секции кроме той, которая соответствует первой кнопке
sections.forEach(section => {
    if (section.dataset.category !== 'btn-journal') {
        section.classList.add('hidden');
    }
});

// Выделяем первую кнопку цветом, так как её секция видима по умолчанию
const initialButton = document.querySelector('.disciple-btn[data-category="btn-journal"]');
initialButton.classList.add('active');

// Для каждой кнопки добавляем обработчик события
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Получаем значение атрибута data-category нажатой кнопки
        const category = button.dataset.category;

        // Сначала скрываем все секции и убираем выделение у всех кнопок
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        buttons.forEach(b => {
            b.classList.remove('active');
        });

        // Показываем соответствующую секцию
        const activeSection = document.querySelector(`section[data-category="${category}"]`);
        activeSection.classList.remove('hidden');

        // Добавляем выделение нажатой кнопке
        button.classList.add('active');
    });
});
