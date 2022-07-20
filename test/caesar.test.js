// Write your tests here!
const {expect} = require("chai");
const {caesar} = require("../src/caesar");

describe("caesar", () => {
    it("should be a function", () => {
        expect(caesar).to.be.a("function");
    });
    it("should shift any single word into a new code, regardless of capitalization", () => {
        const input = "World";
        const expected = "zruog";

        expect(caesar(input, 3)).to.eql(expected);
    });
    it("should return false if shift value is not provided", () => {
        const input = "world";
        expect(caesar(input)).to.be.false;
    });
    it("should return false if shift value is equal to 0", () => {
        const input = "world";
        expect(caesar(input, 0)).to.be.false;
    });
    it("should return false if shift value is greater than 25", () => {
        const input = "world";
        expect(caesar(input, 27)).to.be.false;
    });
    it("should return false if shift value is less than -25", () => {
        const input = "world";
        expect(caesar(input, -56)).to.be.false;
    });
    it("should keep any symbols(spaces, dashes, etc.) if called with a sentence", () => {
        const input = "Come get some, chump!";
        const expected = "ykia cap okia, ydqil!";
        const actual = caesar(input, -4);
        expect(actual).to.equal(expected);
    });
    it("should decode a message in the opposite direction if encode is false", () => {
        const input = "W zcjs mci"
        const expected = "i love you"
        const actual = caesar(input, -12, false);
        expect(actual).to.equal(expected);
    });
});