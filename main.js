const myLibrary = []
function Book(autor,title,pages,readStatus){
    this.autor = autor,
    this.title = title,
    this.pages = pages,
    this.readStatus = readStatus
}

function addBookToLibrary(autor,title,pages,readStatus){
    const newBook = new Book(autor,title,pages,readStatus)
    myLibrary.push(newBook)
    displayLibrary()
}

function displayLibrary(){
    const libraryContainer = document.getElementById('library')
    libraryContainer.innerHTML = ''
    myLibrary.forEach((book,index) =>{
        const bookCard = document.createElement('div')
        bookCard.classList.add('book-card')
        bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Автор:</strong> ${book.author}</p>
        <p><strong>Страниц:</strong> ${book.pages}</p>
        <p><strong>Статус:</strong> <span id="status-${index}">${book.readStatus}</span></p>
        <button onclick="removeBook(${index})">Удалить</button>
        <button onclick="toggleReadStatus(${index})">Изменить статус</button>
    `;

    libraryContainer.appendChild(bookCard)
    }

    )
}
function removeBook(index) {
    myLibrary.splice(index, 1);
    displayLibrary();
}
function toggleReadStatus(index) {
    const book = myLibrary[index];
    book.readStatus = (book.readStatus === 'прочитано') ? 'не прочитано' : 'прочитано';
    displayLibrary();}

    document.getElementById('addBookBtn').addEventListener('click', () => {
        document.getElementById('bookForm').showModal();
    });
    
    document.getElementById('closeForm').addEventListener('click', () => {
        document.getElementById('bookForm').close();
    });
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault(); 
    
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const pages = document.getElementById('pages').value;
        const readStatus = document.getElementById('readStatus').value;
    
        addBookToLibrary(author, title, pages, readStatus);
    
        e.target.reset();
        document.getElementById('bookForm').close();
    });
    addBookToLibrary('Джордж Оруэлл', '1984', 328, 'прочитано');
addBookToLibrary('Фёдор Достоевский', 'Преступление и наказание', 671, 'не прочитано');
addBookToLibrary('Лев Толстой', 'Война и мир', 1225, 'прочитано');