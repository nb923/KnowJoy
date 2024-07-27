let termList = JSON.parse(localStorage.getItem('termList')) || [];
let answerButton = -1;

document.getElementById('buttonOne').addEventListener('click', gameMoveButtonOne);
document.getElementById('buttonTwo').addEventListener('click', gameMoveButtonTwo);
document.getElementById('restartGameButton').addEventListener('click', restartGame);
document.getElementById('endGameButton').addEventListener('click', endGame);

function changeGameValues() {
    const logger = document.getElementById('logger');
    if (termList.length > 1) {
        const answerNum = Math.floor(Math.random() * termList.length);
        let otherNum = Math.floor(Math.random() * termList.length);

        // Ensure we don't select the same term twice
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
    } else {
        logger.innerHTML = 'Error: Not enough pairs for game to start.';
    }
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
    logger.innerHTML = 'Game has been ended. Click Restart Game to try again.';

    buttonOne.innerHTML = 'Term1';
    buttonTwo.innerHTML = 'Term2';
    definitionText.innerHTML = 'Definition';

    // Hide end game button and show restart game button
    document.getElementById('endGameButton').style.display = 'none';
    document.getElementById('restartGameButton').style.display = 'block';
}

function restartGame(event) {
    event.preventDefault();
    const logger = document.getElementById('logger');
    
    // Reload termList from localStorage
    termList = JSON.parse(localStorage.getItem('termList')) || [];
    
    if (termList.length > 1) {
        changeGameValues();
        logger.innerHTML = '';
        
        // Hide restart game button and show end game button
        document.getElementById('restartGameButton').style.display = 'none';
        document.getElementById('endGameButton').style.display = 'block';
    } else {
        logger.innerHTML = 'Error: Not enough pairs for game to restart.';
    }
}

// Start the game when the page loads if termList is not empty
if (termList.length > 1) {
    changeGameValues();
} else {
    document.getElementById('logger').innerHTML = 'Error: Not enough pairs for game to start.';
}
