function firstUniqSymbol(str) {
  for (let i = 0, count = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count === 1) {
      return str[i];
    }
    count = 0;
  }
}

console.log(firstUniqSymbol("kasdggkfsda"));
