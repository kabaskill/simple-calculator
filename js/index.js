import { buttons } from "./buttons.js";
import { numbers } from "./buttons.js";

// Variables
const calcScreen = document.querySelector(".screen");
const calcFunctions = document.querySelector(".calc-functions");
const calcNumbers = document.querySelector(".calc-numbers");

//LOGIC
let initScreen = 0;
let buffer = 0;
let operation = "";

calcScreen.textContent = 0;
createButtonsOnDiv(calcFunctions, buttons);
createButtonsOnDiv(calcNumbers, numbers);

//FUNCTIONS

function createButtonsOnDiv(div, buttonsArray) {
  buttonsArray.forEach(({ name, symbol, style, op }) => {
    const button = document.createElement("button");
    button.classList.add(...style);
    button.setAttribute("type", "click");
    button.innerHTML = symbol;
    div.append(button);

    button.addEventListener("click", () => {
      // document.getElementById("button-click").play();
      if (!op) {
        numberAndResetInput(event);
      } else {
        mathOperations(name);
      }
    });
  });
}

function numberAndResetInput(event) {
  const target = event.target.textContent;
  const screen = calcScreen.textContent;

  switch (target) {
    case "-/+":
      initScreen = -initScreen;
      break;

    case ".":
      initScreen = screen.includes(".") ? screen : screen + ".";
      break;

    case "←":
      screen.length > 1 ? (initScreen = screen.slice(0, -1)) : (initScreen = 0);
      break;

    case "C":
      initScreen = 0;
      buffer = 0;
      break;

    default:
      initScreen = screen === "0" ? target : calcScreen.textContent + target;
      break;
  }

  // console.log(+initScreen + 1.5);

  calcScreen.textContent = initScreen;
}

function mathOperations(name) {
  console.log("🚀  initScreen:", initScreen);
  console.log("🚀  buffer:", buffer);

  switch (name) {
    case "sqrt":
      calcScreen.textContent = Math.sqrt(+initScreen);
      initScreen = calcScreen.textContent;
      break;

    case "square":
      calcScreen.textContent = +initScreen * initScreen;
      initScreen = calcScreen.textContent;
      break;

    case "equals":
      equalsButton(operation, buffer);
      break;

    default:
      buffer = initScreen;
      calcScreen.textContent = "0";
      operation = name;
      break;
  }
}

function equalsButton(operation, buffer) {
  switch (operation) {
    case "add":
      calcScreen.textContent = +buffer + +initScreen;
      console.log("🚀  initScreen EQUAL:", initScreen);
      console.log("🚀  buffer EQUAL:", buffer);
      break;

    case "sub":
      calcScreen.textContent = +buffer - +initScreen;
      break;

    case "mul":
      calcScreen.textContent = +buffer * +initScreen;
      break;

    case "div":
      calcScreen.textContent = +buffer / +initScreen;
      break;

    case "exp":
      calcScreen.textContent = (+buffer) ** +initScreen;
      break;
  }
}
