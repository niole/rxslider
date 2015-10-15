//var Person = require("babel!./Person.js").default;
//new Person();
const $ = require('jquery');

$(document).ready(() => {
 let niole = {
    forEach: (A, action) => {
      for (let i=0; i<A.length; i++) {
        action(A[i]);
      }
  }
 };
});
