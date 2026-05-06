function operations(num1, num2, symbol) {
    let firstNumber = num1;
    let secondNumber = num2;
    let operator = symbol.trim();
    let result = 0;
    switch (operator) {
        case '+':
        case '-':
        case '*':
            if (operator === '+')
                result = firstNumber + secondNumber;
            else if (operator === '-')
                result = firstNumber - secondNumber;
            else result = firstNumber * secondNumber;

            let evenOrOdd = result % 2 === 0 ? 'even' : 'odd';
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - ${evenOrOdd}`);
            break;
        case '/':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`);
            } else {
                result = firstNumber / secondNumber;
                console.log(`${firstNumber} / ${secondNumber} = ${result.toFixed(2)}`)
            }
            break;
        case '%':
            if (secondNumber === 0) {
                console.log(`Cannot divide ${firstNumber} by zero`)
            } else {
                result = firstNumber % secondNumber;
                console.log(`${firstNumber} % ${secondNumber} = ${result}`)
            }
            break;
    }
}
operations(10, 12, "+");