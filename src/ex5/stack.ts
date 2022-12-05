export class Stack {
    private content: string[];

    constructor(private initial?: string[]) {
        this.content = initial || [];
    }

    public pop(): string | undefined {
        return this.content.pop();
    }

    public popN(howMany: number): string[] {
        let result: string[] = [];
        for (let i = 0; i < howMany; i++) {
            let content = this.content.pop();
            if (content) {
                result.push(content);
            }
        }

        return result;
    }

    public push(...items: string[]): void {
        this.content.push(...items);
    }
}