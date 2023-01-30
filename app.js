'use strict';
const text = document.querySelector('.text');
console.log(text.textContent);

const quoteBetween = /(([a-z])(\')(\.))/gm;
text.innerHTML = text.textContent.replace(quoteBetween, '$2"$4');
const quoteAhead = /((\')([A-Z]))/gm;
text.innerHTML = text.textContent.replace(quoteAhead, '"$3');
const quoteEnd = /((\?|\!)(\'))/gm;
text.innerHTML = text.textContent.replace(quoteEnd, '$2"');