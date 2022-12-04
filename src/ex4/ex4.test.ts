import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx4} from "./ex4";

describe('exercise 4', () => {
    test('test A', () => {
        const assignments = readTestInput("/ex4").split(/\r?\n/);
        expect(solveEx4(assignments)).toBe(2);
    });

    test('solve A', () => {
        const assignments = readInput("/ex4").split(/\r?\n/);
        expect(solveEx4(assignments)).toBe(530);
    });
});