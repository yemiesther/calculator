
const operator = prompt('Enter operator ( either +, -, * or / ): ');
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}
alert(result);






// let result;

// const operator = prompt('Enter operator ( either +, -, * or / ): ');

// const number1 = parseFloat(prompt('Enter first number: '));
// const number2 = parseFloat(prompt('Enter second number: '));

// switch(operator) {
//     case '+':
//          result = number1 + number2;
//         break;

//     case '-':
//          result = number1 - number2;
//         break;

//     case '*':
//          result = number1 * number2;
//         break;

//     case '/':
//          result = number1 / number2;
//         break;

//     default:+++
//         break;
// }
// alert(result);