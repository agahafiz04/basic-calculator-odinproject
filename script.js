let firstNumber = 0;
let secondNumber = 0;
let operator = null;

let displayValue = null;
let buttonValue = null;
let tempValue = null;

let numArray = [];

let isOperand = false;
let count = 0;

let equalIsPressed = false;

const displayEl = document.querySelector(".display-text");
const buttonEl = document.querySelectorAll(".key button");

// Display Algorithm
buttonEl.forEach(function (buttonNumber) {
  buttonNumber.addEventListener("click", function () {
    // Temporary
    if (count >= 2) {
      console.log(count);
      clearDisplay();
    }

    displayValue = Array.from(buttonNumber.classList);

    if (displayValue.includes("number")) {
      isOperand = false;
      buttonValue = buttonNumber.textContent;
      displayNumber();
    } else if (displayValue.includes("operand")) {
      if (tempValue !== null && isOperand == false) {
        isOperand = true;
        operator = displayValue;
        buttonValue = buttonNumber.textContent;
        preCalculateNumber();
        displayOperand();
      }
    } else if (displayValue.includes("clear")) {
      clearDisplay();
    } else if (displayValue.includes("equals")) {
      if (tempValue !== null && isOperand == false && count !== 0) {
        equalIsPressed = true;
        preCalculateNumber();
      }
    }
  });
});

function preCalculateNumber() {
  count++;
  if (count == 1) {
    firstNumber = displayEl.textContent;
    console.log(count);
    console.log(`The First Number Val is ${firstNumber}`);
    console.log(displayEl.textContent);
  } else if (equalIsPressed == true) {
    secondNumber = displayEl.textContent;
    console.log(count);
    console.log(`The Second Number Val is ${secondNumber}`);
    console.log(displayEl.textContent);
    postCalculateNumber();
  }
}

function postCalculateNumber() {
  console.log(operator[2]);
  let result = operate(firstNumber, secondNumber, operator[2]);
  displayEl.textContent = result;
  console.log(count);
}

function displayNumber() {
  if (tempValue == "Operand") {
    displayEl.textContent = "";
  }
  if (displayEl.textContent.length <= 8) {
    tempValue = "Number";
    displayEl.textContent += `${buttonValue}`;
  }
}

function displayOperand() {
  tempValue = "Operand";
  displayEl.textContent = `${buttonValue}`;
}

function clearDisplay() {
  displayEl.textContent = "";
  console.clear();

  // Reset Variables
  firstNumber = 0;
  secondNumber = 0;
  operator = null;

  displayValue = null;
  buttonValue = null;
  tempValue = null;

  numArray = [];

  isOperand = false;
  count = 0;

  equalIsPressed = false;
}

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
