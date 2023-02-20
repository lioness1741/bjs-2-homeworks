class PrintEditionItem {
  constructor(name, releaseDate,
    pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
  }

  set state(num) {
    if (num < 0) {
      this._state = 0;
    } else if (num > 100) {
      this._state = 100;
    } else {
      this._state = num;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate,
    pagesCount, type) {
    super(name, releaseDate,
      pagesCount, type);
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(releaseDate,
    pagesCount, type, author) {
    super(releaseDate,
      pagesCount, type);
    this.type = "book";
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(releaseDate,
    pagesCount, type, author) {
    super(releaseDate,
      pagesCount, type, author);
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(releaseDate,
    pagesCount, type, author) {
    super(releaseDate,
      pagesCount, type, author);
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(releaseDate,
    pagesCount, type, author) {
    super(releaseDate,
      pagesCount, type, author);
    this.type = "detective";
  }
}

console.log('-------------------');

const sherlock = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
);

console.log(sherlock.releaseDate); //2019
console.log(sherlock.state); //100
sherlock.fix();
console.log(sherlock.state); //100

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15

console.log('---------------2---------------');

class Library {
  constructor(name, books) {
    this.name = name;
    this.books = [];
  }

addBook(book) {  
  if (book.state > 30) {
    return this.books.push(book);
  } 
}

findBookBy(type, value) {
  let findBook = this.books.find(book => book[type] === value);
  if(typeof findBook === 'object') {
    return findBook;
  }  else {
  return null;
  }
}

  giveBookByName(bookName) {
    let giveBoookBy = this.books.find(book => book.name === bookName);
        if (typeof giveBoookBy === 'object') {
            let index = this.books.indexOf(giveBoookBy);
            this.books.splice(index, 1);
            return giveBoookBy;
        }  else {
          return null;
        }
  }
}

console.log('-------------------');

  const library = new Library("Библиотека имени Ленина");

library.addBook(
 new DetectiveBook(
   "Артур Конан Дойл",
   "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
   2019,
   1008
 )
);
library.addBook(
 new FantasticBook(
   "Аркадий и Борис Стругацкие",
   "Пикник на обочине",
   1972,
   168
 )
);
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


console.log('--------------3-------------');


class Student {
  constructor(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
  }

   addMark(mark, subject) {
    if(mark < 2 || mark > 5) {
      return;
    }
       if (this[subject] === undefined) { 
          this[subject] = [];
          this[subject].push(mark); 
        } else {
          this[subject].push(mark);
        }
  }
 
  getAverageBySubject(subject) {
    if (this[subject] === undefined) {
         return 'Предмет не существует.';
        }
        else { 
          let sumSum = (this[subject].reduce ((acc, i) => acc + i))/this[subject].length
            return sumSum;  
        }  
  }

  getAverage() {
    let sum = 0;
    let subjectsSum = 0;

    for (let properties in this) {
      if ((properties !== 'name') && (properties !== 'gender') && (properties !== 'age')) {
        sum += this.getAverageBySubject(properties);
        subjectsSum += 1;
      }
      return Number((sum / subjectsSum).toFixed(1));
      
    }
  }  

  }


console.log('-------------------------');

  const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4
