// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphCode = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  }

  const numCode = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    10: "j",
    11: "k",
    12: "l",
    13: "m",
    14: "n",
    15: "o",
    16: "p",
    17: "q",
    18: "r",
    19: "s",
    20: "t",
    21: "u",
    22: "v",
    23: "w",
    24: "x",
    25: "y",
    26: "z",
  }

  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;
    let sentenceInNum = []

    for (let i = 0; i < input.length; i++) {
      encode === true ? sentenceInNum[i] = alphCode[input[i].toLowerCase()] + shift : sentenceInNum[i] = alphCode[input[i].toLowerCase()] - shift;
      if (sentenceInNum[i] > 26) sentenceInNum[i] -= 26;
      if (sentenceInNum[i] < 1) sentenceInNum[i] += 26;
      if (!sentenceInNum[i]) sentenceInNum[i] = input[i];
    }

    const crackedSentence = sentenceInNum.map((number) => {
      return !numCode[number] ? number : numCode[number];
    })
    return crackedSentence.join('');

    
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
