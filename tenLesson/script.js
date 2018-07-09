
const count=(str,ind)=>str.split(ind).length-1;
const powX=(x,n)=>Math.pow(Math.round(x),Math.round(n));
const checkingComb=(str,comb)=>str.toLowerCase().indexOf(comb.toLowerCase())>0;


//console.log(count(`we are future developers`,`e`));
//console.log(powX(2.5,3.3));
//console.log(checkingComb(`my sUrNaMe is Ivanov`,`SURNAME`));
