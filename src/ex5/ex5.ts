import {Stack} from "./stack";

interface Move {
    amount: number;
    from: number;
    to: number;
}

const REGEX = /\d+/g;

export function solveEx5(stacks: Stack[], movesStrings: string[]): string {
    let moves = movesStrings.map((moveString) => moveString.match(REGEX))
                            .map((moveNums) => ({
                                amount: Number(moveNums?.[0]),
                                from: Number(moveNums?.[1]),
                                to: Number(moveNums?.[2])
                            }) as Move);

    for (const move of moves) {
        let source = stacks[move.from];
        let target = stacks[move.to];
        let movedStack = source.popN(move.amount);
        target.push(...movedStack);
    }

    return stacks.map((stack) => stack.pop()).join("");
}
