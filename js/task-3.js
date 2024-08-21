"use strict";

function getElementWidth(content, padding, border) {
  return parseFloat(content) + 2 * (parseFloat(padding) + parseFloat(border));
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
