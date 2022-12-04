import {describe, expect, test} from '@jest/globals';
import {readInput, readTestInput} from "../utils";
import {solveEx2A, solveEx2B} from "./ex2";

describe('exercise 2', () => {
    test('test A', () => {
        const rounds = readTestInput("/ex2").split(/\r?\n/);
        expect(solveEx2A(rounds)).toBe(15);
    });

    test('solve A', () => {
        const rounds = readInput("/ex2").split(/\r?\n/);
        expect(solveEx2A(rounds)).toBe(11906);
    });

    test('test B', () => {
        const rounds = readTestInput("/ex2").split(/\r?\n/);
        expect(solveEx2B(rounds)).toBe(12);
    });

    test('solve B', () => {
        const rounds = readInput("/ex2").split(/\r?\n/);
        expect(solveEx2B(rounds)).toBe(11186);
    });
});