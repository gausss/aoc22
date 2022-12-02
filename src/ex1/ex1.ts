import {readInput, readTestInput} from "../AocUtils";

export function solveEx1(): number {
    const elves = readInput("/ex1")
        .split(/\r?\n\r?\n/);
    return findMostCalories(elves)[0];
}

export function solveEx1Test(): number {
    const elves = readTestInput("/ex1")
        .split(/\r?\n\r?\n/);
    return findMostCalories(elves)[0];
}

export function solveEx1B(): number {
    const elves = readInput("/ex1")
        .split(/\r?\n\r?\n/);
    return findMostCalories(elves)[0] + findMostCalories(elves)[1] + findMostCalories(elves)[2];
}

export function solveEx1TestB(): number {
    const elves = readTestInput("/ex1")
        .split(/\r?\n\r?\n/);
    return findMostCalories(elves)[0] + findMostCalories(elves)[1] + findMostCalories(elves)[2];
}

function findMostCalories(elves: string[]): number[] {
    return elves.map((elf) => elf.split(/\r?\n/)
                                 .map((calories) => +calories)
                                 .reduce((a, b) => a + b))
                .sort((a, b) => b - a);
}