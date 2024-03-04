// -------------------- Getting all the elements needed from the HTML ----------- //

const startButton = document.querySelector("#startButton");
const howToPlay = document.querySelector("#info_box");
const quizBox = document.querySelector("#quiz");
const results = document.querySelector("#results");
const answers = document.querySelector("#answerList");

// ------------ All counters set to their start numbers ----------------- //

let questionCount = 1;
let questionNum = 1;
let userScore = 0;

// ------------ Start the game functions ---------------------------------- //

function startGame() {
  howToPlay.classList.add("showBox");
  startButton.classList.add("hideStart");
}

function exitGame() {
  howToPlay.classList.remove("showBox");
  startButton.classList.remove("hideStart");
}

function newGame() {
  howToPlay.classList.remove("showBox");
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
  counter(1);
}

// ---------------------- Show questions function ---------- //

function showQuestions(i) {
  let questionText = document.querySelector("#questionText");
  questionText.innerHTML =
    "<span>" + questions[i].numero + ". " + questions[i].question + "</span>";
  answers.innerHTML =
    '<div class="option"><span>' +
    questions[i].answer[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[i].answer[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[i].answer[2] +
    "</span></div>";
  let option = answers.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "selectedAnswer(this)");
  }
}

// ------------------- Event Listeners ----------------------- //

document.querySelector("#startButton").addEventListener("click", startGame);
document.querySelector("#newGame").addEventListener("click", newGame);
document.querySelector("#exitQuizStart").addEventListener("click", exitGame);
document.querySelector("#exitQuiz").addEventListener("click", exitGameEnd); // Function not yet written.
