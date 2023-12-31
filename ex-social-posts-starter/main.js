const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/*
0. portare su JS classe 'post'
1. resettare la classe 'post' da js
2. caricare div 'post' con ciclo forEach creando un 'template'
3. creare 'counter' per likes
4. portare btn su JS
5. creare 'Btn eventListener' per:
    - counter++ su likes
    - colore testo rosso
    - pushare ID su nuovo array
6. mappare un nuovo array con '.map' per salvare gli id dei post con mi piace
*/

// elementi
const containerEl = document.querySelector('#container');

// carico la DIV da JS usando lo scheletro su HTML
posts.forEach(post => {
    const template = `
    <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${post.author.image}" alt="Phil Mangione">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">Phil Mangione</div>
                        <div class="post-meta__time">4 mesi fa</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${post.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                            </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
                    </div>
                </div> 
            </div>            
        </div>`

        console.log(post);
        containerEl.innerHTML += template 
    });
    
/* 
5. creare 'Btn eventListener' per:
    - counter++ su likes
    - colore testo rosso
    - pushare ID su nuovo array
*/



// Aggiungi un event listener a ciascun pulsante "Mi Piace"
const likeButtons = document.querySelectorAll('.js-like-button');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', function(e) {
        e.preventDefault();

        // Trova il post corrispondente nell'array "posts" usando l'ID
        const postId = parseInt(likeButton.getAttribute('data-postid'));
        const post = posts.find(post => post.id === postId);

        // Trova il contatore dei like e il testo del contatore nel DOM
        const likeCounter = likeButton.closest('.likes').querySelector('.js-likes-counter');
        const likeCounterText = likeCounter.textContent;
        
        // Estrai il numero di like attuale dal testo
        const currentLikes = parseInt(likeCounterText);

        // Verifica se il pulsante è stato premuto o meno
        if (likeButton.classList.contains('like-button--liked')) {
            // Se il pulsante è già stato premuto, rimuovi il "Mi Piace" e decrementa il contatore
            likeButton.classList.remove('like-button--liked');
            post.likes--;
        } else {
            // Se il pulsante non è stato premuto, aggiungi il "Mi Piace" e incrementa il contatore
            likeButton.classList.add('like-button--liked');
            post.likes++;
        }

        // Aggiorna il testo del contatore dei like nel DOM
        likeCounter.textContent = `${post.likes}`;
    });
});

