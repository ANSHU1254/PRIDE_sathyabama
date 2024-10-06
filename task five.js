document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const keys = document.querySelector('.calculator-keys');
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    keys.addEventListener('click', function(event) {
        const key = event.target;
        const value = key.value;
        if (!key.matches('button')) return;
        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                break;
            case '=':
                if (operator && previousInput && currentInput) {
                    currentInput = calculate(parseFloat(previousInput), parseFloat(currentInput), operator);
                    operator = '';
                    previousInput = '';
                }
                break;
            case 'all-clear':
                currentInput = '';
                previousInput = '';
                operator = '';
                break;
            default:
                currentInput += value;
                break;
        }
        screen.value = currentInput;
    });
    function calculate(firstNum, secondNum, operator) {
        switch (operator) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return firstNum / secondNum;
            default:
                return secondNum;
        }
    }
});