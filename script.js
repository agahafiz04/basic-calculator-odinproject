// Calculation Variable
let firstNumber = 0;
let secondNumber = 0;
let operator = null;

let count = 0;
let tempNum = 0;
let result = 0;

// Display Variable
let displayValue = null;
let displayState = "";

const displayEl = document.querySelector(".display-text");
const dummyDisplayEl = document.querySelector(".display-dummy");
const displayElTwo = document.querySelector(".display-text-two");
const buttonEl = document.querySelectorAll(".key button");
const buttonDecimal = document.querySelector(".decimal");

// Keyboard Support
document.addEventListener("keydown", (e) => {
  if (e.key == "." || (e.key >= 0 && e.key <= 9)) {
    document.querySelector("#btn" + e.code).click();
  } else if (e.key == "Enter") {
    document.querySelector(".equals").click();
  } else if (e.key == "Backspace") {
    document.querySelector(".backspace").click();
  } else if (
    e.code == "Equal" ||
    e.code == "Minus" ||
    e.code == "KeyX" ||
    e.code == "Slash" ||
    e.code == "KeyC"
  ) {
    event.preventDefault();
    document.querySelector("#btn" + e.code).click();
  }
});

// Backspace button
function deleteNum() {
  displayEl.textContent = displayEl.textContent.slice(0, -1);
  tempNum = displayEl.textContent;
}

buttonEl.forEach(function (buttonNumber) {
  buttonNumber.addEventListener("click", function () {
    displayElTwo.textContent = "";
    dummyDisplayEl.textContent = "";
    checkFunction(buttonNumber);
    displayFunction(buttonNumber);
    CalculateFunction(buttonNumber);
  });
});

// Check The State
function checkFunction(buttonNumber) {
  const buttonValue = Array.from(buttonNumber.classList);

  if (result == NaN || result == undefined) {
    clearDisplay();
  }

  if (displayEl.textContent == "") {
    if (buttonValue.includes("number")) {
    } else if (buttonValue.includes("operand")) {
      clearDisplay();
      displayElTwo.textContent =
        "Cant Press Operand On Initial State, Please Reset";
    } else if (buttonValue.includes("clear")) {
    } else if (buttonValue.includes("equals")) {
      displayElTwo.textContent =
        "Cant Press Equals On Initial State Please Reset";
      clearDisplay();
    }
  }
}

// Calculate The Number
function CalculateFunction(buttonNumber) {
  const buttonValue = Array.from(buttonNumber.classList);

  if (result == 0) {
    if (buttonValue.includes("number") && count == 0) {
      tempNum = displayEl.textContent;
      firstNumber = tempNum;
    } else if (buttonValue.includes("operand") && count == 0) {
      count++;
      operator = buttonValue[2];
    } else if (buttonValue.includes("number") && count == 1) {
      tempNum = displayEl.textContent;
      secondNumber = tempNum;
    } else if (buttonValue.includes("operand") && count == 1) {
      count++;
    } else if (buttonValue.includes("backspace") && count == 0) {
      deleteNum();
      firstNumber = tempNum;
    } else if (buttonValue.includes("backspace") && count == 1) {
      deleteNum();
      secondNumber = tempNum;
    }
  }

  if (result !== 0) {
    if (buttonValue.includes("number") && count == 0 && operator == undefined) {
      result = displayEl.textContent;
    } else if (buttonValue.includes("number") && count == 0) {
      tempNum = displayEl.textContent;
      secondNumber = tempNum;
      result = operate(firstNumber, secondNumber, operator);
    } else if (buttonValue.includes("operand") && count == 0) {
      operator = buttonValue[2];

      dummyDisplayEl.textContent = buttonNumber.textContent;
      count += 2;
    } else if (
      buttonValue.includes("backspace") &&
      count == 0 &&
      operator == undefined
    ) {
      deleteNum();
      result = tempNum;
    } else if (buttonValue.includes("backspace") && result !== secondNumber) {
      deleteNum();
      secondNumber = tempNum;
    }
  }

  if (buttonValue.includes("equals") || count >= 2) {
    if (result == 0) {
      result = operate(firstNumber, secondNumber, operator);
      displayEquals();

      operator = buttonValue[2];
      firstNumber = result;
      secondNumber = 0;
      tempNum = 0;
      count = 0;
    } else if (result !== 0) {
      operator = buttonValue[2];
      firstNumber = result;
      count = 0;
      displayEquals();
    }
  }
}

// Display The Number
function displayFunction(buttonNumber) {
  displayValue = buttonNumber.textContent;
  const buttonValue = Array.from(buttonNumber.classList);

  if (displayState == "Operand" || displayState == "Equals") {
    displayState = "Number";
    displayEl.textContent = "";
  }

  if (buttonValue.includes("number")) {
    displayNumber();
  } else if (buttonValue.includes("operand") && displayState == "Number") {
    displayOperand();
  } else if (buttonValue.includes("clear")) {
    clearDisplay();
  }

  if (buttonValue.includes("decimal") || displayEl.textContent.includes(".")) {
    buttonDecimal.disabled = true;
  } else if (buttonValue.includes("nd") || buttonValue.includes("operand")) {
    buttonDecimal.disabled = false;
  }
}

function displayNumber() {
  displayState = "Number";
  if (displayEl.textContent.length > 10) {
  } else {
    displayEl.textContent += `${displayValue}`;
  }
}

function displayOperand() {
  displayState = "Operand";
  displayEl.textContent = `${displayValue}`;
}

function displayEquals() {
  displayEl.textContent = `${result}`;
}

function clearDisplay() {
  displayEl.textContent = "";
  console.clear();

  // Reset Variables
  firstNumber = 0;
  secondNumber = 0;
  operator = null;
  count = 0;
  result = 0;
  tempNum = 0;

  displayValue = null;
  displayState = "";
}

// Calculation Back End
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
  let total = Number(numOne) + Number(numTwo);
  return Number(total.toFixed(5));
}

function subtract(numOne, numTwo) {
  let total = Number(numOne) - Number(numTwo);
  return Number(total.toFixed(5));
}

function multiply(numOne, numTwo) {
  let total = Number(numOne) * Number(numTwo);
  return Number(total.toFixed(5));
}

function divide(numOne, numTwo) {
  if (numTwo == 0 || numTwo == "0") {
    displayElTwo.textContent = "Infinity, Enter Correct Calculation";
    return (result = 0);
  }
  let total = Number(numOne) / Number(numTwo);
  return Number(total.toFixed(5));
}
