var timeLeft = document.querySelector("#time-left")
var buttonChoice = document.querySelector(".button-choice")

var startButton = document.querySelector("#start-btn");

var questionChoices = document.querySelector("#question-choices")
var questionHeader = document.querySelector("#question-header")
var choicelist = document.querySelector("#choice-list")
var button1 = document.querySelector("#btn1")
var button2 = document.querySelector("#btn2")
var button3 = document.querySelector("#btn3")
var button4 = document.querySelector("#btn4")
var answer = document.querySelector("#answer")

var allDone = document.querySelector("#all-done")
var finalScore = document.querySelector("#final-score")
var initialsInput = document.querySelector("#intials")

var highScores = document.querySelector("#high-scores")
var highestScore = document.querySelector("#score-results")

var backButton = document.querySelector("#back-btn")
var clearButton = document.querySelector("#clear-btn")

var wrongAnswers = 0;
var correctAnswers = 0;
var timerInterval;
var secondsLeft = 60;


//for loop to insert object properties into HTML
// for (var i = 0; i < questions.length; i++) {

// }

function startQuiz() {
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
startButton.addEventListener("click", startQuiz);//starts time at beginning of test and populates first question sets
//eventlistener function to check correct answers vs. wrong answers
function selectAnswer() {
   if(buttonChoice===questions[0].answer) {
        answer.textContent = ("correct!");
    
}}

buttonChoice.addEventListener("click", selectAnswer);// user selects answer, and shoudl receive a right or wrong text at the bottom. 


function starterQuestion() {
    startButton.disabled = true; 
    choicelist.style.display ="block";
    questionHeader.textContent = questions[0].question;
    button1.textContent = questions[0].choices[0];
    button2.textContent = questions[0].choices[1];
    button3.textContent = questions[0].choices[2];
    button4.textContent = questions[0].choices[3];  
}

//get stored values for high scores

//questions and choices with answers in an array of objects
var questions = [

    {
        question: "To combine a message with a variable is called a: ",
        choices: ["boolean", "concatenation", "string", "array"],
        answer: "concatenation",
    },
    {
        question: "A string is a series of characters and is surrounded by:  ",
        choices: ["p tags", "brackets", "quotes", "parenthesis"],
        answer: "quotes",
    },
    {
        question: "The logical comparison operator modulus(%) is used for what?",
        choices: ["percentage", "It returns the remainder between two numbers", "average", "reverses boolean value"],
        answer: "It returns the remainder between two numbers",
    },
    {
        question: "What does the following method do? .push()",
        choices: ["inserts the parameter onto the end of an array and returns the new array order", "It re-assigns the array value to the only parameter value", "inserts the parameter to the start of an array and returns the new array order", "It returns the value of the parameter inside the push parenthessis if it exists in the array"
        ],
        answer: "inserts the parameter onto the end of an array and returns the new array order",
    },
    {
        question: "Why do we use for-loops?",
        choices: ["to code quicker", "to execute a code more than once", "to find false statements", "to find true statements"],
        answer: "It execute a code more than once",
    }
]

