// Get the display element
const display = document.querySelector('.display');

// Get all the buttons
const buttons = Array.from(document.querySelectorAll('.buttons button'));

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'AC') {
      // Clear the display
      display.value = '';
    } else if (value === 'DEL') {
      // Delete the last character
      display.value = display.value.slice(0, -1);
    } else if (value === '=') {
      // Evaluate the expression
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      // Append the clicked button value to the display
      display.value += value;
    }
  });
});