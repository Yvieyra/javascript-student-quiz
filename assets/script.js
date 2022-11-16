var timeLeft = document.querySelector("#time-left")
var buttonChoice = document.querySelector(".button-choice")

var startButton = document.querySelector("#start-btn");

var questionChoices = document.querySelector("question-choices")
var question = document.querySelector("#question")
var button1 = document.querySelector("#btn1")
var button2 = document.querySelector("#btn2")
var button3 = document.querySelector("#btn3")
var button4 = document.querySelector("#btn4")
var lineBreak = document.querySelector("#line-break")
var answer = document.querySelector("#answer")

var allDone = document.querySelector("#all-done")
var finalScore = document.querySelector("#final-score")
var initialsInput = document.querySelector("#intials")

var highScores = document.querySelector("#high-scores")
var highestScore = document.querySelector("#score-results")

var backButton = document.querySelector("#back-btn")
var clearButton = document.querySelector("#clear-btn")

var timerInterval;
var secondsLeft = 10;
//setinterval() function

//clearinterval() function
//for loop to insert object properties into HTML
// for (var i = 0; i < questions.length; i++) {

// }

function countDown() {
 timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timeLeft);
            // Calls function to create and append image
            sendMessage();
        }
        function sendMessage() {
            timeLeft.textContent = " Times up! ";
          }   
    }, 1000);

       
}
//eventlisteners
startButton.addEventListener("click", countDown);

// buttonChoice.addEventListener("click", function () {
//     questions.question1
// });


// //get stored values for high scores

// //add questions and choices with answers in jS (An array of Objects)
// // one object per question in one big array
// var questions = [

//     {
//         question1: "To combine a message with a variable is called a: ",
//         choices1: ["concatenation", "boolean", "string", "array"],
//         answer1: "concatenation"
//     },
//     {
//         question2: "A string is a series of characters and is surrounded by:  ",
//         choices2: ["p tags", "brackets", "quotes", "parenthesis"],
//         answer3: "quotes"
//     },
//     {
//         question3: "The logical comparison operator modulus(%) is used for what?",
//         choices3: ["percentage", "It returns the remainder between two numbers", "average", "reverses boolean value"],
//         answer3: "It returns the remainder between two numbers"
//     },
//     {
//         question4: "What does the following method do? .push()",
//         choices4: ["inserts the parameter onto the end of an array and returns the new array order", "It re-assigns the array value to the only parameter value", "inserts the parameter to the start of an array and returns the new array order", "It returns the value of the parameter inside the push parenthessis if it exists in the array"
//         ],
//         answer4: "inserts the parameter onto the end of an array and returns the new array order"
//     },
//     {
//         question5: "Why do we use for-loops?",
//         choices5: ["to code quicker", "to execute a code more than once", "to find false statements", "to find true statements"],
//         answer5: "It execute a code more than once"
//     }
// ]

// Tests to check correct answers vs. wrong answers
