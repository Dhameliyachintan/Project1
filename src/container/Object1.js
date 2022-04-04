import React from 'react'

function Object1() {
let obj1 = {fname:'Amit',age:18};
let obj2 = {lname:'parth',age:20};

//copy
let obj3 = {...obj1};
console.log(obj3);

//concate
let obj4 = {...obj1,...obj2}; 
// let obj5 = {...obj1,...obj2};
console.log(obj4);

//concate
let obj5 = {fname:'Amit',age:18,city:'surat'};
let obj6 = {fname:'red',age:18,city:'surat'};
let obj7 = {fname:'red',age:18,city:'surat'};
//   console.log(obj5);

return (
    <div>

    </div>
);

}

export default Object1;