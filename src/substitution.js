// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  alphArray = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

  function substitution(input, alphabet, encode = true) {
    const charCheck = {}

    if (!alphabet || alphabet.length !== 26) return false;
    for (let i = 0; i < alphabet.length; i++){
      if (charCheck[alphabet[i]] === true) {
        return false; 
      } else {
        charCheck[alphabet[i]] = true;
      }
    }

    const substKey = {};
    const codeCracker = [];
    const codeArray = alphabet.split('');

    if (encode === true) {
      for (let i = 0; i < alphabet.length; i++) {
        substKey[alphArray[i]]  = codeArray[i];
      };
  } else {
    for (let i = 0; i < alphabet.length; i++) {
      substKey[codeArray[i]]  = alphArray[i];
    };
  }
    for (let i = 0; i < input.length; i++) {
      codeCracker[i] = substKey[input[i].toLowerCase()];
      if (!codeCracker[i]) codeCracker[i] = input[i];
    }
    return codeCracker.join('');

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
