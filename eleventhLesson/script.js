<<<<<<< HEAD

=======
>>>>>>> a0b0f45d24965dfb35f3c217caec5244bf66232b
const isInArray=(arr,el)=>{
  return arr.some(function(val,index){
    return val===el;
  });
}

console.log(isInArray([1, 2, 3 , 3, `hello`], 'hello'));
console.log(isInArray([1, 2, 0 , `3`, `hello`], 3));


const modifyArr=(arr,el,newEl)=>{
  let outputArr= arr.map(function(val){
    return (val===el)?newEl:val;
  });
<<<<<<< HEAD
  if(arr.length == outputArr.length && arr.every((v,i)=>v === outputArr[i])){
=======
  if(arr.join('').length == outputArr.join('').length && arr.every((v,i)=>v === outputArr[i])){
>>>>>>> a0b0f45d24965dfb35f3c217caec5244bf66232b
    return `element ${el} not found in array ${arr}`;
  }else{
    return outputArr;
  }
}

console.log(modifyArr([1,2,3,4,5,3], 6, 'hello'));


const transformString=(str, el, newEl)=>{
  var re = new RegExp(el,'ig');
  if(re.test(str)){
    return str.replace(re, newEl);
  }else {
    return `element ${el} not found in string ${str}`;
  }
}
console.log(transformString('my sUrNaMes is Ivanov','SURNAMES', 'name') );
<<<<<<< HEAD
console.log(transformString('naMe is Alex, name', 'name','coolName'));
=======
console.log(transformString('naMe is Alex, name', 'name','coolName'));
>>>>>>> a0b0f45d24965dfb35f3c217caec5244bf66232b
