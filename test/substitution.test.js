// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution")


describe("substitution", () => {
    it("should be a function", () => {
        expect(substitution).to.be.a("function");
    });
    it("should return an encoded word, given a specific key", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const expected = "dliw";
        const actual = substitution("word", alphabet);
        expect(actual).to.equal(expected);
    });
    it("should keep spaces and special symbols while ignoring capitalization", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "Hello Peeps!";
        const expected = "svool kvvkh!";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should return 'false' if the alphabet parameter provided is less than 26 characters", () => {
        const alphabet = "zyxwvutsrqponmlkihgfedcba";
        const input = "This sentence doesn't matter";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if there are duplicate characters in the alphabet parameter", () => {
        const alphabet = "zyxwvutsrqppnmlkjihgfedcba";
        const input = "This sentence doesn't matter";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should accept special characters as a part of the alphabet parameter", () => {
        const alphabet = "zyxwvutsrqp!nml$jihgfedcba";
        const input = "Hello Peeps.";
        const expected = "sv!!l $vv$h.";
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    });
    it("should decode a message when the encode parameter is set to false, ignoring spaces, symbols, and capatalization", () => {
        const alphabet = "zyxwvutsrqponmlkjihgfedcba";
        const input = "SVOOL kvvkh!";
        const expected = "hello peeps!";
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    });
});