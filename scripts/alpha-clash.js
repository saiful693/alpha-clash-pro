// function play(){
//     const home=document.getElementById('home-screen');
//     home.classList.add('hidden');

//     // showing playGround
//     const playGroundSection=document.getElementById('play-screen');
//     playGroundSection.classList.remove('hidden');
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;

    // stop the game if pressed esc
    if(playerPressed === 'Escape'){
        gameOver();
    }
    

    // get the expected press
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    // check matched or not
    if(playerPressed === expectedAlphabet){
    
        const currentScore=getTextElementValueById('current-score');
        const updateScore=currentScore + 1;
        setTextElementValueById('current-score',updateScore);

        // ----------------------------
        // update score

        // // 1
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);

        // // 2
        // const newScore=currentScore + 1;
        // // 3 show the updated score
        // currentScoreElement.innerText=newScore;


        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{

        const currentLife=getTextElementValueById('current-life');
        const updatedLife=currentLife-1;
        setTextElementValueById('current-life',updatedLife)

        if(updatedLife === 0){
            gameOver();
        }
        // --------------------------------
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);

        // const newLife=currentLife-1;
        // currentLifeElement.innerText=newLife;
    }
}

// capture keyboard key pres
document.addEventListener('keyup',handleKeyboardKeyUpEvent)


function continueGame() {
    // step-1 genarate a random alphabet
    const alphabet = getARandomAlphabet()

    //   set randomly genarated alphabet to the screen
    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    // set background color to the alphabet
    setBackgroundColorById(alphabet);
}


// using dynamic function
function play() {
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-screen');


    // reset score and life
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',5);

    continueGame();
}

// game over function
function gameOver(){
    hideElementById('play-screen');
    showElementById('final-score');

    // update final score
    const lastScore=getTextElementValueById('current-score');
    setTextElementValueById('last-score',lastScore);

    // clear the last selected 
    const currentAlphabet=getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

}