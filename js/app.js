const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "light");
        }
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

// 2. Проверка темной темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}

// Если меняются системные настройки, меняем тему
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";

        if (newColorScheme === "dark") {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
            localStorage.setItem("darkMode", "dark");
        } else {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
            localStorage.setItem("darkMode", "light");
        }
    });

// Включение ночного режима по кнопке
btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode", "light");
    }
};

//Модальнок окно для бургера
const burger = document.querySelector('.burger')
const modal = document.querySelector('#my-modal')
const closeModal = document.querySelector('#close-my-modal-btn')
const render = document.querySelector('#my-modal .modal__box')

burger.addEventListener('click', () => {
    modal.classList.add('open')
})
closeModal.addEventListener('click', () => {
    modal.classList.remove('open')
})
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("open")
    }
});
render.addEventListener('click', e => {
    e._isClickWithInModal = true;
})
modal.addEventListener('click', e => {
    if (e._isClickWithInModal) return;
    e.currentTarget.classList.remove('open');
})

//courses
document.addEventListener('DOMContentLoaded', () => {
    const allCourses = document.querySelectorAll('.courses-card');
    const btnProgramming = document.querySelector('.courses-btn-programming');
    const btnLanguages = document.querySelector('.courses-btn-languages');
    const btnCompLiteracy = document.querySelector('.courses-btn-computer-grammer');

    btnProgramming.addEventListener('click', () => filterCourses('programming'));
    btnLanguages.addEventListener('click', () => filterCourses('language'));
    btnCompLiteracy.addEventListener('click', () => filterCourses('comp-literacy'));

    function filterCourses(category) {
        allCourses.forEach(card => {
            if (card.classList.contains(category)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
document.querySelectorAll('.courses-link').forEach(button => {
    button.addEventListener('click', function () {
        const contactType = this.getAttribute('data-contact');
        if (contactType === 'whatsapp') {
            const phoneNumber = this.getAttribute('data-phone');
            window.location.href = `https://wa.me/${phoneNumber}`;
        }
    });
});



// //Переключатель выборов варианта вопроса
// function updateOptionType(select) {
//     const optionColumn = select.closest('.create__column').querySelector('.option-item__column');
//     const inputType = select.value === 'checkbox' ? 'checkbox' : 'radio';
//     const inputs = optionColumn.querySelectorAll('.option-checkbox');
//     const questionId = optionColumn.closest('.create__question-flex').dataset.questionId;

//     inputs.forEach(input => {
//         input.type = inputType;
//         if (inputType === 'radio') {
//             // Установить одинаковое имя, чтобы гарантировать, что можно выбрать только одну опцию
//             input.name = 'radio_group_' + questionId;
//         } else {
//             // Убрать имя, так как оно не нужно для checkbox
//             input.removeAttribute('name');
//         }
//     });
// }

// //Функция добавления вопроса
// function addQuestion() {
//     const questionColumn = document.getElementById('question-column');

//     // Создаем новый блок вопроса
//     const newQuestion = document.createElement('div');
//     newQuestion.className = 'create__question-flex';
//     newQuestion.dataset.questionId = Date.now();

//     // Создаем внутреннюю структуру нового вопроса
//     const newColumn = document.createElement('div');
//     newColumn.className = 'create__column';

//     const newTypeSelect = document.createElement('div');
//     newTypeSelect.className = 'create__type-select';

//     const newTextarea = document.createElement('textarea');
//     newTextarea.className = 'create__textarea';
//     newTextarea.placeholder = 'Вопрос';

//     const newSelect = document.createElement('select');
//     newSelect.className = 'create__select-choise';
//     newSelect.onchange = function () { updateOptionType(newSelect); };

//     const optionRadio = document.createElement('option');
//     optionRadio.value = 'radio';
//     optionRadio.textContent = 'Один из списка';
//     newSelect.appendChild(optionRadio);

//     const optionCheckbox = document.createElement('option');
//     optionCheckbox.value = 'checkbox';
//     optionCheckbox.textContent = 'Выбрать несколько';
//     newSelect.appendChild(optionCheckbox);

//     newTypeSelect.appendChild(newTextarea);
//     newTypeSelect.appendChild(newSelect);
//     newColumn.appendChild(newTypeSelect);

//     const newOptionItemColumn = document.createElement('div');
//     newOptionItemColumn.className = 'option-item__column';
//     newColumn.appendChild(newOptionItemColumn);

//     newQuestion.appendChild(newColumn);

//     // Создаем кнопки функционала вопроса
//     const newTodoFunc = document.createElement('div');
//     newTodoFunc.className = 'create__todo-func';

//     const btnAddQuestion = document.createElement('button');
//     btnAddQuestion.className = 'create__todo-btn btn-add-question';
//     btnAddQuestion.title = 'Добавить вопрос';
//     btnAddQuestion.onclick = function () { addQuestion(); };
//     const imgAddQuestion = document.createElement('img');
//     imgAddQuestion.src = '../images/create-add-question.png';
//     imgAddQuestion.alt = '';
//     btnAddQuestion.appendChild(imgAddQuestion);
//     newTodoFunc.appendChild(btnAddQuestion);

//     const btnAddOption = document.createElement('button');
//     btnAddOption.className = 'create__todo-btn btn-add-option';
//     btnAddOption.title = 'Добавить вариант';
//     btnAddOption.onclick = function () { addOption(btnAddOption); };
//     const iconAddOption = document.createElement('ion-icon');
//     iconAddOption.name = 'add-circle';
//     iconAddOption.style.width = '40px';
//     iconAddOption.style.height = '40px';
//     btnAddOption.appendChild(iconAddOption);
//     newTodoFunc.appendChild(btnAddOption);

//     const btnCopy = document.createElement('button');
//     btnCopy.className = 'create__todo-btn btn-copy';
//     btnCopy.title = 'Создать копию';
//     btnCopy.onclick = function () { copyQuestion(btnCopy); };
//     const imgCopy = document.createElement('img');
//     imgCopy.src = '../images/create-save-question.png';
//     imgCopy.alt = '';
//     btnCopy.appendChild(imgCopy);
//     newTodoFunc.appendChild(btnCopy);

//     const btnAddImage = document.createElement('button');
//     btnAddImage.className = 'create__todo-btn btn-add-image';
//     btnAddImage.title = 'Добавить картинку';
//     btnAddImage.onclick = function () { addImageToQuestion(btnAddImage); };
//     const imgAddImage = document.createElement('img');
//     imgAddImage.src = '../images/create-add-image.png';
//     imgAddImage.alt = '';
//     btnAddImage.appendChild(imgAddImage);
//     newTodoFunc.appendChild(btnAddImage);

//     const btnDeleteQuestion = document.createElement('button');
//     btnDeleteQuestion.className = 'create__todo-btn btn-delete-question';
//     btnDeleteQuestion.title = 'Удалить вопрос';
//     btnDeleteQuestion.onclick = function () { deleteQuestion(btnDeleteQuestion); };
//     const imgDeleteQuestion = document.createElement('img');
//     imgDeleteQuestion.src = '../images/create-delete-question.png';
//     imgDeleteQuestion.alt = '';
//     btnDeleteQuestion.appendChild(imgDeleteQuestion);
//     newTodoFunc.appendChild(btnDeleteQuestion);

//     newQuestion.appendChild(newTodoFunc);

//     // Добавляем новый вопрос в конец questionColumn
//     questionColumn.appendChild(newQuestion);
// }


// //Функция добавления варианта
// function addOption(button) {
//     const optionItemColumn = button.closest('.create__question-flex').querySelector('.option-item__column');
//     const optionType = optionItemColumn.closest('.create__column').querySelector('.create__select-choise').value;
//     const questionId = optionItemColumn.closest('.create__question-flex').dataset.questionId;

//     const newOptionItem = document.createElement('div');
//     newOptionItem.className = 'option-item';

//     const newInput = document.createElement('input');
//     newInput.type = optionType === 'checkbox' ? 'checkbox' : 'radio';
//     newInput.className = 'option-checkbox';
//     if (newInput.type === 'radio') {
//         newInput.name = 'radio_group_' + questionId;
//     }
//     newOptionItem.appendChild(newInput);

//     const newContentEditable = document.createElement('div');
//     newContentEditable.className = 'content-editable';
//     newContentEditable.contentEditable = 'true';
//     newOptionItem.appendChild(newContentEditable);

//     const newFileInput = document.createElement('input');
//     newFileInput.type = 'file';
//     newFileInput.className = 'file-input';
//     newFileInput.accept = 'image/*';
//     newFileInput.style.display = 'none';
//     newOptionItem.appendChild(newFileInput);

//     const newAddImageBtn = document.createElement('button');
//     newAddImageBtn.className = 'add-image-btn';
//     newAddImageBtn.onclick = function () { addImage(newAddImageBtn); };

//     // Создаем элемент img для кнопки добавления изображения
//     const addImageIcon = document.createElement('img');
//     addImageIcon.src = '../images/image-variable.png';
//     addImageIcon.alt = 'Добавить картинку';
//     newAddImageBtn.appendChild(addImageIcon);

//     newOptionItem.appendChild(newAddImageBtn);

//     const newDeleteOptionBtn = document.createElement('button');
//     newDeleteOptionBtn.className = 'delete-option-btn';
//     newDeleteOptionBtn.onclick = function () { deleteOption(newDeleteOptionBtn); };

//     // Создаем элемент img для кнопки удаления опции
//     const deleteOptionIcon = document.createElement('img');
//     deleteOptionIcon.src = '../images/delete-variable.png';
//     deleteOptionIcon.alt = 'Удалить вариант';
//     newDeleteOptionBtn.appendChild(deleteOptionIcon);

//     newOptionItem.appendChild(newDeleteOptionBtn);

//     optionItemColumn.appendChild(newOptionItem);
// }

// //Функция копирования вопроса
// function copyQuestion(button) {
//     const questionColumn = document.getElementById('question-column');
//     const questionFlex = button.closest('.create__question-flex');
//     const newQuestion = questionFlex.cloneNode(true);

//     // Сгенерировать уникальный ID для нового вопроса
//     const newQuestionId = Date.now();
//     newQuestion.dataset.questionId = newQuestionId;

//     // Очистка полей и т.д.
//     const textareas = newQuestion.querySelectorAll('.create__textarea');
//     textareas.forEach(textarea => {
//         textarea.value = '';
//     });

//     const inputs = newQuestion.querySelectorAll('input[type="checkbox"], input[type="radio"]');
//     inputs.forEach(input => {
//         input.checked = false;
//         if (input.type === 'radio') {
//             input.name = 'radio_group_' + newQuestionId;  // Установить новое имя для группы радио
//         }
//     });

//     questionColumn.appendChild(newQuestion);
// }

// //Функция добавления картинки к вопросу
// function addImageToQuestion(button) {
//     const questionFlex = button.closest('.create__question-flex');
//     const fileInput = document.createElement('input');
//     fileInput.type = 'file';
//     fileInput.accept = 'image/*';
//     fileInput.style.display = 'none';

//     fileInput.addEventListener('change', function () {
//         if (fileInput.files && fileInput.files[0]) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 const img = document.createElement('img');
//                 img.src = e.target.result;
//                 img.style.width = '300px';
//                 img.style.height = '200px';
//                 img.style.marginTop = '20px';

//                 questionFlex.querySelector('.create__image-container').appendChild(img);
//             };
//             reader.readAsDataURL(fileInput.files[0]);
//         }
//     });

//     questionFlex.appendChild(fileInput);
//     fileInput.click();
// }

// //Функция Удаления вопроса
// function deleteQuestion(button) {
//     const questionFlex = button.closest('.create__question-flex');
//     questionFlex.remove();
// }

// //Функция добавления картинки к варианту
// function addImage(button) {
//     const optionItem = button.parentElement;
//     const fileInput = optionItem.querySelector('.file-input');
//     fileInput.click();

//     fileInput.onchange = function () {
//         const file = fileInput.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (event) {
//                 const imgElement = document.createElement("img");
//                 imgElement.src = event.target.result;
//                 imgElement.style.width = '300px';
//                 imgElement.style.height = '300px';
//                 const contentEditable = optionItem.querySelector('.content-editable');
//                 contentEditable.appendChild(imgElement);
//                 fileInput.value = '';
//             };
//             reader.readAsDataURL(file);
//         }
//     };
// }

// //Функция Удаления варианта
// function deleteOption(button) {
//     const optionItem = button.parentElement;
//     optionItem.remove();
// }

// //ункция Удаления картинки у вопроса
// function deleteImageFromQuestion(button) {
//     // Найти родительский блок create__question-flex
//     const questionFlex = button.closest('.create__question-flex');

//     // Найти контейнер для изображения внутри блока вопроса
//     const imageContainer = questionFlex.querySelector('.create__image-container');

//     if (imageContainer) {
//         // Удалить все изображения в контейнере
//         while (imageContainer.firstChild) {
//             imageContainer.removeChild(imageContainer.firstChild);
//         }
//     } else {
//         console.log('Контейнер для изображения не найден');
//     }
// }

// const constructorAddModul = document.querySelector('.constructor__add-modul')
// const constructorModulColumn = document.querySelector('.constructor__modul-column')
// const constructorModulWrap = document.querySelector('.constructor__modul-wrap')
// const constructorModulDirection = document.querySelector('.constructor__modul-direction')
// const constructorModulInner = document.querySelector('.constructor__modul-inner')
// const constructorModulCreate = document.querySelector('.constructor__modul-create')
// // const constructorModulDelete = document.querySelector('.constructor__modul-delete')

// document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('.journal__tab');
//     const tables = document.querySelectorAll('.journal-table');

//     tabs.forEach((tab, index) => {
//         tab.addEventListener('click', () => {
//             tabs.forEach(t => t.classList.remove('journal__tab-active'));
//             tab.classList.add('journal__tab-active');

//             tables.forEach(table => table.classList.remove('active'));
//             tables[index].classList.add('active');
//         });
//     });
// });



// Функция для добавления варианта ответа
function addOption(btn) {
    const optionsColumn = btn.closest('.create__question-flex').querySelector('.option-item__column');
    const optionTemplate = optionsColumn.querySelector('.option-item').cloneNode(true);
    optionTemplate.querySelector('.content-editable').textContent = ''; // Очищаем текст
    optionsColumn.appendChild(optionTemplate);
    updateDeleteButtons(optionsColumn);
}

// Функция для изменения типа вариантов ответа
function changeOptionType(select) {
    const type = select.value;
    const optionCheckboxes = select.closest('.create__column').querySelectorAll('.option-checkbox');
    optionCheckboxes.forEach(checkbox => {
        checkbox.type = type;
        if (type === 'radio') {
            checkbox.name = 'radio' + new Date().getTime(); // Уникальное имя для группы радио кнопок
        }
    });
}


// Функция для копирования вопроса
function copyQuestion(btn) {
    const questionFlex = btn.closest('.create__question-flex');
    const newQuestion = questionFlex.cloneNode(true);

    // Копирование изображений из .create__image-container
    const originalImages = questionFlex.querySelectorAll('.create__image-container img');
    const newImages = newQuestion.querySelectorAll('.create__image-container img');

    originalImages.forEach((img, index) => {
        const newImg = newImages[index];
        newImg.src = img.src;
        newImg.style.width = img.style.width;
        newImg.style.height = img.style.height;
        newImg.style.marginTop = img.style.marginTop;
    });

    // Копирование изображений из .content-editable
    const originalContentEditables = questionFlex.querySelectorAll('.content-editable');
    const newContentEditables = newQuestion.querySelectorAll('.content-editable');

    originalContentEditables.forEach((contentEditable, index) => {
        const newContentEditable = newContentEditables[index];
        const originalImgs = contentEditable.querySelectorAll('img');
        originalImgs.forEach(originalImg => {
            const newImg = document.createElement('img');
            newImg.src = originalImg.src;
            newImg.style.width = originalImg.style.width;
            newImg.style.height = originalImg.style.height;
            newImg.style.marginTop = originalImg.style.marginTop;
            newContentEditable.appendChild(newImg);
        });
    });

    // Копирование состояния чекбоксов и содержимого вариантов
    const originalCheckboxes = questionFlex.querySelectorAll('.option-checkbox');
    const newCheckboxes = newQuestion.querySelectorAll('.option-checkbox');
    const originalContents = questionFlex.querySelectorAll('.content-editable');
    const newContents = newQuestion.querySelectorAll('.content-editable');

    newCheckboxes.forEach((checkbox, index) => {
        checkbox.checked = originalCheckboxes[index].checked; // Снимаем все выборы
        if (checkbox.type === 'radio') {
            checkbox.name = 'radio' + new Date().getTime(); // Уникальное имя для новой группы радио кнопок
        }
    });

    originalContents.forEach((content, index) => {
        newContents[index].textContent = content.textContent; // Копирование текста вариантов ответа
    });

    // Обновление обработчиков событий для кнопок в новом вопросе
    newQuestion.querySelector('.btn-add-option').onclick = function () { addOption(this); };
    newQuestion.querySelector('.btn-delete-question').onclick = function () { deleteQuestion(this); };
    newQuestion.querySelectorAll('.delete-option-btn').forEach(button => {
        button.onclick = function () { deleteOption(this); };
    });
    newQuestion.querySelectorAll('.add-image-btn').forEach(button => {
        button.onclick = function () { addImage(this); };
    });

    // Вставка нового вопроса после текущего вопроса
    questionFlex.parentNode.insertBefore(newQuestion, questionFlex.nextSibling);
    updateDeleteButtons(newQuestion.querySelector('.option-item__column'));
}



// Функция для добавления нового вопроса
function addQuestion() {
    const questionColumn = document.querySelector('#question-column');
    const templateQuestion = questionColumn.querySelector('.create__question-flex');
    const newQuestion = templateQuestion.cloneNode(true);

    // Очистка нового вопроса
    newQuestion.querySelector('.create__textarea').value = '';
    newQuestion.querySelector('.create__select-choise').selectedIndex = 0;
    newQuestion.querySelector('.create__image-container').innerHTML = '';
    const options = newQuestion.querySelectorAll('.option-item');
    if (options.length > 1) {
        options.forEach((option, index) => {
            if (index > 0) option.remove();
        });
    }
    const checkboxes = newQuestion.querySelectorAll('.option-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false; // Снимаем все выборы
        if (checkbox.type === 'radio') {
            checkbox.name = 'radio' + new Date().getTime(); // Уникальное имя для новой группы радио кнопок
        }
    });
    newQuestion.querySelector('.content-editable').textContent = '';

    questionColumn.appendChild(newQuestion);
    updateDeleteButtons(newQuestion.querySelector('.option-item__column'));
}

// Функция для удаления варианта ответа
function deleteOption(btn) {
    const optionItem = btn.closest('.option-item');
    const optionsColumn = btn.closest('.option-item__column');
    if (optionsColumn.querySelectorAll('.option-item').length > 1) {
        optionItem.remove();
    }
    updateDeleteButtons(optionsColumn);
}

// Функция для удаления вопроса
function deleteQuestion(btn) {
    const questionFlex = btn.closest('.create__question-flex');
    if (document.querySelectorAll('.create__question-flex').length > 1) {
        questionFlex.remove();
    }
}

// Функция для обновления состояния кнопок удаления
function updateDeleteButtons(optionsColumn) {
    const deleteButtons = optionsColumn.querySelectorAll('.delete-option-btn');
    if (deleteButtons.length === 1) {
        deleteButtons[0].disabled = true;
    } else {
        deleteButtons.forEach(button => button.disabled = false);
    }
}

function addImage(button) {
    const optionItem = button.parentElement;
    const fileInput = optionItem.querySelector('.file-input');
    fileInput.click();

    fileInput.onchange = function () {
        const file = fileInput.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgElement = document.createElement("img");
                imgElement.src = event.target.result;
                imgElement.style.width = '300px';
                imgElement.style.height = '300px';
                const contentEditable = optionItem.querySelector('.content-editable');
                contentEditable.appendChild(imgElement);
                fileInput.value = '';
            };
            reader.readAsDataURL(file);
        }
    };
}

// Функция добавления картинки к вопросу
function addImageToQuestion(button) {
    const questionFlex = button.closest('.create__question-flex');

    // Создаем input для выбора файла
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    // Обработчик события изменения input
    fileInput.addEventListener('change', function () {
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.width = '300px';
                img.style.height = '200px';
                img.style.marginTop = '20px';

                // Находим соответствующий контейнер для изображения и добавляем изображение в него
                const imageContainer = fileInput.closest('.create__question-flex').querySelector('.create__image-container');
                imageContainer.appendChild(img);
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });

    // Добавляем input на страницу и эмулируем его клик для открытия окна выбора файла
    questionFlex.appendChild(fileInput);
    fileInput.click();
}

// Функция для удаления изображения у вопроса
function deleteQuestionImage(button) {
    const questionFlex = button.closest('.create__question-flex');
    const imageContainer = questionFlex.querySelector('.create__image-container');

    // Удаление изображений
    imageContainer.innerHTML = '';
}


// Назначаем обработчик событий на контейнер, содержащий вопросы
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-add-image')) {
        addImageToQuestion(event.target);
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Добавляем обработчики для всех текущих и будущих элементов
    document.body.addEventListener('click', function (event) {
        if (event.target.matches('.add-image-btn')) {
            addImageToOption(event.target);
        } else if (event.target.matches('.delete-option-btn')) {
            deleteOption(event.target);
        } else if (event.target.matches('.btn-add-option')) {
            addOption(event.target);
        } else if (event.target.matches('.btn-add-question')) {
            addQuestion();
        } else if (event.target.matches('.btn-delete-question')) {
            deleteQuestion(event.target);
        }
    });

    document.body.addEventListener('change', function (event) {
        if (event.target.matches('.create__select-choise')) {
            changeOptionType(event.target);
        }
    });
});