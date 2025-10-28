const word = 'academind!';

function findFirstRep(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i];
      }
    }
  }
}

console.log(findFirstRep(word));
