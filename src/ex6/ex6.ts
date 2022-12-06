export function solveEx6(input: string): number {
    let slidingWindow = createSlidingWindowsOf4(input);
    return slidingWindow.findIndex((chars) => uniqueCharacters(chars)) + 4;
}

function createSlidingWindowsOf4(input: string): string[] {
    return [...input].reduce((acc: string[], _, index, arr) => {
        if (index + 4 > arr.length) {
            return acc;
        }

        return [...acc, arr.slice(index, index + 4).join('')];
    }, []);
}

function uniqueCharacters(input: string): boolean {
    return [...new Set([...input])].join('') === input;
}
