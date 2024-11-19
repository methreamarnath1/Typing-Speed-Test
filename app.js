// const quotes = [
//   "The quick brown fox jumps over the lazy dog.",
//   "A journey of a thousand miles begins with a single step.",
//   "To be or not to be, that is the question.",
//   "All that glitters is not gold.",
//   "The only limit to our realization of tomorrow is our doubts of today.",
//   "Life is 10% what happens to us and 90% how we react to it.",
//   "Success is not the key to happiness. Happiness is the key to success.",
//   "In the middle of every difficulty lies opportunity.",
//   "Happiness is not something ready made. It comes from your own actions.",
//   "Do not wait to strike till the iron is hot; but make it hot by striking.",
//   "Act as if what you do makes a difference. It does.",
//   "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
//   "The purpose of our lives is to be happy.",
//   "You miss 100% of the shots you don’t take.",
//   "Whether you think you can or you think you can’t, you’re right.",
//   "I have not failed. I’ve just found 10,000 ways that won’t work.",
//   "It always seems impossible until it’s done.",
//   "Believe you can and you’re halfway there.",
//   "Failure is simply the opportunity to begin again, this time more intelligently.",
//   "The future belongs to those who believe in the beauty of their dreams.",
// ];

// const quoteDisplay = document.querySelector(".sentence");
// const typingArea = document.querySelector("#typing-area");
// const startButton = document.querySelector("#start-button");
// const timerDisplay = document.querySelector("#timer");
// const reaultDisplay = document.querySelector("#results");
// let currentQuote = "";
// let startTimer;
// let timerInterval;

// // Function to generate a random quote
// function generateRandomQuote() {
//   const randomIndex = Math.floor(Math.random() * quotes.length);
//   currentQuote = quotes[randomIndex];
//   quoteDisplay.textContent = currentQuote;
//   typingArea.value = "";
//   typingArea.focus();
// }
// //start the test

// startButton.addEventListener("click", () => {
//   generateRandomQuote();
//   startTimer = new Date();
//   timerDisplay.textContent = "TIME : 0S";
//   reaultDisplay.textContent = "";
//   typingArea.disabled = false;
//   startButton.disabled = true;

//   timerInterval = setInterval(() => {
//     const elapsedTime = new Date() - startTimer;
//     const seconds = Math.floor((elapsedTime / 1000) % 60);
//     timerDisplay.textContent = `TIME : ${seconds}S`;
//   }, 1000);
// });

// // check typing accuracy and speed

// typingArea.addEventListener("input", () => {
//   const typedText = typingArea.value;
//    if(typedText === currentQuote){
//     clearInterval(timerInterval);
//     startButton.disabled = false;
//     const timeTaken = new Date() - startTimer;
//     const speed = Math.floor((currentQuote.length / (timeTaken / 1000)) * 60);
//     reaultDisplay.textContent = `Your Speed : ${speed} WPM`;
//     typingArea.disabled = true;
//                 startButton.disabled = false;
//    }
// });



// gpt code
const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "A journey of a thousand miles begins with a single step.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Life is 10% what happens to us and 90% how we react to it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "In the middle of every difficulty lies opportunity.",
  "Happiness is not something ready made. It comes from your own actions.",
  "Do not wait to strike till the iron is hot; but make it hot by striking.",
  "Act as if what you do makes a difference. It does.",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
  "The purpose of our lives is to be happy.",
  "You miss 100% of the shots you don’t take.",
  "Whether you think you can or you think you can’t, you’re right.",
  "I have not failed. I’ve just found 10,000 ways that won’t work.",
  "It always seems impossible until it’s done.",
  "Believe you can and you’re halfway there.",
  "Failure is simply the opportunity to begin again, this time more intelligently.",
  "The future belongs to those who believe in the beauty of their dreams.",
];

const quoteDisplay = document.querySelector(".sentence");
const typingArea = document.querySelector("#typing-area");
const startButton = document.querySelector("#start-button");
const timerDisplay = document.querySelector("#timer");
const resultDisplay = document.querySelector("#results");

let currentQuote = "";
let startTimer;
let timerInterval;

// Generate a random quote
function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  currentQuote = quotes[randomIndex];
  quoteDisplay.textContent = currentQuote;
  typingArea.value = "";
  typingArea.disabled = false;
  resultDisplay.textContent = "";
}

// Start test and timer
startButton.addEventListener("click", () => {
  generateRandomQuote();
  startTimer = new Date();
  startButton.disabled = true;

  timerInterval = setInterval(() => {
    const elapsedTime = Math.floor((new Date() - startTimer) / 1000); // Timer in seconds
    timerDisplay.textContent = `TIME: ${elapsedTime}s`;
  }, 100); // Update every 100ms for smooth feedback
});

// Calculate and display speed and accuracy
typingArea.addEventListener("input", () => {
  const typedText = typingArea.value;

  // Real-time feedback on correctness
  if (!currentQuote.startsWith(typedText)) {
    typingArea.style.borderColor = "red"; // Highlight incorrect input
  } else {
    typingArea.style.borderColor = "green"; // Highlight correct input
  }

  // Check if typing is complete
  if (typedText === currentQuote) {
    clearInterval(timerInterval);

    // Calculate time taken in seconds
    const timeTaken = (new Date() - startTimer) / 1000;

    // Words per minute (WPM)
    const wordCount = currentQuote.split(" ").length;
    const wpm = Math.floor((wordCount / timeTaken) * 60);

    // Calculate accuracy
    const accuracy =
      ((currentQuote.length -
        Math.abs(currentQuote.length - typedText.length)) /
        currentQuote.length) *
      100;

    // Display results
    resultDisplay.textContent = `Speed: ${wpm} WPM, Accuracy: ${accuracy.toFixed(
      2
    )}%`;
    typingArea.disabled = true;
    startButton.disabled = false;
  }
});
