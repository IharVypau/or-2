
const middleAgeBySex = (infoArray, sex) => {
  let count=0;
  let sum= infoArray.filter(val=>val.sex==sex).reduce((acc,val)=>{count++;return acc+val.age},0);
  return count!==0 ? sum/count : 0;
};

const infoAboutPersons = [{
  name: `Ivan`,
  sex: `M`,
  age: 21
},
  {
    name: `Olga`,
    sex: `W`,
    age: 19
  },
  {
    name: `Oleg`,
    sex: `M`,
    age: 27
  },
  {
    name: `Ann`,
    sex: `W`,
    age: 21
  },
  {
    name: `Alex`,
    sex: `M`,
    age: 30
  },
];


middleAgeBySex(infoAboutPersons, `M`); // 26
middleAgeBySex(infoAboutPersons, `W`); // 20