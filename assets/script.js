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

// --------------------- Answer Selection --------------------- //

function selectedAnswer(rightAnswer) {
  let userResponse = rightAnswer.textContent;
  let correctAnswer = questions[questionCount - 1].rightAnswer;
  let allSelections = answers.children.length;

  if (userResponse == correctAnswer) {
    userScore += 1;
    rightAnswer.classList.add("correct");
  } else {
    rightAnswer.classList.add("incorrect");
    showAnswer();
  }

  function showAnswer() {
    for (let i = 0; i < allSelections; i++) {
      if (answers.children[i].textContent == correctAnswer) {
        answers.children[i].setAttribute("class", "option correct");
      }
    }
  }

  document.querySelector("#nextButton").disabled = false;
  document.querySelector(".option").setAttribute("disabled", "");
}

// -------------------------------x of 21 questions code------------------------- //

function counter(i) {
  const quesCount = document.querySelector("#totalQuestions");
  let bottomQuestionCounter =
    "<span><p> " + i + " of " + questions.length + "</p></span>";
  quesCount.innerHTML = bottomQuestionCounter;
}

// -------------------Button and function for next question--------------------- //

document.querySelector("#nextButton").onclick = function () {
  nextQuestion();
  document.querySelector("#nextButton").disabled = true;
};

function nextQuestion() {
  showQuestions(questionCount);
  questionCount++;
  questionNum++;

  counter(questionNum);
  if (questionCount == questions.length) {
    document.querySelector("#nextButton").innerHTML = "Results";
    document.querySelector("#nextButton").onclick = function () {
      showResults();
    };
  }
}

// ------------------------ Results box -------------------------------------- //

function showResults() {
  howToPlay.classList.remove("showBox");
  quizBox.classList.remove("activeQuiz");
  results.classList.add("showResults");
  incrementScore();
}

function incrementScore() {
  let scoreCounter = document.querySelector("#score");
  if (userScore >= 0) {
    scoreCounter.innerHTML =
      "<span>You scored <p>" + userScore + "</p> out of <p>21</p></span>";
  }
}

// ------------------------ End Game/Restart -------------------------------------- //
function exitGameEnd() {
  window.location.reload();
}

// ------------------- Event Listeners ----------------------- //

document.querySelector("#startButton").addEventListener("click", startGame);
document.querySelector("#newGame").addEventListener("click", newGame);
document.querySelector("#exitQuizStart").addEventListener("click", exitGame);
document.querySelector("#exitQuiz").addEventListener("click", exitGameEnd); // Function not yet written.
