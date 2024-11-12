// FIRST  ASSIGNMENT

const button = document.getElementById("hideButton");
const textDiv = document.getElementById("textDiv");

button.addEventListener("click", function () {
  textDiv.style.display = "none";
});

// SECOND ASSIGNMENT

const cardDiv = document.createElement("div");
cardDiv.id = "card";

const heading = document.createElement("h2");
heading.textContent = "Gandalf";

const profileLink = document.createElement("a");
profileLink.href = "#";
profileLink.textContent = "Go to profile";

cardDiv.appendChild(heading);
cardDiv.appendChild(profileLink);

document.body.appendChild(cardDiv);

// THIRD  ASSIGNMENT

// Quiz questions and answers
const quizData = [
  {
    question: "What is the capital of Georgia?",
    answers: ["Tbilisi", "Qutaisi", "Batumi", "Rustavi"],
    correct: 0, // Index of the correct answer
  },
  {
    question: "How many planets are there in the solar system?",
    answers: ["9", "12", "10", "8"],
    correct: 3,
  },
  {
    question: "Who wrote 'ვეფხისტყაოსანი'?",
    answers: ["Ilia Chavchavadze", "Shota Rustaveli", "Akaki Tsereteli "],
    correct: 1,
  },
];

const quizContainer = document.getElementById("quizContainer");

// Function for quiz
function createQuiz() {
  quizData.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `<h3>${item.question}</h3>`;

    item.answers.forEach((answer, answerIndex) => {
      const answerDiv = document.createElement("div");
      answerDiv.className = "answer";
      answerDiv.textContent = answer;
      answerDiv.addEventListener("click", () =>
        checkAnswer(index, answerIndex, answerDiv, item.correct)
      );
      questionDiv.appendChild(answerDiv);
    });

    quizContainer.appendChild(questionDiv);
  });
}

// Function to check the answer
function checkAnswer(
  questionIndex,
  answerIndex,
  answerDiv,
  correctAnswerIndex
) {
  const allAnswers = document.querySelectorAll(".answer");
  allAnswers.forEach((div) => {
    div.classList.remove("correct", "wrong");
  });

  if (answerIndex === correctAnswerIndex) {
    answerDiv.classList.add("correct"); // Green for correct answer
  } else {
    answerDiv.classList.add("wrong"); // Red for wrong answer
  }
}

createQuiz();
