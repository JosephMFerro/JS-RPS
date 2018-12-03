document.getElementById("rock").onclick = run;
document.getElementById('paper').onclick = run;
document.getElementById('scissors').onclick = run;

var score = 0;

function run(){
  var userChoice = this.id;
  // Simpler computer choice function using random number. From stackoverflow
  var computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    }else if(computerChoice <= 0.67) {
      computerChoice = "paper";
    }else{
      computerChoice = "scissors";
  }; 
    
  document.getElementById("result-box").innerHTML = compare(userChoice, computerChoice);
  document.getElementById("score-box").innerHTML = score;

  if (score > 9) {
    score = 0
  }

  function compare(userChoice, computerChoice){
    if (userChoice === computerChoice) {
      return "Tie";
    }

    if (userChoice === "rock") {
      if (computerChoice === "scissors") {
        score++;
        return "You Win"
      }else{
        return "You Lose"
      }
    }

    if (userChoice === "paper") {
      if (computerChoice === "rock") {
        score++;
        return "You Win"
      }else{
        return "You Lose"
      }
    }

    if (userChoice === "scissors") {
      if (computerChoice === "paper") {
        score++;
        return "You Win"
      }else{
        return "You Lose"
      }
    }
  }
}