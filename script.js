function appendToDisplay(value) {
    document.getElementById('display').value += value;
}
 
function clearDisplay() {
    document.getElementById('display').value = '';
}
 
function calculateResult() {
 const result = eval(document.getElementById('display').value);
 document.getElementById('display').value = result;
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
 