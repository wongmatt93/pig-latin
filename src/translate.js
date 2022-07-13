const translate = (word) => {
  let lowercaseWord = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(lowercaseWord[0])) {
    return `${lowercaseWord}way`;
  } else {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(lowercaseWord[i])) {
        const consonants = lowercaseWord.slice(0, i);
        const middle = lowercaseWord.slice(i, word.length);
        return `${middle}${consonants}ay`;
      }
    }
  }
};

module.exports = translate;
