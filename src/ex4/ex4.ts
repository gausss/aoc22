interface Assignment {
    start: number;
    end: number;
}

export function solveEx4(assignments: string[]): number {
    return assignments.map((assignment) => parseGroup(assignment))
                      .filter((group) => isContained(group[0], group[1])).length
}

function isContained(assignmentA: Assignment, assignmentB: Assignment): boolean {
    return (assignmentA.start >= assignmentB.start && assignmentA.end <= assignmentB.end) ||
        (assignmentA.start <= assignmentB.start && assignmentA.end >= assignmentB.end);
}

function parseGroup(input: string): [Assignment, Assignment] {
    const assignments = input.split(",");
    return [parseAssignment(assignments[0]), parseAssignment(assignments[1])]
}

function parseAssignment(input: string): Assignment {
    const limits = input.split("-");
    return {start: +limits[0], end: +limits[1]};
}