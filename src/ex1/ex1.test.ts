import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx1A, solveEx1B} from "./ex1";

describe('exercise 1', () => {
    test('test A', () => {
        const elves = readTestInput("/ex1").split(/\r?\n\r?\n/);
        expect(solveEx1A(elves)).toBe(24000);
    });

    test('solve B', () => {
        const elves = readInput("/ex1").split(/\r?\n\r?\n/);
        expect(solveEx1A(elves)).toBe(72240);
    });

    test('test B', () => {
        const elves = readTestInput("/ex1").split(/\r?\n\r?\n/);
        expect(solveEx1B(elves)).toBe(45000);
    });

    test('solve B', () => {
        const elves = readInput("/ex1").split(/\r?\n\r?\n/);
        expect(solveEx1B(elves)).toBe(210957);
    });
});