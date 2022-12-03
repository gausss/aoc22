import {Choice, Game, parseGame} from "./game";

export function solveEx2A(gameInput: string[]): number {
    return gameInput.map((game) => parseGame(game))
                    .map((game) => computeRoundScore(game))
                    .reduce((a, b) => a + b);
}

function computeRoundScore(game: Game): number {
    return computeChoiceScore(game.player) + computeWinningScore(game);
}

function computeWinningScore(game: Game): number {
    if (game.player == game.opponent) {
        return 3;
    } else if ((game.player == Choice.ROCK && game.opponent == Choice.SCISSORS) ||
        (game.player == Choice.PAPER && game.opponent == Choice.ROCK) ||
        (game.player == Choice.SCISSORS && game.opponent == Choice.PAPER)) {
        return 6;
    } else {
        return 0;
    }
}

function computeChoiceScore(choice: Choice | undefined): number {
    switch (choice) {
        case Choice.ROCK:
            return 1;
        case Choice.PAPER:
            return 2;
        case Choice.SCISSORS:
            return 3;
        default:
            return 0;
    }
}