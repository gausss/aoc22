import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx3A} from "./ex3";

describe('exercise 3', () => {
    test('test A', () => {
        const backpacks = readTestInput("/ex3").split(/\r?\n/);
        expect(solveEx3A(backpacks)).toBe(157);
    });

    test('solve A', () => {
        const backpacks = readInput("/ex3").split(/\r?\n/);
        expect(solveEx3A(backpacks)).toBe(7674);
    });
});