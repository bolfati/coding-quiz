//VARIABLE SPACE
var timerElement = document.getElementById("timer"); //timer element on page
var begin = document.getElementById("begin"); //getting a handle on button
var click = document.getElementById("start");
var remainingTime = 30; //initial timer element value
var answerOne = document.getElementById("answer1");
var answerTwo = document.getElementById("answer2");
var answerThree = document.getElementById("answer3");
var answerFour = document.getElementById("answer4");
var questionArea = document.getElementById("quesArea");
var 


//GIVEN I am taking a code quiz 
//TODO make start quiz button

function beginQuiz(event) {
    setTime();
  event.preventDefault();
    console.log("log for begin quiz");

    begin.style.display = "none"

    
}

//WHEN I click the start button
//TODO add event listener for click and to show questions/timer
//TODO create timer

function setTime() {
    var timerInterval = setInterval(function() {
      timerElement.textContent = "You have " + remainingTime + " seconds left!";
      remainingTime--;
      
      if(remainingTime < 0) {
        console.log("quiz has ended");
        clearInterval(timerInterval);
      }
    }, 1000);

}

questionArea.addEventListener("click", answerButtons) 

function answerButtons(event) {
var choices = 
}



//THEN a timer starts and I am presented with a question
//TODO add clickable sets of questions relating to JS




//WHEN I answer a question
//TODO make function to grab answer, keep score if correct answer


//THEN I am presented with another question
//TODO make first set of questions change to second, third, etc

//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//TODO add function for timer subtraction when answer is incorrect


//WHEN all questions are answered or the timer reaches 0
//TODO set parameters to end quiz

//THEN the game is over
//TODO make function to end game on timer 0/all questions answered

//WHEN the game is over
//TODO add game over screen

//THEN I can save my initials and my score
//TODO add submit form and show score


begin.addEventListener("click", beginQuiz); //catching button click event to start quiz/timer