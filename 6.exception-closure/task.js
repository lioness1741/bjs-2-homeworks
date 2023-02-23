console.log('------------1------------');

console.log('------------1------------');

function parseCount(value) {
  let number = Number.parseFloat(value, 10);
     if(isNaN (number)) {
      throw new Error ('Невалидное значение');
    }
    return number;  
}

function validateCount(value) { 
  try { 
    return parseCount(value);
      }  catch (err) {
    return err;
      }  
}

parseCount(20);

console.log('------------2------------');

class Triangle {
  constructor(a, b, c) {    
    if((a + b < c) || (b + c < a) || (a + c < b)) {
      throw new Error ('Треугольник с такими сторонами не существует');
    }     
    this.a = a;
    this.b = b;
    this.c = c;
  }
  
  getPerimeter() {
    return (this.a + this.b + this.c).toFixed(3);
  }
  
  getArea() {
    const p = this.getPerimeter() / 2;
    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  }  catch (Error) {
    return {
      getPerimeter() {
      return 'Ошибка! Треугольник не существует';
      },
    getArea() {
      return 'Ошибка! Треугольник не существует';
    }
    }   
  }
}

getTriangle(4, 6, 2);
