// Inputs
let operand1Input = document.querySelector('[data-js="operand1"]');
let operand2Input = document.querySelector('[data-js="operand2"]');

const resultBox = document.querySelector('[data-js="result-box"]');

const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
const sqRootButton = document.querySelector('[data-js="sqroot"]');
const logButton = document.querySelector('[data-js="log"]');

//LOGIC

addButton.addEventListener("click", () => simpleOperations("add"));
subtractButton.addEventListener("click", () => simpleOperations("sub"));
multiplyButton.addEventListener("click", () => simpleOperations("mult"));
divideButton.addEventListener("click", () => simpleOperations("div"));

exponentButton.addEventListener("click", () => simpleOperations("exp"));
moduloButton.addEventListener("click", () => simpleOperations("mod"));
sqRootButton.addEventListener("click", () => simpleOperations("sqrt"));
logButton.addEventListener("click", () => simpleOperations("log"));

//FUNCTIONS

function simpleOperations(operator) {
  x = Number(operand1Input.value);
  y = Number(operand2Input.value);

  let result;
  switch (operator) {
    case "add":
      result = x + y;
      break;

    case "sub":
      result = x - y;
      break;

    case "mult":
      result = x * y;
      break;

    case "div":
      result = x / y;
      break;

    case "exp":
      result = x ** y;
      break;

    case "mod":
      result = x % y;
      break;

    case "sqrt":
      result = `${Math.sqrt(x)} and ${Math.sqrt(y)}`;
      break;

    case "log":
      result = Math.log(x) / Math.log(y);
      break;
  }

  resultBox.textContent = "Result: " + result;
}
