var timerElement = document.getElementById('timer'); 
var beginElement = document.getElementById('begin'); 
var click = document.getElementById('start'); 
var quizArea = document.getElementById('quizArea');
var question = document.getElementById('question'); 
var answer1 = document.getElementById('answers1');
var answer2 = document.getElementById('answers2');
var answer3 = document.getElementById('answers3');
var answer4 = document.getElementById('answers4'); 
var hspage = document.getElementById('scores');
var scoring = document.getElementById('scoring'); 
var answer = document.getElementById('answer'); 
var quizlength = 4; 
var score = 0; 
var quizended = false;
var hs = document.getElementById('highscores'); 
var submit = document.getElementById('submit'); 
var timeRemaining = 30; 


quizArea.style.display = "none"; 
results.style.display = "none";
hspage.style.display = "none";

var contentEL = document.getElementById('names'); 



function quizStart(event){
    event.preventDefault();

    quizlength = 4; 
    score = 0;
    beginElement.style.display = "none"; 
    quizArea.style.display = "block"; 
    hspage.style.display = "none";
    
    

    var timerInterval = setInterval(function() {
        timerElement.textContent = "Time Left: " + timeRemaining--;
    
        if(timeRemaining === 0 || quizended) {
            timerElement.textContent = "";
          clearInterval(timerInterval);
          quizStop(); 
          
        }
    }, 1000);
};


function quizStop(event){ 
    quizended = true; 
   quizArea.style.display = "none";
   results.style.display = "block";
   scoring.textContent = "Your total score is " + score;
   timerElement.textContent = "";

  submit.addEventListener("click", highScores);
   }

function highScores(event){ 
    event.preventDefault();
    results.style.display = "none";
    quizArea.style.display = "none";
    beginElement.style.display = "none";
    hspage.style.display = "block";

    var nameContent = document.querySelector("#content1").value; 
    localStorage.setItem("naming", nameContent); 
    var finalName = localStorage.getItem("naming"); 

    if (quizended){
    names.textContent = finalName + " has scored " + score + "out of 4";
    }

    if (!quizended){
        var startAgain = document.createElement("button");
        names.append(startAgain);
        startAgain.textContent = "Start Quiz?";
        startAgain.addEventListener("click", quizStart);
     }
    }

    function submitted(datanum){ 

    if (quizlength === 3){
        question.textContent = "What is my dog's name?"
        answer1.textContent = "Dragon"
        answer2.textContent = "Air Bud"
        answer3.textContent = "Moose"
        answer4.textContent = "Greg"

        if (datanum == 1){
            answer.textContent = "Correct";
            score++;
        } else {
            answer.textContent = "Incorrect";
            timeRemaining = timeRemaining - 10;
        }
    }

    if (quizlength === 2){
        question.textContent = "What Coding language do we use the most?"
        answer1.textContent = "French"
        answer2.textContent = "Spanish"
        answer3.textContent = "Java"
        answer4.textContent = "Javascript"

        if (datanum == 3){
            answer.textContent = "Correct";
            score++;
        } else {
            answer.textContent = "Incorrect";
            timeRemaining = timeRemaining - 10;
        }
    }

    if (quizlength === 1) {
        question.textContent = "Who is our instructor?"
        answer1.textContent = "Jacob"
        answer2.textContent = "Jared"
        answer3.textContent = "Jeremy"
        answer4.textContent = "Jose"

        if (datanum == 4){
            answer.textContent = "Correct";
            score++;
        } else {
            answer.textContent = "Incorrect";
            timeRemaining = timeRemaining - 10;
        }
    }

    if (quizlength === 0){
        if (datanum == 3){
            answer.textContent = "Correct";
            score++;
        } else {
            answer.textContent = "Incorrect"; 
        }
        
        quizStop();
    }

    
}

start.addEventListener("click", quizStart);
hs.addEventListener("click", highScores);
quizArea.addEventListener("click", function(event) { 
    
    var element = event.target; 
    var datanum = element.getAttribute("data-number");
    console.log(element);
    console.log(datanum);
    if (datanum == 1 ||datanum == 2|| datanum == 3 || datanum == 4){
    quizlength--;
    submitted(datanum);
    
    }
  });
