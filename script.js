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
const buttonEl = document.querySelectorAll(".key button");

buttonEl.disable = true;

buttonEl.forEach(function (buttonNumber) {
  buttonNumber.addEventListener("click", function () {
    displayFunction(buttonNumber);
    CalculateFunction(buttonNumber);
  });
});

// Calculate The Number
function CalculateFunction(buttonNumber) {
  const buttonValue = Array.from(buttonNumber.classList);

  if (result > 0) {
    console.log("state two");
    if (buttonValue.includes("number") && count == 0) {
      console.log("state two number times");
      tempNum = displayEl.textContent;
      secondNumber = tempNum;
    } else if (buttonValue.includes("operand") && count == 0) {
      console.log("operand on state two");
      count += 2;
      operator = buttonValue[2];
      console.log(`The operator is ${operator}, Go To Result`);
    }
  }

  if (result == 0) {
    console.log("state one");
    if (buttonValue.includes("number") && count == 0) {
      tempNum = displayEl.textContent;
      firstNumber = tempNum;
    } else if (buttonValue.includes("operand") && count == 0) {
      count++;
      operator = buttonValue[2];
      console.log(`The operator is ${operator}, Change To Second Number`);
    } else if (buttonValue.includes("number") && count == 1) {
      tempNum = displayEl.textContent;
      secondNumber = tempNum;
    } else if (buttonValue.includes("operand") && count == 1) {
      count++;
    }
  }

  if (buttonValue.includes("equals") || count >= 2) {
    console.log(`state equals`);
    result = operate(firstNumber, secondNumber, operator);
    displayEl.textContent = result;

    count = 0;
    tempNum = 0;
    firstNumber = result;
    secondNumber = 0;
    operator = null;
  }

  console.log(`Your first number is ${firstNumber} and tempNum is ${tempNum}`);
  console.log(
    `Your second number is ${secondNumber} and tempNum is ${tempNum}`
  );
  console.log(`Your count number is ${count}`);
  console.log(`Your result is ${result}`);
}

// Display The Number
function displayFunction(buttonNumber) {
  displayValue = buttonNumber.textContent;
  const buttonValue = Array.from(buttonNumber.classList);

  if (displayState == "Operand") {
    displayState = "Number";
    displayEl.textContent = "";
  }

  if (buttonValue.includes("number")) {
    displayNumber();
  } else if (buttonValue.includes("operand") && displayState == "Number") {
    displayOperand();
  } else if (buttonValue.includes("clear")) {
    clearDisplay();
  } else if (buttonValue.includes("equals")) {
    console.log("Equals Pressed");
  }

  console.log(displayState);
}

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
  count = 0;
  result = 0;

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
// 3. Your calculator should not evaluate more than a single pair of numbers at a time.

// 4. Pressing = before entering all of the numbers or an operator could cause problems!
// 5. Pressing “clear” should wipe out any existing data.. make sure the user is really starting fresh after pressing “clear” (Complete the algorithm)
// 6. Display a snarky error message if the user tries to divide by 0… and don’t let it crash your calculator!
// 7. Should round answers with long decimals so that they don’t overflow the screen.
