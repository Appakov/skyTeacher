
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.library__category-direction');
    const books = document.querySelectorAll('.library__book-flex');
    const searchButton = document.querySelector('.library__search-btn');
    const searchInput = document.querySelector('.library__input');

    const filterBooks = (category) => {
        books.forEach(book => {
            if (book.getAttribute('data-category').toLowerCase() === category.toLowerCase()) {
                book.style.display = 'flex'; // Показываем книги соответствующей категории
            } else {
                book.style.display = 'none'; // Скрываем книги других категорий
            }
        });
    };

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category').toLowerCase();
            filterBooks(category);
        });
    });

    searchButton.addEventListener('click', () => {
        const category = searchInput.value.trim().toLowerCase();
        filterBooks(category);
    });

    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            const category = searchInput.value.trim().toLowerCase();
            filterBooks(category);
        }
    });
});
