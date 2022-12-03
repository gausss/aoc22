export interface Game {
    opponent: Choice | undefined;
    player: Choice | undefined;
}

export enum Choice {
    ROCK, PAPER, SCISSORS
}

// X  lose, Y  draw, and Z  win
export function parseGame(input: string): Game {
    return {opponent: parseChoice(input.charAt(0)), player: parseChoice(input.charAt(2))};
}

function parseChoice(input: string): Choice | undefined {
    switch (input) {
        case "A":
        case "X":
            return Choice.ROCK;
        case "B":
        case "Y":
            return Choice.PAPER;
        case "C":
        case "Z":
            return Choice.SCISSORS;

    }
}