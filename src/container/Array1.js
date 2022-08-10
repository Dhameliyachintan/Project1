import React from 'react';

    // ------------------Array---------------------//
function Array1() {

   let arr1 =[10,20,30];
      let arr2 =[10,20];
      
      {/* //copyarry */}
      let arr3 = [...arr1];
      console.log(arr3);

      {/* //concate */}
      let arr4 = [...arr1,...arr2];
      console.log(arr4);

      {/* //mergine */}
      let arr5 = [99,...arr4,100];
      console.log(arr5);

      {/* //destructuring */}
      let arr6 = ['Amit',"Mayur"];
      let[fname,lname] = arr6;
      console.log(arr6[0]);
      console.log(fname);
      console.log(lname);
}

export default Array1;