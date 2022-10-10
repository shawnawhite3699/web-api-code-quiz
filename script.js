var startBtn = document.getElementById("#startBtn")
var time = 75;
var time_remaining = true;
var time_start= false;
var Timer = document.getElementById("Timer");
var startContainer = document.getElementById("startContainer");
var quizContainer = document.getElementById("quizContainer");
var questionPrompt = document.getElementById("#questionPrompt");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var correctResponse = document.getElementById("correctResponse");
var score = 0
var i = 0

var questions = [
    {
        prompt: "Commonly used data types DO NOT include:",
        options: [
            "1. strings",
            "2. booleans",
            "3. alerts",
            "4. numbers"
        ],
        correctResponse: 2 
    },
    {
        prompt: "The condition in an if/else statement is enclosed within ______.",
        options: [
            "1. quotes",
            "2. curly brackets",
            "3. parentheses",
            "4. square brackets"
        ],
        correctResponse: 2 
    },
    {
        prompt: "Arrays in JavaScript can be used to store ______.",
        options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above"
        ],
        correctResponse: 3 
    },
    {
        prompt: "String values must be enclosed within _____ when being assigned to variables.",
        options: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parentheses"
        ],
        correctResponse: 2 
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console log"
        ],
        correctResponse: 3 
    },
];

var TimerInterval = setInterval(setTimer, 1000);

function setTimer() {
        if (time_start)
        time--;
        if(time <= 0) {
        end_quiz();
        time = 0;    
        }
        document.getElementById("timer").innerHTML = time;
};

startBtn.addEventListener("click", function() {
    document.getElementById("score_keeper").style.display = "block";
    document.getElementById("score").innerHTML = score;
    setTimer();
    setQuizQuestions();
    time_start = true;
});

function setQuizQuestions() {
    questionPrompt.textContent = questions[i].prompt;
    option1.textContent = questions[i].options[0]; 
    option2.textContent = questions[i].options[1]; 
    option3.textContent = questions[i].options[2]; 
    option4.textContent = questions[i].options[3]; 
};