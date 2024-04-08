let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
    };
  
    updateScoreElement();
  
  
  
  
  function playGame(playerMove) {
    const computerMove = pickComputerMove();
  
  
  console.log(computerMove);
  
      let result = '';
      if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
          result = 'lose.'} else if (computerMove === 'paper') {
            result = 'win.'} else if (computerMove === 'scissors') {
              result = 'tie.'
            }
  
  
          } else if (playerMove === 'paper') {
              if (computerMove === 'rock') {
          result = 'win.';
        } else if (computerMove === 'paper') {
          result = 'tie.';
        } else if (computerMove === 'scissors') {
          result = 'lose.';
        }
  
        
          } else if (playerMove === 'rock') {
              if (computerMove === 'rock') {
          result = 'tie.';
        } else if (computerMove === 'paper') {
          result = 'lose.';
        } else if (computerMove === 'scissors') {
          result = 'win.';
        }
        }
  
        if (result === 'win.') {
          score.wins += 1;
        } else if (result === 'lose.') {
          score.losses += 1;
        } else if (result === 'tie.') {
          score.ties += 1;
        }
      
  
  
        localStorage.setItem('score', JSON.stringify
        (score));
      
        
        
        updateScoreElement();
  
  
  
        document.querySelector('.js-result').innerHTML = result;
  
      
  
        document.querySelector('.js-moves').innerHTML = `You
    <img src="${playerMove}-emoji.png" class="move-icon">
    <img src="${computerMove}-emoji.png" class="move-icon">
    Machine`;
      
  
      }
  
      function updateScoreElement () {
        document.querySelector('.js-score').innerHTML = 
        `Wins:${score.wins}, Losses:${score.losses}, Ties: ${score.ties}`;
  
      }
  
      
  
      
        
      
  
    function pickComputerMove() {
      const randomNumber = Math.random();
  
      let computerMove = '';
  
  
    if (randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock'; 
    }
    if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper'; 
    }
    if (randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'scissors'; 
    }
  
    return computerMove;
  
    } 
  