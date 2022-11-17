var timeLeft = document.querySelector("#time-left")
var buttonChoice = document.querySelector(".button-choice")

var startButton = document.querySelector("#start-btn");

var questionChoices = document.querySelector("question-choices")
var questionHeader = document.querySelector("#question-header")
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
var secondsLeft = 60;


//for loop to insert object properties into HTML
// for (var i = 0; i < questions.length; i++) {

// }

function countDown() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeLeft.textContent = secondsLeft;

        if (secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create a message
            sendMessage();
        }
        //messsage function
        function sendMessage() {
            timeLeft.textContent = " Times up! ";
        }
    }, 1000);

    starterQuestion();

}


//eventlisteners
startButton.addEventListener("click", countDown);//starts time at beginning of test and populates first question sets
//eventlistener function
function nextQuestion() { // is a next question necessary?}
    if (questions[0].answer) {
        answer.textContent = ("correct!");
    
}}

buttonChoice.addEventListener("click", nextQuestion);// user selects questions choice and function should move to next questiion and give correct answer


function starterQuestion() {
    questionHeader.textContent = questions[0].question;
    button1.textContent = questions[0].choices[0];
    button2.textContent = questions[0].choices[1];
    button3.textContent = questions[0].choices[2];
    button4.textContent = questions[0].choices[3];
    
}

// //get stored values for high scores

//add questions and choices with answers in jS (An array of Objects)
// one object per question in one big array
var questions = [

    {
        question: "To combine a message with a variable is called a: ",
        choices: ["boolean", "concatenation", "string", "array"],
        answer: "concatenation"
    },
    {
        question: "A string is a series of characters and is surrounded by:  ",
        choices: ["p tags", "brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "The logical comparison operator modulus(%) is used for what?",
        choices: ["percentage", "It returns the remainder between two numbers", "average", "reverses boolean value"],
        answer: "It returns the remainder between two numbers"
    },
    {
        question: "What does the following method do? .push()",
        choices: ["inserts the parameter onto the end of an array and returns the new array order", "It re-assigns the array value to the only parameter value", "inserts the parameter to the start of an array and returns the new array order", "It returns the value of the parameter inside the push parenthessis if it exists in the array"
        ],
        answer: "inserts the parameter onto the end of an array and returns the new array order"
    },
    {
        question: "Why do we use for-loops?",
        choices: ["to code quicker", "to execute a code more than once", "to find false statements", "to find true statements"],
        answer: "It execute a code more than once"
    }
]

// Tests to check correct answers vs. wrong answers