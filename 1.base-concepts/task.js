'use strict';
let aValue;
let bValue;
let cValue;

function solveEquation(aValue, bValue, cValue) {
 if (aValue == 0) {
    return false;
  }
  let arr = [];
  aValue = 2;
  bValue = 6;
  cValue = 2;
  let discriminant = bValue * bValue - 4 * aValue * cValue;
  console.log('Дискриминант = ' + discriminant);

  if (discriminant > 0) {
    let squareRoot1 = (-bValue + Math.sqrt(discriminant)) / (2 * aValue);
    let squareRoot2 = (-bValue - Math.sqrt(discriminant)) / (2 * aValue);

    arr.push(squareRoot1);
    arr.push(squareRoot2);
    console.log('Дискриминант > 0');
    console.log(arr);

  } else if (discriminant == 0) {
    let squareRoot = -bValue / (2 * aValue);
    arr.push(squareRoot);
    console.log('Дискриминант = 0');
    console.log(arr);
  } else {
    return false;
    console.log('Дискриминант < 0');
    console.log(arr);
  }
  return arr;
}
solveEquation(aValue, bValue, cValue);




console.log("---------------------------------");


let percent = 10;
let contribution = 0;
let amount = 50000;
let countMonths = 12;

if (isNaN(percent)) {
    let checkOut1 = 'Неверно введено значение процентов по кредиту. Проверьте данные!';
    console.log(checkOut1);
  } else if (isNaN(contribution)) {
    let checkOut2 = 'Неверно введено значение первоначального взноса по кредиту. Проверьте данные!'; 
    сonsole.log(checkOut2);
  }  else if (isNaN(amount)) {
    let checkOut3 = 'Неверно введено значение суммы кредита. Проверьте данные!';
    console.log(checkOut3);
  } else if (isNaN(countMonths)) {
    let checkOut4 = 'Неверно введено количество месяцев по кредиту. Проверьте данные!';
    console.log(checkOut4);
  } else {
    let letsCount = 'Посчитаем.';
    console.log(letsCount);
  }

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let percentPerMonth = percent / 100 / 12;
  console.log(percentPerMonth + ' процентов за пользование кредитом в месяц!');
  
  let amountBody = amount - contribution;
  let root = Math.pow((1 + percentPerMonth), countMonths);
  
  let paymentPerMonth = amountBody * (percentPerMonth + (percentPerMonth / (root - 1)));
  console.log(amountBody.toFixed(2) + ' рублей за погашение основного долга по кредиту!')
  console.log(paymentPerMonth.toFixed(2) + ' рублей платеж по кредиту за месяц!');
  
  let summAll = paymentPerMonth * countMonths;
  console.log(summAll.toFixed(2) + ' рублей общая сумма платежа по кредиту!');
  
  if (isNaN(summAll)) {
    console.log("Проверьте корректность введенных данных!");
  } else {
    return summAll;
  }
}

calculateTotalMortgage(percent, contribution, amount, countMonths);
