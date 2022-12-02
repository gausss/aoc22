import {describe, expect, test} from '@jest/globals';
import {solveEx1, solveEx1B, solveEx1Test, solveEx1TestB} from "./ex1";

describe('exercise 1', () => {
    test('test part a', () => {
        expect(solveEx1Test())
            .toBe(24000);
    });

    test('solve part a', () => {
        expect(solveEx1())
            .toBe(72240);
    });

    test('test part b', () => {
        expect(solveEx1TestB())
            .toBe(45000);
    });

    test('solve part b', () => {
        expect(solveEx1B())
            .toBe(210957);
    });
});