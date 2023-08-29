// Calculation Variable
let firstNumber = 0;
let secondNumber = 0;
let operator = null;

// Display Variable
let displayValue = null;
let displayState = "";

const displayEl = document.querySelector(".display-text");
const buttonEl = document.querySelectorAll(".key button");

// Display The Number
buttonEl.forEach(function (buttonNumber) {
  buttonNumber.addEventListener("click", function () {
    displayValue = buttonNumber.textContent;
    const buttonValue = Array.from(buttonNumber.classList);

    if (displayState == "Operand") {
      displayEl.textContent = "";
    }

    if (buttonValue.includes("number")) {
      displayNumber();
    } else if (buttonValue.includes("operand") && displayState == "Number") {
      displayOperand();
    } else if (buttonValue.includes("clear")) {
      clearDisplay();
    }

    console.log(displayState);
  });
});

function displayNumber() {
  displayState = "Number";
  if (displayEl.textContent.length > 10) {
    console.log("Another Digit Is Not Allowed, Press AC To Reset");
  } else {
    displayEl.textContent += `${displayValue}`;
  }
}

function displayOperand() {
  displayState = "Operand";
  displayEl.textContent = `${displayValue}`;
}

function clearDisplay() {
  displayEl.textContent = "";
  console.clear();

  // Reset Variables
  firstNumber = 0;
  secondNumber = 0;
  operator = null;

  displayValue = null;
  displayState = "";
}

// Calculate The Number
function preCalculate() {}

function postCalculate() {}

function operate(numOne, numTwo, operate) {
  if (operate == "add") {
    return add(numOne, numTwo);
  } else if (operate == "subtract") {
    return subtract(numOne, numTwo);
  } else if (operate == "multiply") {
    return multiply(numOne, numTwo);
  } else if (operate == "divide") {
    return divide(numOne, numTwo);
  }
}

function add(numOne, numTwo) {
  return Number(numOne) + Number(numTwo);
}

function subtract(numOne, numTwo) {
  return Number(numOne) - Number(numTwo);
}

function multiply(numOne, numTwo) {
  return Number(numOne) * Number(numTwo);
}

function divide(numOne, numTwo) {
  return Number(numOne) / Number(numTwo);
}

// Tomorrow Task
// 1. Store the number to an array
// 2. Try to calculate using the array based on the operand
// 3. Your calculator should not evaluate more than a single pair of numbers at a time.

// 4. Pressing = before entering all of the numbers or an operator could cause problems!
// 5. Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear” (Complete the algorithm)
// 6. Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
// 7. Should round answers with long decimals so that they don’t overflow the screen.
