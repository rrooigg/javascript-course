//script is exceuted first when the page is reloaded

//get string of out storage when the page loads
const score = JSON.parse(localStorage.getItem('score')) || {
  wins:0,
  losses:0,
  ties:0
};
updateScore();

function playGame(playerMove) {
  let result ='';
  const computerMove = pickComputerMove();

  if(playerMove==='scissors') {
    if(computerMove === 'rock') {
      result='lose';
    } else if(computerMove === 'paper'){
        result='win';
    } else {
        result='tie';
    }
  } else if(playerMove==='paper') {
    if(computerMove === 'rock') {
      result='win';
    } else if(computerMove === 'paper'){
        result='tie';
    } else {
        result='lose';
    }
  } else if(playerMove==='rock') {
    if(computerMove === 'rock') {
      result='tie';
    } else if(computerMove === 'paper'){
        result='lose';
    } else {
        result='win';
    }

  }

  if(result==='win') {
    score.wins+=1;
  } else if(result==='lose') {
    score.losses+=1;
  } else if(result==='tie') {
    score.ties+=1;
  }

  //to save a value inside local storage
  //localStorage.setItem('message', 'hello'); 
    //only saves in strings. message= the name of the data

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();
  document.querySelector('.js-result').innerHTML=`You ${result}`;
  document.querySelector('.js-moves').innerHTML=`You<img src="images/${playerMove}-emoji.png" class="move-icon"> 
<img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber>=0 && randomNumber<1/3) {
    computerMove = 'rock';      
  } else if (randomNumber>=1/3 && randomNumber<2/3) {
    computerMove = 'paper';
  } else if (randomNumber>=2/3 && randomNumber<1){
    computerMove = 'scissors';
  }
    return computerMove;
}

//reset score
function resetScore() {
  score.wins=0;
  score.losses=0;
  score.ties=0;

  localStorage.removeItem('score');

  updateScore();

}
function updateScore() {
  document.querySelector('.js-score').innerHTML = 
  `Wins:${score.wins} Losses:${score.losses} Ties:${score.ties}`;

}
