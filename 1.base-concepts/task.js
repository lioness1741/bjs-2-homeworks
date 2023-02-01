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

   if ((percent < 0 ||  contribution < 0 || amount < 0 || countMonths < 0 ) || 
    (isNaN(percent) === true || isNaN(contribution) === true || isNaN(amount) === true || isNaN(countMonths) === true)) {
        return "Ошибка данные введены неверно";
    }
 
  let percentPerMonth = percent / 100 / 12;
  

  let amountBody = amount - contribution;
  let root = Math.pow((1 + percentPerMonth), countMonths);

  let paymentPerMonth = amountBody * (percentPerMonth + (percentPerMonth / (root - 1)));

  return (paymentPerMonth * countMonths).toFixed(2);
}


calculateTotalMortgage(10, 0, 50000, 12);



