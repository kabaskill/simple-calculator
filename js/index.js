import { buttons } from "./buttons.js";
import { numbers } from "./buttons.js";

// Variables
const calcScreen = document.querySelector(".screen");
const calcFunctions = document.querySelector(".calc-functions");
const calcNumbers = document.querySelector(".calc-numbers");

//LOGIC
let initScreen = 0;

calcScreen.textContent = initScreen;
createButtonsOnDiv(calcFunctions, buttons);
createButtonsOnDiv(calcNumbers, numbers);

//FUNCTIONS

function createButtonsOnDiv(div, buttonsArray) {
  buttonsArray.forEach(({ symbol, style }) => {
    const button = document.createElement("button");
    button.classList.add(...style);
    button.setAttribute("type", "click");
    button.innerHTML = symbol;
    div.append(button);

    button.addEventListener("click", () => {
      // document.getElementById("button-click").play();
      numberAndResetInput(event);
    });
  });
}

function numberAndResetInput(event) {
  const target = event.target.textContent;
  const screen = calcScreen.textContent;
  const operators = [, , ...buttons];
  console.log("🚀  operators:", operators);

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
      break;

    default:
      initScreen = screen === "0" ? target : calcScreen.textContent + target;
      break;
  }

  console.log(+initScreen + 1.5);

  calcScreen.textContent = initScreen;
}
