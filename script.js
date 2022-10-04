var startBtn = document.querySelector("#start")
var time = 75;
var questionPrompt = document.querySelector("#questionPrompt");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var correctResponse = document.querySelector("correctResponse");
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

function setQuestions() {
    questionPrompt.textContent = questions[i].prompt;
    option1.textContent = questions[i].option[0]; 
    option2.textContent = questions[i].option[1]; 
    option3.textContent = questions[i].option[2]; 
    option4.textContent = questions[i].option[3]; 
    };