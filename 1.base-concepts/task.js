'use strict'

function solveEquation(a, b, c) {
  
  let D;
    let root = [];
    D = Math.pow(b,2) - 4 * a * c;
    if (D < 0) {
    ;       
    } else if (D == 0) {
        root[0] = (-b + Math.sqrt(D))/(2 * a);
        // console.log (D);
    } else if (D > 0) {
        root[0] = (-b + Math.sqrt(D))/(2 * a);
        // console.log(root[0]);
        root[1] = (-b - Math.sqrt(D))/(2 * a);
        // console.log(root[1]);
    }
    return root;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
