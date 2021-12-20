let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10)
}

function compareGuesses(human, computer, secret) {
    let hum = Math.abs(human - secret);
    let comp = Math.abs(computer - secret);
    console.log(hum, comp)
    if (hum <= comp) {
        return true
    } else {
        return false
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1
    } else {
        computerScore += 1
    }
}

function advanceRound() {
    currentRoundNumber += 1
}

/*
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess)
  const computerDifference = Math.abs(targetGuess - computerGuess)
  return humanDifference <= computerDifference;
}

const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => currentRoundNumber++;

 */