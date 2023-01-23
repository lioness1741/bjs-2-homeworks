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




function summElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  return (arr.reduce((sum, current) => sum + current, 0));
}

console.log(summElementsWorker(10, 10, 11, 20, 10));


function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  return (Math.max.apply(null, arr) - Math.min.apply(null, arr));
}

console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));


function differenceEvenOddWorker(...arr) {

  if (arr.length === 0) {
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
  return (sumEvenElement - sumOddElement);
}

console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));


function averageEvenElementsWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    }
  }
  return (sumEvenElement / countEvenElement);
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9));






const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];


function makeWork(arrOfArr, func) {

  let maxWorkerResult = -Infinity;

 
  for (let i = 0; i < arrOfArr.length; i++) {
    const res = func(...arrOfArr[i]);

    if (res > maxWorkerResult) {
      maxWorkerResult = res;
    }
    console.log(maxWorkerResult);
  }
  return maxWorkerResult;
}

makeWork([[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]], averageEvenElementsWorker);