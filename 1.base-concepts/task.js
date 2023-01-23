'use strict';

function solveEquation(aValue, bValue, cValue) {
  if (isNaN(aValue) || isNaN(bValue) || isNaN(cValue)) {
  console.log('Данные введены неверно. Проверьте!');
    return;
  }
 

  if (aValue == 0) {
    return;
  }
  let arr = [];

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
    console.log('Дискриминант < 0');
    console.log(arr);
  }
  return arr;
}
solveEquation(2, 4, 8);






function calculateTotalMortgage(percent, contribution, amount, countMonths) {

if (isNaN(percent)) {
  let checkOut1 = 'Неверно введено значение процентов по кредиту. Проверьте данные!';
  console.log(checkOut1);
  return;
}
else if (isNaN(contribution)) {
  let checkOut2 = 'Неверно введено значение первоначального взноса по кредиту. Проверьте данные!';
  сonsole.log(checkOut2);
  return;
}
else if (isNaN(amount)) {
  let checkOut3 = 'Неверно введено значение суммы кредита. Проверьте данные!';
  console.log(checkOut3);
  return;
}
else if (isNaN(countMonths)) {
  let checkOut4 = 'Неверно введено количество месяцев по кредиту. Проверьте данные!';
  console.log(checkOut4);
  return;
}
else {
  let letsCount = 'Посчитаем.';
  console.log(letsCount);
}


  
  let percentPerMonth = percent / 100 / 12;
  console.log(percentPerMonth + ' процентов за пользование кредитом в месяц!');

  let amountBody = amount - contribution;
  let root = Math.pow((1 + percentPerMonth), countMonths);

  let paymentPerMonth = amountBody * (percentPerMonth + (percentPerMonth / (root - 1)));
  console.log(amountBody.toFixed(2) + ' рублей за погашение основного долга по кредиту!')
  console.log(paymentPerMonth.toFixed(2) + ' рублей платеж по кредиту за месяц!');

  let summAll = paymentPerMonth * countMonths;
  console.log(summAll.toFixed(2) + ' рублей общая сумма платежа по кредиту!');

  if (isNaN(summAll));
  return;
}

calculateTotalMortgage(10, 0, 50000, 12);
