import {Choice, Game, parseGame} from "./game";

export function solveEx2A(gameInput: string[]): number {
    return gameInput.map((game) => parseGame(game))
                    .map((game) => computeRoundScore(game))
                    .reduce((a, b) => a + b);
}

export function solveEx2B(gameInput: string[]): number {
    return gameInput.map((game) => parseGame(game))
                    .map((game) => toPredictedGame(game))
                    .map((game) => computeRoundScore(game))
                    .reduce((a, b) => a + b);
}

function toPredictedGame(game: Game): Game {
    if (game.player == Choice.PAPER) {
        game.player = game.opponent
    } else if (game.player == Choice.SCISSORS) {
        game.player = beat(game.opponent);
    } else {
        game.player = lose(game.opponent);
    }
    return game;
}

function computeRoundScore(game: Game): number {
    return computeChoiceScore(game.player) + computeWinningScore(game);
}

function computeWinningScore(game: Game): number {
    if (game.player == game.opponent) {
        return 3;
    } else if (game.player == beat(game.opponent)) {
        return 6;
    } else {
        return 0;
    }
}

function beat(choice: Choice | undefined): Choice | undefined {
    switch (choice) {
        case Choice.ROCK:
            return Choice.PAPER;
        case Choice.PAPER:
            return Choice.SCISSORS;
        case Choice.SCISSORS:
            return Choice.ROCK;
    }
}

function lose(choice: Choice | undefined): Choice | undefined {
    switch (choice) {
        case Choice.ROCK:
            return Choice.SCISSORS;
        case Choice.PAPER:
            return Choice.ROCK;
        case Choice.SCISSORS:
            return Choice.PAPER;
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