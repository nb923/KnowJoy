const termList = [];
let answerButton = -1;

document.getElementById('addDefinition').addEventListener('click', addPair);
document.getElementById('deleteTerm').addEventListener('click', deleteLastTerm);
document.getElementById('startGameButton').addEventListener('click', startGame);

function addPair(event) {
    event.preventDefault();
    const keyInput = document.getElementById('term');
    const valueInput = document.getElementById('definition');
    const logger = document.getElementById('logger');

    const term = keyInput.value.trim();
    const definition = valueInput.value.trim();

    if (term && definition) {
        if (!termList.some(pair => pair[0] === term && pair[1] === definition)) {
            termList.push([term, definition]);

            keyInput.value = '';
            valueInput.value = '';

            updateList();
            logger.innerHTML = '';
        } else {
            logger.innerHTML = 'Error: Element already exists in the list';
        }
    }
}

function updateList() {
    const listElements = document.getElementById('elementList');
    listElements.innerHTML = '';
    termList.forEach(tuple => {
        const item = document.createElement('li');
        item.textContent = `(${tuple[0]}, ${tuple[1]})`;
        listElements.appendChild(item);
    });
}

function deleteLastTerm(event) {
    event.preventDefault();
    const logger = document.getElementById('logger');

    if (termList.length > 0) {
        termList.pop();
        updateList();
        logger.innerHTML = '';
    } else {
        logger.innerHTML = 'Error: No terms to delete';
    }
}

function startGame(event) {
    event.preventDefault();
    if (termList.length > 1) {
        changeGameValues();
    } else {
        const logger = document.getElementById('logger');
        logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
    }
}

function changeGameValues() {
    const logger = document.getElementById('logger');
    const answerNum = Math.floor(Math.random() * termList.length);
    let otherNum = Math.floor(Math.random() * termList.length);

    while (otherNum === answerNum) {
        otherNum = Math.floor(Math.random() * termList.length);
    }

    const buttonOne = document.getElementById('buttonOne');
    const buttonTwo = document.getElementById('buttonTwo');
    const definitionText = document.getElementById('elementDefinition');

    const chooseButton = Math.floor(Math.random() * 2);
    definitionText.innerHTML = termList[answerNum][1];

    if (chooseButton === 0) {
        buttonOne.innerHTML = termList[answerNum][0];
        buttonTwo.innerHTML = termList[otherNum][0];
        answerButton = 1;
    } else {
        buttonTwo.innerHTML = termList[answerNum][0];
        buttonOne.innerHTML = termList[otherNum][0];
        answerButton = 2;
    }

    logger.innerHTML = '';
}

function gameMoveButtonOne(event) {
    event.preventDefault();
    const logger = document.getElementById('logger');

    if (answerButton > 0) {
        if (answerButton === 1) {
            changeGameValues();
            logger.innerHTML = '';
        } else {
            endGame();
        }
    } else {
        logger.innerHTML = 'Error: Game has not been started yet';
    }
}

function gameMoveButtonTwo(event) {
    event.preventDefault();
    const logger = document.getElementById('logger');

    if (answerButton > 0) {
        if (answerButton === 2) {
            changeGameValues();
            logger.innerHTML = '';
        } else {
            endGame();
        }
    } else {
        logger.innerHTML = 'Error: Game has not been started yet';
    }
}

function endGame() {
    const logger = document.getElementById('logger');
    const buttonOne = document.getElementById('buttonOne');
    const buttonTwo = document.getElementById('buttonTwo');
    const definitionText = document.getElementById('elementDefinition');

    answerButton = -1;
    logger.innerHTML = 'Wrong answer, game is stopped';

    buttonOne.innerHTML = 'Term1';
    buttonTwo.innerHTML = 'Term2';
    definitionText.innerHTML = 'Definition';
}

function getTermList() {
    return termList.map(([term, definition]) => ({ term, definition }));
}
