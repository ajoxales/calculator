// Get the display element
const display = document.querySelector(".display");

// Get all the buttons
const buttons = Array.from(document.querySelectorAll(".buttons button"));

// Button function for Toggle Dark Mode
function darkMode() {
  document.body.classList.toggle("dark-mode");

  var calDark = document.getElementsByClassName("container");
  calDark[0].classList.toggle("cal-dark");

  var calDarkIn = document.getElementsByClassName("display");
  calDarkIn[0].classList.toggle("cal-dark-input");

  var darkFooter = document.getElementsByClassName("footer");
  darkFooter[0].classList.toggle("dark-footer");

}

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "AC") {
      // Clear the display
      display.value = "";
    } else if (value === "DEL") {
      // Delete the last character
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      // Evaluate the expression
      try {
        const result = eval(display.value);
        display.value = isFinite(result) ? result : 'Invalid';
      } catch (error) {
        display.value = "Error";
      }
    } else {
      // Append the clicked button value to the display
      display.value += value;
    }
  });
});
