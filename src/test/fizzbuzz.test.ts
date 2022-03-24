import {FizzBuzz} from "../main/fizzbuzz";

describe('FizzBuzz', () => {
    let fizzbuzz: FizzBuzz = new FizzBuzz();
    describe("should convert number to a string", () => {
        it.each([[1, "1"], [2, "2"], [4, "4"], [7, "7"]])("should convert %i as number to %s as string", (input:number, expected:string)=> {
            expect(fizzbuzz.convert(input)).toBe(expected);
        })
    })
    describe("multiples of three and five should return fizzbuzz", () => {
        it.each([15, 30, 45])("should convert %i to fizzbuzz", (input:number)=> {
            expect(fizzbuzz.convert(input)).toBe("fizzbuzz");
        })
    })
    describe("multiples of three should return fizz", () => {
        it("")
    })
})