let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
}
function calculateSquare() {
    let number = parseFloat(displayValue);
    let square = number * number;
    document.getElementById('display').value = square;
    displayValue = '';
}