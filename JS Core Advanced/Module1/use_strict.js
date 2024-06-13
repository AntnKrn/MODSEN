"use strict";

function getQuantityVowels(str) {
  const vowels = ["а", "е", "ё", "и", "о", "у", "ы", "э", "ю", "я"];
  let arrayStr = Array.from(str);
  let quantity = 0;

  arrayStr.forEach((item) => {
    if (vowels.includes(item)) {
      quantity++;
    }
  });

  return quantity;
}

console.log(getQuantityVowels("Приветавлыдлыыыааа"));
