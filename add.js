'use strict';
const str = document.querySelector('.text').textContent;
let regexp = /\B'|'\B/g;
let replaceStr = str.replace(regexp, "\"");

console.log(replaceStr);





