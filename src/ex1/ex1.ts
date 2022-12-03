export function solveEx1A(elves: string[]): number {
    return findMostCalories(elves)[0];
}

export function solveEx1B(elves: string[]): number {
    return findMostCalories(elves)[0] + findMostCalories(elves)[1] + findMostCalories(elves)[2];
}

function findMostCalories(elves: string[]): number[] {
    return elves.map((elf) => elf.split(/\r?\n/).map((calories) => +calories)
                                 .reduce((a, b) => a + b))
                .sort((a, b) => b - a);
}