//var Person = require("babel!./Person.js").default;
//new Person();
const $ = require('jquery');

$(document).ready(() => {
  (() => console.log('start'))()

 let ArrFuncs = {
    forEach: (A, action) => {
      for (let i=0; i<A.length; i++) {
        action(A[i]);
      }
  }
 };

 ArrFuncs.forEach([1,2,3], (x) => {
   console.log(2*x);
 });

});
