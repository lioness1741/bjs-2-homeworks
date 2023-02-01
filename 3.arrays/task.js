function compareArrays(arr1, arr2) {

  return (arr1.length === arr2.length) && (arr1.every((element, index) => element === arr2[index]));

}


compareArrays([8, 9], [6]); 
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); 
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); 
compareArrays([1, 2, 3], [2, 3, 1]); 
compareArrays([8, 1, 2], [8, 1, 2]); 




const people = [
  { firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской" },
  { firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской" },
  { firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский" },
  { firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский" },
  { firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский" },
  { firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский" },
  { firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской" },
  { firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской" },
  { firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской" },
  { firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский" },
  { firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской" },
  { firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской" },
  { firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской" },
  { firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской" },
];



function getUsersNamesInAgeRange(users, gender) {

  return users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, userAge, index, arr) => acc + userAge / arr.length, 0);
}


console.log(getUsersNamesInAgeRange(people, "мужской")); 
console.log(getUsersNamesInAgeRange(people, "женский")); 
console.log(getUsersNamesInAgeRange([], "женский")); 
console.log(getUsersNamesInAgeRange(people, "инопланетянин")); 

