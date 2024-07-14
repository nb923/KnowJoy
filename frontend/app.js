// const termList = [];
// const answer = [];
// answerButton = -1;

// function addPair(event) 
// {
//     event.preventDefault();
//     const keyInput = document.getElementById('term');
//     const valueInput = document.getElementById('definition');
//     const logger = document.getElementById('logger');

//     const term = keyInput.value;
//     const definition = valueInput.value;

//     if(term && definition) {
//         if (!termList.some(pair => pair[0] == term && pair[1] == definition))
//         {
//             termList.push([term, definition]);

//             keyInput.value = '';
//             valueInput.value = '';
    
//             updateList();
//             logger.innerHTML = '';
//         }
//         else
//         {
//             logger.innerHTML = 'Error: Element already exists in list';
//         }
//     }
// }

// function updateList()
// {
//     const listElements = document.getElementById('elementList');
//     listElements.innerHTML = '';
//     termList.forEach(tuple => {
//         const item = document.createElement('li');
//         item.textContent = `(${tuple[0]}, ${tuple[1]})`;
//         listElements.appendChild(item);
//     })
// }

// function startGame(event)
// {
//     event.preventDefault();

//     changeGameValues();
// }

// function changeGameValues()
// {
//     const logger = document.getElementById('logger');

//     if (termList.length > 1)
//     {
//         answerNum = Math.floor(Math.random() * termList.length);
//         otherNum = Math.floor(Math.random() * termList.length);
//         const buttonOne = document.getElementById('buttonOne');
//         const buttonTwo = document.getElementById('buttonTwo');
//         const definitionText = document.getElementById('elementDefinition');

//         while (otherNum == answerNum)
//         {
//             otherNum = Math.floor(Math.random() * termList.length);
//         }

//         chooseButton = Math.floor(Math.random() * 2);
//         definitionText.innerHTML = termList[answerNum][1];

//         if (chooseButton == 0)
//         {
//             buttonOne.innerHTML = termList[answerNum][0];
//             buttonTwo.innerHTML = termList[otherNum][0];
//             answerButton = 1;
//         }
//         else
//         {
//             buttonTwo.innerHTML = termList[answerNum][0];
//             buttonOne.innerHTML = termList[otherNum][0];
//             answerButton = 2;
//         }

//         logger.innerHTML = '';
//     }
//     else
//     {
//         logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
//     }
// }

// function gameMoveButtonOne(event)
// {
//     event.preventDefault();
//     console.log(answerButton);

//     const logger = document.getElementById('logger');

//     if (termList.length > 1)
//     {
//         if (answerButton > 0)
//         {
//             if (answerButton == 1)
//             {
//                 timeLeft = 10;
//                 changeGameValues();
//                 logger.innerHTML = '';
//             }
//             else
//             {
//                 answerButton = -1;
//                 logger.innerHTML = 'Wrong answer, game is stopped';

//                 const buttonOne = document.getElementById('buttonOne');
//                 const buttonTwo = document.getElementById('buttonTwo');
//                 const definitionText = document.getElementById('elementDefinition');

//                 buttonOne.innerHTML = 'Term1';
//                 buttonTwo.innerHTML = 'Term2';
//                 definitionText.innerHTML = 'Definition';
//             }
//         }
//         else
//         {
//             logger.innerHTML = 'Error: Game has not been started yet';
//         }
//     }
//     else
//     {
//         logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
//     }
// }

// function gameMoveButtonTwo(event)
// {
//     event.preventDefault();

//     const logger = document.getElementById('logger');

//     if (termList.length > 1)
//     {
//         if (answerButton > 0)
//         {
//             if (answerButton == 2)
//             {
//                 timeLeft = 10;
//                 changeGameValues();
//                 logger.innerHTML = '';
//             }
//             else
//             {
//                 answerButton = -1;
//                 logger.innerHTML = 'Wrong answer, game is stopped';

//                 const buttonOne = document.getElementById('buttonOne');
//                 const buttonTwo = document.getElementById('buttonTwo');
//                 const definitionText = document.getElementById('elementDefinition');

//                 buttonOne.innerHTML = 'Term1';
//                 buttonTwo.innerHTML = 'Term2';
//                 definitionText.innerHTML = 'Definition';
//             }
//         }
//         else
//         {
//             logger.innerHTML = 'Error: Game has not been started yet';
//         }
//     }
//     else
//     {
//         logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
//     }
// }
// let timeLeft = 10;
// function startTimer(){
//     timeLeft= 10;
//     const timerDisplay = document.getElementById('timer');
//     console.log(timeLeft);
//     timerDisplay.classList.remove('hidden');
//     let timerId = setInterval(function() {
//         console.log(timeLeft);
//         if(termList.length<2){
//             logger.innerHTML = 'Error: Not enough pairs for game to start. Have 2+ pairs for game to start';
//             clearInterval(timerId);
//         }
//         if(timeLeft <= 0) {
//             alert("Time's up!");
//             clearInterval(timerId);
//             /*can show the answer to user and go to next question*/
//         }
//         // if right answer, say you got it right! if wrong say 'nope', show right answer, move on to next qn, reset timer
//         else{
//             timeLeft--;
//             document.getElementById('timer').innerHTML = timeLeft + "s";
//         }
        
//     }, 1000);
// }



// document.getElementById('startGameButton').addEventListener('click',startTimer);
// document.getElementById('addDefinition').addEventListener('click', addPair);
// document.getElementById('startGameButton').addEventListener('click', startGame);
// document.getElementById('buttonOne').addEventListener('click', gameMoveButtonOne);
// document.getElementById('buttonTwo').addEventListener('click', gameMoveButtonTwo);



document.addEventListener('DOMContentLoaded', function() {
        const canvas = document.getElementById('canvas-hero-page');
        const ctx = canvas.getContext('2d');

        canvas.width = document.getElementById('right-hero-page').offsetWidth;
        canvas.height = document.getElementById('hero-wrapper').offsetHeight;

        const startX = canvas.width * 1.05; 
        const startY = canvas.height * 0.2; 
        const endY = canvas.height * 0.8; 
        const radius = canvas.height * 0.7;

        ctx.beginPath();
        ctx.moveTo(startX, startY); 

        ctx.arc(startX, (startY + endY) / 2, radius, Math.PI / 2, 3 * Math.PI / 2);

        ctx.strokeStyle = '#FFFFFF'; 
        ctx.lineWidth = 2; 
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(startX, (startY + endY) / 2, radius * 0.4, Math.PI / 2, 3 * Math.PI / 2);
        ctx.stroke();

        const planetOne = new Image();
        planetOne.onload = function() {
            const curveY = startY + radius * 0.2;
            const planetX = startX - radius + 10;

            ctx.save();
            ctx.translate(planetX, curveY); 
            ctx.drawImage(planetOne, -planetOne.width / 2, -planetOne.height / 2);
            ctx.restore();
        };
        planetOne.src = 'assets/planet-one-hero-page.png';

        const planetTwo = new Image();
        planetTwo.onload = function() {
            const curveY2 = startY + radius * 0.6;
            const planetX2 = startX - (radius * 0.4) + 20;

            ctx.save();
            ctx.translate(planetX2, curveY2); 
            ctx.drawImage(planetTwo, -planetTwo.width / 2, -planetTwo.height / 2);
            ctx.restore();
        };
        planetTwo.src = 'assets/planet-two-hero-page.png';
    }
);




