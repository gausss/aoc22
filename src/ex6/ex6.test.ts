import {describe, expect, test} from '@jest/globals';
import {readInput} from "../utils";
import {solveEx6} from "./ex6";

describe('exercise 6', () => {
    test('test A', () => {
        expect(solveEx6("bvwbjplbgvbhsrlpgdmjqwftvncz")).toBe(5);
        expect(solveEx6("nppdvjthqldpwncqszvftbrmjlhg")).toBe(6);
        expect(solveEx6("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg")).toBe(10);
        expect(solveEx6("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw")).toBe(11);
    });

    test('solve A', () => {
        const input = readInput("/ex6");
        expect(solveEx6(input)).toBe(1655);
    });
});