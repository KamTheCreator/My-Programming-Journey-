let runningTotal = 0;  // Holds the ongoing total for calculations
let buffer = "0";     // Current number being entered or displayed
let previousOperator; // Last operator used
const screen = document.querySelector(".screen"); // Reference to the screen element to display numbers

// Main function called when any button is clicked
function buttonClick(value) {
  if (isNaN(parseInt(value))) { // Check if the button clicked is not a number
    handleSymbol(value);       // Handle as a symbol (operator or control)
  } else {
    handleNumber(value);       // Handle as a number
  }
  rerender();                  // Update the display
}

// Handle number button click
function handleNumber(value) {
  if (buffer === "0") {
    buffer = value;            // Replace initial zero with the new number
  } else {
    buffer += value;           // Append new number to the buffer
  }
}

// Handle math operations (+, -, ×, ÷)
function handleMath(value) {
  if (buffer === "0") {
    // Do nothing if buffer is zero
    return;
  }

  const intBuffer = parseInt(buffer); // Convert buffer to an integer
  if (runningTotal === 0) {
    runningTotal = intBuffer; // Set running total if it is zero
  } else {
    flushOperation(intBuffer); // Perform the previous operation
  }

  previousOperator = value;   // Store the current operator
  buffer = "0";               // Reset buffer
}

// Perform the arithmetic operation based on the previous operator
function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
  }
}

// Handle non-number button clicks
function handleSymbol(value) {
  switch (value) {
    case "C":                   // Clear everything
      buffer = "0"; 
      runningTotal = 0;
      break;
    case "=":                   // Calculate result
      if (previousOperator === null) {
        // Need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer)); // Perform the last operation
      previousOperator = null;
      buffer = +runningTotal;   // Display result
      runningTotal = 0;         // Reset running total
      break;
    case "←":                  // Handle backspace
      if (buffer.length === 1) {
        buffer = "0";          // If buffer has only one character, reset to zero
      } else {
        buffer = buffer.substring(0, buffer.length - 1); // Remove last character
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);        // Handle math operation
      break;
  }
}

// Update the display with the current buffer
function rerender() {
  screen.innerText = buffer;
}

// Initialize the calculator by setting up the event listener
function init() {
  document
    .querySelector(".class-buttons") // Attach event listener to all buttons
    .addEventListener("click", function (event) {
      buttonClick(event.target.innerText); // Call buttonClick on button click
    });
}

init(); // Initialize the calculator
