/* créons le tableau de livres */
let allBooks = [
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        image: 'https://i.imgur.com/gGcYXvT.jpg',
        alreadyRead: true
    },
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        image: 'https://i.imgur.com/1v0nYAS.jpg',
        alreadyRead: false
    }
];

  /* sélectionnons le div */
    let div = document.querySelector('.listBooks');

  /* parcourons le tableau de livres et générer du HTML pour chaque livre */
    allBooks.forEach((book) => {
    /* créons le HTML pour chaque livre */
    let bookHTML = `
        <div class="book">
            <h2>${book.title}</h2>
            <p>Written by ${book.author}</p>
            <img src="${book.image}" width="100" />
            <p>${book.alreadyRead ? 'Already read' : 'Not read yet'}</p>
        </div>
    `;

    /* ajoutons le HTML généré au div */
    div.innerHTML += bookHTML;
    });

  /* sélectionnons tous les éléments p du div */
    let pElements = div.querySelectorAll('p');

  /* mettre en surbrillance en rouge tous les éléments p qui indiquent que le livre a déjà été lu */
    pElements.forEach((p) => {
        if (p.textContent === 'Already read') {
            p.style.color = 'red';
        }
    });