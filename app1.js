//srike button
var strikeButton = document.querySelector('strike');
//reset button
var resetButton = document.querySelector('reset');

//Score Tags
var team1score_tag = document.getElementById("score-team1");
var team2score_tag = document.getElementById("score-team2");

//Wicket Tags
var team1Wicket_tag = document.getElementById("wicket-team1");
var team2Wicket_tag = document.getElementById("wicket-team2");

//Audio Variables
var strikeAudio = new Audio("http://bit.ly/so-ball-hit");
var gameOverAudio = new Audio("http://bit.ly/so-crowd-cheer");

//variables to kepp track of game
var team1Score = 0;
var team2Score = 0;
var team1Wickets = 0;
var team1Wickets = 0;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
var turn = 1;

var possibleOutcomes = [0,1,2,3,4,5,"W"];

strikeButton.addEventListener("click", strikeButtonClicked)

function strikeButtonClicked(){

    //Audio Play
    strikeAudio.pause(); //pause the previous playing audio
    strikeAudio.currentTime = 0; //bring the time to 0
    strikeAudio.play();

    //Choosing Random value

    var randomness = Math.random(); //is generating a random decimal
    //number between 0 and 1. The
    //Math.random() function in Javascript returns a random 
    //floating-point number between 0 (inclusive)
    //and 1 (exclusive).
    var randomness = Math.random();
    //random will generate values from 0 to less than the length of array-possibleOutcomes here 0 to 7
    var random1 = randomness * possibleOutcomes.length
    var randomIndex = Math.floor(random1)
    var randomValue = possibleOutcomes[randomIndex];

    //PAKISTAN BATTING
    if (turn == 2) {
        team2BallsFaced++;//m value to total score of team-1

        //if random element is wicket then increase wicket count by 1
        // or just add that rando
        var balll = document.querySelector(`#team1-superover div:nth-child(${team2BallsFaced})`)
        ball.innerHTML = randomValue;

        if (randomValue=='W') {
            team2Wickets++
        } else {
            //team1Score = team1Score + randomValue;
            team2Score+=randomValue;
            console.log("team2Score: ", team2Score);
        }

        if (team2Score > team1Score || team2Wickets == 2 || team1BallsFaced == 6) {
            turn = 3;

            setTimeout(()=> {
                gameOver();
            },10);
            
        }
        updateScore()
    }

//INDIA BATTING
if (turn == 1) {
    team1BallsFaced++;
    var ball = document.querySelector(`#team1-superover div:nth-child(${team1BallsFaced})`);
    ball.innerHTML = randomValue;

    //if random element is wicket then increase wicket count by 1
    // or just add that random value to total score of team-1
    if (randomValue=='W') {
        team1Wickets++
    } else {
        //team1Score = team1Score + randomValue;
        team1Score+=randomValue;
    }

    if(team1BallsFaced == 6 || team1Wickets == 2) {
        turn = 2;
    }
    updateScore()
  }
}

function updateScore() {
team1score_tag.innerHTML = team1Score;
team1Wicket_tag.innerHTML = team1Wickets;
team2score_tag.innerHTML = team2Score;
team2Wicket_tag.innerHTML = team2Wickets;
}


function gameOver() {
    if (team1Score>team2Score) {
        alert ("INDIA WINS")
    } else if (team1Score<team2Score) {
        alert ("PAKSITAN WINS")
    } else {
        alert ("Its a Tie")
    }
    document.querySelectorAll(".ball").forEach(e=>{
        if(e.innerHTML = "X")
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

function resetFunction() {
    window.location.reload()
}
