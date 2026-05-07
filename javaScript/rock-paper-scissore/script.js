let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  Draws: 0,
};

// json.parse();

// setInterval(function(){})
// function name(params)
// ()=>{}
let isAutoPlaying = false;
let Interval;

function startAuto() {
  if (!isAutoPlaying) {
    Interval = setInterval(() => {
      const PlayMove = pickComputerMove();
      PlayerGame(PlayMove);
    }, 100);
    isAutoPlaying = true;
  } else {
    clearInterval(Interval);
    isAutoPlaying = false;
  }
}
startAuto();

function PlayerGame(PlayMove) {
  const computerchoice = pickComputerMove();

  let result = "";

  if (PlayMove === "Rock") {
    if (computerchoice === "Rock") {
      result = "Draw";
    } else if (computerchoice === "Paper") {
      result = "You lose";
    } else if (computerchoice === "Scissor") {
      result = "You win";
    }
  }

  if (PlayMove === "Paper") {
    if (computerchoice === "Rock") {
      result = "You win";
    } else if (computerchoice === "Paper") {
      result = "Draw";
    } else if (computerchoice === "Scissor") {
      result = "You lose";
    }
  }

  if (PlayMove === "Scissor") {
    if (computerchoice === "Rock") {
      result = "You lose";
    } else if (computerchoice === "Paper") {
      result = "You win";
    } else if (computerchoice === "Scissor") {
      result = "Draw";
    }
  }

  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Draw") {
    score.Draws += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".result").innerHTML = result;
  document.querySelector(".picks").innerHTML = `
    You 
    <img src="./images/${PlayMove.toLowerCase()}-emoji.png" class="move-icon">
    <img src="./images/${computerchoice.toLowerCase()}-emoji.png" class="move-icon">
    Computer
`;

  updateScore();
}

function updateScore() {
  document.querySelector(".score").innerHTML =
    `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.Draws}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerchoice = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerchoice = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerchoice = "Paper";
  } else {
    computerchoice = "Scissor";
  }
  return computerchoice;
}
