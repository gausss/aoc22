import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx3A} from "./ex3";

describe('exercise 3', () => {
    test('test A', () => {
        const rounds = readTestInput("/ex3").split(/\r?\n/);
        expect(solveEx3A(rounds)).toBe(157);
    });

    test('solve A', () => {
        const rounds = readInput("/ex3").split(/\r?\n/);
        expect(solveEx3A(rounds)).toBe(7674);
    });
});