
"use strict";

const requestMsg="Ввведите ваше имя";
const errorMsg="Вы не ввели имя";

const name=prompt(requestMsg);
if(name.length>=2){
  alert(name);
}else{
  alert(errorMsg);
}
