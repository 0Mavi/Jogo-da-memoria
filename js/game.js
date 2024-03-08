const grid = document.querySelector('.grid');

const characters = [
    'benson',
    'chiclete',
    'fantasma',
    'margaret',
    'moça',
    'mordecai',
    'morte',
    'musculoso',
    'rigby',
    'saltitão'
];


const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../imagem/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

   return card;

}

const loadGame = () => {

    const duplicateCharacters = [ ...characters, ...characters ];

    const shuffleArray = duplicateCharacters.sort( () => Math.random() - 0.5);

    shuffleArray.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}

loadGame();