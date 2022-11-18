var timeLeft = document.querySelector("#time-left")
var buttonChoice = document.querySelectorAll(".button-choice")

var startButton = document.querySelector("#start-btn");

var questionHeader = document.querySelector("#question-header")
var choiceList = document.querySelector("#choice-list")
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

var currentQuestion = 0;
var score = 0;
var timerInterval;
var secondsLeft = 60;


//for loop to insert object properties into HTML
// 

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

    nextQuestion();

}

//eventlisteners
startButton.addEventListener("click", startQuiz);//starts time at beginning of test and populates first question sets

// //eventlistener function to check correct answers vs. wrong answers
function selectAnswer(event) {
    if (event.target.textContent == questions[currentQuestion].answer) { // console.log(event.target.textContent);
        answer.textContent = ('correct!');
        score++;
        console.log(score);
    } else if (event.target.textContent !== questions[currentQuestion].answer) {
        answer.textContent = ('Wrong!');
        console.log("Wrong!");
        score--;
        console.log(score);
    }
    nextQuestion(currentQuestion++);

}

choiceList.addEventListener("click", selectAnswer);// user selects answer, and shoudl receive a right or wrong text at the bottom. 


function nextQuestion() {
    startButton.disabled = true;
    choiceList.style.display = "block";
    questionHeader.textContent = questions[currentQuestion].question;
    button1.textContent = questions[currentQuestion].choices[0];
    button2.textContent = questions[currentQuestion].choices[1];
    button3.textContent = questions[currentQuestion].choices[2];
    button4.textContent = questions[currentQuestion].choices[3];
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
        answer: "to execute a code more than once",
    }
]

//function checkAnswer() {

// var projectName = projectNameInputEl.val().trim();
    // var projectType = projectTypeInputEl.val(); // don't need to trim select input
    // var projectDate = projectDateInputEl.val();
