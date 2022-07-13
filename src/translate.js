const translate = (word) => {
  let lowercaseWord = word.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(lowercaseWord[0])) {
    return (lowercaseWord += "way");
  } else {
    let updatedWord = lowercaseWord;
    let i = 0;
    while (true) {
      if (!vowels.includes(lowercaseWord[i])) {
        updatedWord = `${updatedWord.substring(1)}${lowercaseWord[i]}`;
        i++;
      } else {
        break;
      }
    }
    return `${updatedWord}ay`;
  }
};

module.exports = translate;
