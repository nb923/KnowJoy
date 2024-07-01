const termList = [];
const answer = [];
answerButton = -1;

function addPair(event) 
{
    event.preventDefault();
    const keyInput = document.getElementById('term');
    const valueInput = document.getElementById('definition');
    const logger = document.getElementById('logger');

    const term = keyInput.value;
    const definition = valueInput.value;

    if(term && definition) {
        if (!termList.some(pair => pair[0] == term && pair[1] == definition))
        {
            termList.push([term, definition]);

            keyInput.value = '';
            valueInput.value = '';
    
            updateList();
            logger.innerHTML = '';
        }
        else
        {
            logger.innerHTML = 'Error: Element already exists in list';
        }
    }
}

function updateList()
{
    const listElements = document.getElementById('elementList');
    listElements.innerHTML = '';
    termList.forEach(tuple => {
        const item = document.createElement('li');
        item.textContent = `(${tuple[0]}, ${tuple[1]})`;
        listElements.appendChild(item);
    })
}

function startGame(event)
{
    event.preventDefault();

    changeGameValues();
}

function changeGameValues()
{
    const logger = document.getElementById('logger');

    if (termList.length > 1)
    {
        answerNum = Math.floor(Math.random() * termList.length);
        otherNum = Math.floor(Math.random() * termList.length);
        const buttonOne = document.getElementById('buttonOne');
        const buttonTwo = document.getElementById('buttonTwo');
        const definitionText = document.getElementById('elementDefinition');

        while (otherNum == answerNum)
        {
            otherNum = Math.floor(Math.random() * termList.length);
        }

        chooseButton = Math.floor(Math.random() * 2);
        definitionText.innerHTML = termList[answerNum][1];

        if (chooseButton == 0)
        {
            buttonOne.innerHTML = termList[answerNum][0];
            buttonTwo.innerHTML = termList[otherNum][0];
            answerButton = 1;
        }
        else
        {
            buttonTwo.innerHTML = termList[answerNum][0];
            buttonOne.innerHTML = termList[otherNum][0];
            answerButton = 2;
        }

        logger.innerHTML = '';
    }
    else
    {
        logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
    }
}

function gameMoveButtonOne(event)
{
    event.preventDefault();
    console.log(answerButton);

    const logger = document.getElementById('logger');

    if (termList.length > 1)
    {
        if (answerButton > 0)
        {
            if (answerButton == 1)
            {
                changeGameValues();
                logger.innerHTML = '';
            }
            else
            {
                answerButton = -1;
                logger.innerHTML = 'Wrong answer, game is stopped';

                const buttonOne = document.getElementById('buttonOne');
                const buttonTwo = document.getElementById('buttonTwo');
                const definitionText = document.getElementById('elementDefinition');

                buttonOne.innerHTML = 'Term1';
                buttonTwo.innerHTML = 'Term2';
                definitionText.innerHTML = 'Definition';
            }
        }
        else
        {
            logger.innerHTML = 'Error: Game has not been started yet';
        }
    }
    else
    {
        logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
    }
}

function gameMoveButtonTwo(event)
{
    event.preventDefault();

    const logger = document.getElementById('logger');

    if (termList.length > 1)
    {
        if (answerButton > 0)
        {
            if (answerButton == 2)
            {
                changeGameValues();
                logger.innerHTML = '';
            }
            else
            {
                answerButton = -1;
                logger.innerHTML = 'Wrong answer, game is stopped';

                const buttonOne = document.getElementById('buttonOne');
                const buttonTwo = document.getElementById('buttonTwo');
                const definitionText = document.getElementById('elementDefinition');

                buttonOne.innerHTML = 'Term1';
                buttonTwo.innerHTML = 'Term2';
                definitionText.innerHTML = 'Definition';
            }
        }
        else
        {
            logger.innerHTML = 'Error: Game has not been started yet';
        }
    }
    else
    {
        logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
    }
}
function startTimer(){
    let timeLeft= 10;
    const timerDisplay = document.getElementById('timer');
    console.log(timeLeft);
    timerDisplay.classList.remove('hidden');
    let timerId = setInterval(function() {
        console.log(timeLeft);
        if(termList.length<2){
            logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
            clearInterval(timerId);
        }
        if(timeLeft <= 0) {
            alert("Time's up!");
            clearInterval(timerId);
            /*can show the answer to user and go to next question*/
        }
        timeLeft--;
        document.getElementById('timer').innerHTML = timeLeft + "s";
    }, 1000);
}

document.getElementById('startGameButton').addEventListener('click',startTimer);
document.getElementById('addDefinition').addEventListener('click', addPair);
document.getElementById('startGameButton').addEventListener('click', startGame);
document.getElementById('buttonOne').addEventListener('click', gameMoveButtonOne);
document.getElementById('buttonTwo').addEventListener('click', gameMoveButtonTwo);
