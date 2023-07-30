'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1; 
let score=20;
let highscore=0;
const displayMessage=function(message){
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log( typeof guess);
    //when there is no input
    if(!guess){
        displayMessage('No number!');
    }
    //when the user wins
    else if(guess===secretNumber){
        displayMessage('Correct number!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        //highscore functionality
        if(score > highscore){
            document.querySelector('.highscore').textContent=score;
        }
    }
    //when guess is wrong
    else if(guess!==secretNumber){
        if(score > 1){
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        } 
    }
});
//again functionality
document.querySelector('.again').addEventListener('click',function(){
    secretNumber= Math.trunc(Math.random()*20)+1; 
    score=20;
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
});