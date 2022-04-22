const firstNumber = String(prompt('Введите первое число'));
const secondNumber = String(prompt('Введите первое число'));
const sumOfNum = +firstNumber + +secondNumber;
const diffOfNum = firstNumber - secondNumber;
const multOfNum = firstNumber * secondNumber;
const divOfNum = firstNumber / secondNumber;




alert('Calculations are finished!');
alert('Sum: ' + firstNumber + ' + ' + secondNumber + " = " + sumOfNum);
alert('Diff: ' + firstNumber + ' - ' + secondNumber + " = " + diffOfNum);
alert('Multi: ' + firstNumber + ' * ' + secondNumber + " = " + multOfNum);
alert('Div: ' + firstNumber + ' / ' + secondNumber + " = " + divOfNum);