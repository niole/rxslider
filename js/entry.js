//var Person = require("babel!./Person.js").default;
//new Person();
const $ = require('jquery');

$(document).ready(() => {

  class Dash {

      constructor(data) {
          this.data = data;
      }

      forEach(A, action) {
        for (let i=0; i<A.length; i++) {
          action(A[i]);
        }
      }

      map(A, action) {
        let res = [];
        for (let i=0; i<A.length; i++) {
          res.push(action(A[i]));
        }
        return res;
      }
  }

  let d = new Dash([1,2,3]);
  let result = d.map(d.data, (D) => { return D+5; });
});
