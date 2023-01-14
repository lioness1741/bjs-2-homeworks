function getArrayParams(...arr) {
  let min;
  let max;
  let sum;

  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);

  let result = arr.reduce((sum, current) => sum + current, 0);
  let sumMiddle = result / arr.length;
  let avg = Number(sumMiddle.toFixed(2));

  let finalAnswer = { min: min, max: max, avg: avg };
  console.log(finalAnswer);
  return finalAnswer;

}

getArrayParams(-99, 99, 10);


console.log('-----------------------------------------------')
console.log('-----------------------------------------------')


function summElementsWorker(...arr) {

  let hasOneNumber = arr.some(arr => {
    return arr;
  })
  if (hasOneNumber == false) {
    return 0;
  }
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}

console.log(summElementsWorker(10, 10, 11, 20, 10));

console.log('-----------------------------------------------')

function differenceMaxMinWorker(...arr) {

  let hasOneNumber = arr.some(arr => {
    return arr;
  })
  if (hasOneNumber == false) {
    return 0;
  }

  let min;
  let max;
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  let difference = max - min;

  return difference;
}

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

console.log('-----------------------------------------------')

function differenceEvenOddWorker(...arr) {

  let hasOneNumber = arr.some(arr => {
    return arr;
  })
  if (hasOneNumber == false) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  let difference = sumEvenElement - sumOddElement;
  return difference;
}

console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));

console.log('-----------------------------------------------')

function averageEvenElementsWorker(...arr) {

  let hasOneNumber = arr.some(arr => {
    return arr;
  })
  if (hasOneNumber == false) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;

    } else {
      continue;
    }
  }

  let divisionMiddle = sumEvenElement / countEvenElement;
  return divisionMiddle;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));



console.log('-----------------------------------------------')



const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];


function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;
  let resArrOfArr;
  let arrMax = [];
  console.log('----- ------- ------ ------- -----')
  for (let i = 0; i < arr.length; i++) {
    arrOfArr = arr[i];
    resArrOfArr = [];
    for (let j = 0; j < arrOfArr.length; j++) {
      resArrOfArr.push(arrOfArr[j]);
      differenceEvenOddWorker(...arr[i]);
    }
    arrMax.push(differenceEvenOddWorker(...arr[i]));
  }

  for (let i = 0; i < arrMax.length; i++) {
    if (arrMax[i] >= maxWorkerResult) {
      maxWorkerResult = arrMax[i];
    } else {
      continue;
    }
  }
  console.log(maxWorkerResult);
  console.log('++++++++++++++++++')
  return resArrOfArr;

}

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], summElementsWorker);