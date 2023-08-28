let firstNumber = 0;
let secondNumber = 0;
let operator = null;

let displayValue = null;
let tempValue = null;

const displayEl = document.querySelector(".display-text");
const buttonEl = document.querySelectorAll("button");

// Display Algorithm

buttonEl.forEach(function (buttonNumber) {
  buttonNumber.addEventListener("click", function () {
    displayValue = Array.from(buttonNumber.classList);

    if (displayValue.includes("number")) {
      console.log(displayValue);
      displayValue = Number(buttonNumber.textContent);
      displayNumber();
    } else if (displayValue.includes("clear")) {
      console.log(displayValue);
      clearDisplay();
    } else if (displayValue.includes("operand")) {
      console.log(displayValue);
      displayValue = buttonNumber.textContent;
      displayOperand();
    }
  });
});

function displayNumber() {
  if (tempValue == "Operand") {
    displayEl.textContent = "";
    console.log("Operand Not Allowed Here");
  }
  if (displayEl.textContent.length >= 9) {
    console.log(`value overload!`);
  } else {
    tempValue = "Number";
    displayEl.textContent += `${displayValue}`;
    console.log(typeof displayValue);
  }
}

function displayOperand() {
  tempValue = "Operand";
  displayEl.textContent = `${displayValue}`;
  console.log(typeof displayValue);
}

function clearDisplay() {
  displayEl.textContent = "";
  console.log("Display Cleared");
  console.clear();
}

function operate(numOne, numTwo, operate) {
  firstNumber = numOne;
  secondNumber = numTwo;
  operator = operate;

  if (operate == "add") {
    add(numOne, numTwo);
  } else if (operate == "subtract") {
    subtract(numOne, numTwo);
  } else if (operate == "multiply") {
    multiply(numOne, numTwo);
  } else if (operate == "divide") {
    divide(numOne, numTwo);
  } else {
    return `Please Enter Correct Number`;
  }
}

function add(numOne, numTwo) {
  return numOne + numTwo;
}

function subtract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}
