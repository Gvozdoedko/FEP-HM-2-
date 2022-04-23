const firstNumber = String(prompt('Введите первое число'));
const secondNumber = String(prompt('Введите первое число'));
const sumOfNum = +firstNumber + +secondNumber;
const diffOfNum = firstNumber - secondNumber;
const multOfNum = firstNumber * secondNumber;
const divOfNum = firstNumber / secondNumber;


alert(`Calculations are finished!
Sum:  ${firstNumber} + ${secondNumber}  = ${sumOfNum}
Diff: ${firstNumber} - ${secondNumber}  = ${diffOfNum}
Multi: ${firstNumber} * ${secondNumber}  = ${multOfNum}
Div: ${firstNumber} / ${secondNumber}  = ${diffOfNum}`);
