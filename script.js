let display = document.getElementById('display');
let menuButton = document.getElementById('menuButton');
let subMenu = document.getElementById('subMenu');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';

menuButton.addEventListener('click', () => {
  subMenu.classList.toggle('hidden');
});

function appendNumber(number) {
  if (display.innerText === '0' || currentOperation) {
    display.innerText = '';
  }
  display.innerText += number;
}

function setOperation(operation) {
  if (display.innerText !== '') {
    firstOperand = display.innerText;
    currentOperation = operation;
    display.innerText = '';
  }
}

function calculate() {
  if (firstOperand && currentOperation) {
    secondOperand = display.innerText;
    let result;
    switch (currentOperation) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
    }
    display.innerText = result;
    firstOperand = '';
    currentOperation = '';
  }
}

function clearDisplay() {
  display.innerText = '0';
  firstOperand = '';
  secondOperand = '';
  currentOperation = '';
}

function switchMode(mode) {
  if (mode === 'scientific') {
    alert("Scientific Mode selected: Additional functions will be available soon.");
  } else if (mode === 'unit') {
    alert("Unit Conversion Mode selected: Conversion between units will be added.");
  } else if (mode === 'currency') {
    alert("Currency Conversion Mode selected: Currency conversion will be implemented.");
  }
}
