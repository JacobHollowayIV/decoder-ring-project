// Write your tests here!
const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius", () => {
    it("should be a function", () => {
        expect(polybius).to.be.a("function");
    });
    it("should convert a word into a string numbers, ignoring capitalization", () => {
        const input = "perfection";
        const expected = "53512412513144424333";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should keep any spaces/symbols in a sentence provided as input", () => {
        const input = "I love my family!";
        const expected = "42 13431551 2345 121123421345!";
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    });
    it("should convert a string of numbers back into letters, blending i/j as one letter", () => {
        const input = "42 13431551 2345 121123421345!"
        const expected = "(i/j) love my fam(i/j)ly!";
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    });
    it("should return 'false' during decoding if the number of characters excluding spaces are not even", () => {
        const input = "42 1431551 2345 121123421345"
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
});