const questionEl = document.getElementById("question");
let storeAnswer;
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");

let score = parseInt(localStorage.getItem("score")) || 0;

const randomNumberGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomQuestionGenrator = () => {
  const randomNumber1 = randomNumberGenerator(2, 10);
  const randomNumber2 = randomNumberGenerator(1, 10);
  let questionType = randomNumberGenerator(1, 4);
  let firstNumber;
  let secondNumber;

  if (randomNumber1 > randomNumber2 && questionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }

  let questions;
  let answer;

  switch (questionType) {
    case 1:
      questions = `Q. What is ${firstNumber} multiply by ${secondNumber}?`;
      answer = firstNumber * secondNumber;
      break;
    case 2:
      questions = `Q. What is ${firstNumber} add to ${secondNumber}?`;
      answer = firstNumber + secondNumber;
      break;
    case 3:
      questions = `Q. What is ${firstNumber} subtract from ${secondNumber}?`;
      answer = firstNumber - secondNumber;
      break;
    case 4:
      questions = `Q. What is ${firstNumber} divide by ${secondNumber}?`;
      answer = firstNumber / secondNumber;
      break;
    default:
      questions = `Q. What is ${firstNumber} divide by ${secondNumber}?`;
      answer = firstNumber / secondNumber;
      break;
  }
  return { questions, answer };
};

const showQuestion = () => {
  const { questions, answer } = randomQuestionGenrator();
  questionEl.innerText = questions;
  scoreEl.innerText = score;
  storeAnswer = answer;
};
showQuestion();

const checkAnswer = (event) => {
  event.preventDefault();
  const formData = new FormData(questionFormEl);
  const userAnswer = +formData.get("answer");
  if (userAnswer === storeAnswer) {
    score += 1;
    alert(`Your Answer is Correct! And Your score +1`);
  } else {
    score -= 1;
    alert(`Your Answer is Wrong! And your score -1`);
  }
  scoreEl.innerText = score;
  localStorage.setItem("score", score);
  event.target.reset();
  showQuestion();
};
