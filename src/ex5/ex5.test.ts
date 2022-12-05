import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx5} from "./ex5";
import {Stack} from "./stack";

describe('exercise 5', () => {
    test('test A', () => {
        let stacks = [new Stack([""]), new Stack(["Z", "N"]), new Stack(["M", "C", "D"]), new Stack(["P"])]
        const moves = readTestInput("/ex5").split(/\r?\n/);
        expect(solveEx5(stacks, moves)).toBe("CMZ");
    });

    test('solve A', () => {
        let stacks = [new Stack([""]),
            new Stack(["Q", "W", "P", "S", "Z", "R", "H", "D"]),
            new Stack(["V", "B", "R", "W", "Q", "H", "F"]),
            new Stack(["C", "V", "S", "H"]),
            new Stack(["H", "F", "G"]),
            new Stack(["P", "G", "J", "B", "Z"]),
            new Stack(["Q", "T", "J", "H", "W", "F", "L"]),
            new Stack(["Z", "T", "W", "D", "L", "V", "J", "N"]),
            new Stack(["D", "T", "Z", "C", "J", "G", "H", "F"]),
            new Stack(["W", "P", "V", "M", "B", "H"])]
        const moves = readInput("/ex5").split(/\r?\n/);
        expect(solveEx5(stacks, moves)).toBe("ZWHVFWQWW");
    });
});