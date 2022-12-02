import {readFileSync} from "fs";

export function readInput(folder: string): string {
    return readFileSync(__dirname + folder + '/input.txt', 'utf-8');
}

export function readTestInput(folder: string): string {
    return readFileSync(__dirname + folder + '/input_test.txt', 'utf-8');
}