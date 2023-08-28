let firstValue;
let secondValue;
let operator;

function operate(fv, sv, op) {
  if (op == "+") {
    sum(fv + sv);
  }
}

function sum(numOne, numTwo) {
  return numOne + numTwo;
}

function substract(numOne, numTwo) {
  return numOne - numTwo;
}

function multiply(numOne, numTwo) {
  return numOne * numTwo;
}

function divide(numOne, numTwo) {
  return numOne / numTwo;
}
