const alphabet = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function solveEx3A(backpacks: string[]): number {
    return backpacks.map((content) => findDuplicateItem(content))
                    .map((duplicate) => getPriority(duplicate || "_"))
                    .reduce((a, b) => a + b);
}

function findDuplicateItem(items: string): string | undefined {
    const compartment1 = items.slice(0, items.length / 2);
    const compartment2 = items.slice(items.length / 2, items.length);
    return [...compartment1].find((item) => compartment2.includes(item));
}

function getPriority(itemType: string) {
    return alphabet.indexOf(itemType);
}