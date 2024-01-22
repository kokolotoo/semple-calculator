function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
 
function clearDisplay() {
    document.getElementById('display').value = '';
}
 
function calculateResult() {
    const inputField = document.getElementById('display');
    const expression = inputField.value;
  
    try {
      const result = new Function('return ' + expression)();
      if (Number.isInteger(result)) {
         inputField.value = result.toString();
      } else {
         inputField.value = result.toFixed(2);
      }
    } catch (error) {
     inputField.value = 'Error';
    }
  }
     
document.addEventListener("DOMContentLoaded", function() {
  // При зареждане на страницата по подразбиране, правим всички бутон с клас "inactive" неактивни
  toggleButtons();
});
 
const display = document.getElementById('display')
    display.style.backgroundColor = 'grey';
 
    function onOffDisplay() {
    if (display.style.backgroundColor === 'grey') {
        display.style.backgroundColor = 'aquamarine';
    } else {
        display.style.backgroundColor = 'grey';
    }
    toggleButtons();
    clearDisplay()
}
 
function toggleButtons() {
    const buttons = document.querySelectorAll('.inactive');
        buttons.forEach(button => {
        button.disabled = !button.disabled;
    });
}
 
