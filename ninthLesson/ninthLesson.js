
//проверяем, являются ли входные данные целым числом
const isIntegerNumber=(...args)=> {
  return args.every(n=>typeof(n) == 'number' && n % 1 === 0 );
}


//1- функция mid(a,b), которая возвращает среднее значение из целых чисел a,b. Ex: mid(5,15) // 10
const mid =function(a,b){
  if(isIntegerNumber(a,b)){
    return (a+b)/2;
  }else{
    return "error";
  }
}

// 2-функция pow(x,n), которая возвращает x в степени n. Ex: pow(2,3) // 8
const pow=function(x,n){
  if(isIntegerNumber(x,n)){
    return Math.pow(x,n);
  }else{
    return "error";
  }
}

// 3 (Перепишите код через конструкцию switch и на стандарт ES6)
const questionFunc=()=>{
  let a=+prompt('a?', '');
  switch (a) {
    case 0: alert( 0 );break;
    case 1: alert( 1 );break;
    case 2:
    case 3: alert( '2,3' ); break;
    default:
      alert('Неизвестное значение: ' + a);
  }
}

/*
  * 3 функции (loopWhile(2,10), loopDoWhile(2,10), loopFor(2,10)), каждая из которых принимает 2 аргумента: начальное
  * значение и конечное. Задача: каждая функция выводит в консоль нечетные значения в указанном диапазоне (каждая
  * функция делается через определенный цикл, соответствующий названию)
  *
*/

//loopWhile
const loopWhile =function(a,b){
  if(isIntegerNumber(a,b)){
    while(a<=b){
      if(a%2!==0) { console.log(a); }
      a++;
    }
  }else{ console.log("error"); }
}

//loopDoWhile
const loopDoWhile =function(a,b){
  if(isIntegerNumber(a,b)){
    do{
      if(a%2!==0) { console.log(a); }
      a++;
    }while(a<=b);
  }else{ console.log("error"); }
}

//loopFor
const loopFor =function(a,b){
  if(isIntegerNumber(a,b)){
    for (;a <= b;a++) {
      if(a%2!==0) { console.log(a); }
    }
  }else{ console.log("error"); }
}