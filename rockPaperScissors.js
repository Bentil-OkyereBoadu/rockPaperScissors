const getUserChoice = userInput => {
   userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } 
  else console.log('Incorrect input! You have to choose either rock, paper or scissors.'); 
};
const getComputerChoice = () =>{
 let choice = Math.floor(Math.random() * 3);
 switch (choice){
   case 0: return 'rock';
   break;
   case 1: return 'paper';
   break;
   case 2: return 'scissors';
 }
}

const determineWinner = (userChoice , computerChoice) => {
  if (userChoice === computerChoice ){
    return 'Game was a tie.';
  }
  if (userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer won!';
    }
    else return 'User won!';
  }
  if (userChoice === 'paper'){
     if(computerChoice === 'scissors'){
      return 'Computer won!';
    }
    else return 'User won!';
  }
   if (userChoice === 'scissors'){
     if(computerChoice === 'rock'){
      return 'Computer won!';
    }
    else return 'User won!';
  }
  if (userChoice === 'bomb'){
    return 'User won!!!'
  }
}

//console.log(determineWinner(getUserChoice('rock') , getComputerChoice()));

const playGame = () => {
  let userChoice = getUserChoice('scissors');
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();
