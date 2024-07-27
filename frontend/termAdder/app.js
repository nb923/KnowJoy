const termList = JSON.parse(localStorage.getItem('termList')) || [];
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
    } else {
        logger.innerHTML = 'Error: Both term and definition must be provided';
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
    const logger = document.getElementById('logger');

    if (termList.length > 1) {
        // Save termList to localStorage
        localStorage.setItem('termList', JSON.stringify(termList));
        // Redirect to the game page
        window.location.href = 'game.html';
    } else {
        logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
    }
}

// Initialize the term list on page load if it exists in localStorage
updateList();
