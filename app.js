// strike button
var strikeButton = document.querySelector("#strike")
// reset button
var resetButton = document.querySelector("#reset")
// score tag
var team1score_tag = document.getElementById("team1-score")
var team2score_tag = document.getElementById("team2-score")

// wickets tags
var team1Wicket_tag = document.getElementById("team1-wicket")
var team2Wicket_tag = document.getElementById("team2-wicket")

// audio variables
var strikeAudio = new Audio("http://bit.ly/so-ball-hit")
var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer")

// variables to keep track of game
var team1Score = 0;
var team2score = 0;
var team1Wickets = 0;
var team2Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

var  possibleOutcomes = [0,1,2,3,4,6,"W"]

strikeButton.addEventListener("click", strikeButtonClicked)

  function strikeButtonClicked()
  {
    // Audio Play
  strikeAudio.pause(); //pause the previuos playing audio
  strikeAudio.currentTime = 0; // bring the time to 0
  strikeAudio.play();


  // chosing random value
  var randomness = Math.random()
  var random1 = randomness *possibleOutcomes.length
  var randomIndex = Math.floor(random1)


  var randomValue = possibleOutcomes[randomIndex]

  // pak batting
  if(turn == 2){
    team2BallsFaced++;
    var ball = document.querySelector(`#team2sup div:nth-child(${team2BallsFaced})`)
    console.log(ball)
    ball.innerHTML = randomValue;

    if(randomValue == "W")
    {
      team2Wickets++;
    }
    else{
      team2score = team2score + randomValue;
    }

    if(team2score > team1Score || team2Wickets == 2 || team2BallsFaced == 6){
      turn = 3;

      setTimeout(() => {
        gameOver();
      },10);

    }
    updateScore()
  }
  
// India Batting
  if(turn == 1)
  {
    team1BallsFaced++;
    var ball = document.querySelector(`#team1sup div:nth-child(${team1BallsFaced})`)
    ball.innerHTML = randomValue;
// if random element is wicket then increase wicket count by 1 or just add that random value to total score of team-1
    if(randomValue == "W")
    {
      team1Wickets++;
    }
    else{
      team1Score = team1Score + randomValue;
    }

    if(team1BallsFaced == 6 || team1Wickets == 2)
    {
      turn = 2;
    }
    updateScore();

  }
}

function updateScore(){
  team1score_tag.innerHTML = team1Score;
  team1Wicket_tag.innerHTML = team1Wickets
  team2score_tag.innerHTML = team2score
  team2Wicket_tag.innerHTML = team2Wickets
}

function gameOver(){
  if(team1Score>team2score)
  {
    alert("INDIA WINS")
  }
  else if(team2score > team1Score){
    alert("PAKISTAN WINS")

  }
  else
  alert("Its a Tie")

  document.querySelectorAll(".ball").forEach(e=>{
    if(e.innerHTML == "")
    {
      e.innerHTML = "X"
      e.style.backgroundColor = "grey"
    }
  })

  gameOverAudio.pause(); //pause the previuos playing audio
  gameOverAudio.currentTime = 0; // bring the time to 0
  gameOverAudio.play();

}

resetButton.addEventListener("click", resetFunction)
function resetFunction()
{
  window.location.reload()
}