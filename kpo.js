let userScore= 0;
let computerScore=0;
let matches=0;
const matchScore_span=document.getElementById("match-score");
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const result_div=document.querySelector(".result > p");
const rock_div=document.getElementById("rock");
const paper_div=document.getElementById("paper");
const scissor_div=document.getElementById("scissor");

function getCompChoice(){
  const choices=["r", "p", "s"];
  const randomNumber=Math.floor(Math.random()*3);
  return choices[randomNumber];
}

function convert(letter){
  if (letter==="r") return "Rock";
  if (letter==="p") return "Paper";
  return "Scissors";
  
}

function win(user, computer){
  userScore++;
  matches++;
  userScore_span.innerHTML=userScore;
  matchScore_span.innerHTML=matches;
  result_div.innerHTML= convert(user) + " beats "+ convert(computer)+ ". You win!"
}

function lose(user, computer){
  computerScore++;
  matches++;
  computerScore_span.innerHTML=computerScore;
  matchScore_span.innerHTML=matches;
  result_div.innerHTML= convert(user) + " loses to "+ convert(computer)+ ". You lose!"
}

function draw(user, computer){
  matches++;
  matchScore_span.innerHTML=matches;
  result_div.innerHTML= "It's a draw!"
}

function game(userChoice){
  const computerChoice = getCompChoice();
  switch(userChoice+computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
     lose(userChoice, computerChoice);
      break;
  }
}

  function main(){
  rock_div.addEventListener('click', function(){
    game("r");
  })
  paper_div.addEventListener('click', function(){
  game("p");
  })
  scissor_div.addEventListener('click', function(){
  game("s");
  })
  }

main();
