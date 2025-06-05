import { type MathSymbol } from "../types/sharedTypes";

// So I don't confuse the order of indices.
export function getFrom2DArray<T>(array: T[][], col: number, row: number ): T  {
    if (row < 0 || row >= array.length || col < 0 || col >= array[row].length) {
        throw new RangeError(`Index out of bounds: row index: ${row}, column index: ${col} for array with ${array.length} rows and ${array[0].length} columns.`);
    } else {
        return array[row][col];
    }
}

export function formMathExpression(expressionArray: MathSymbol[]): string {
    return expressionArray.toString().replace(new RegExp(",", "g"), "").replace(new RegExp("x", "g"), "*");
}

export function evaluateMathExpression(wellFormedExpression: string): number  {
    const evaluatedExpression = eval(wellFormedExpression);

    if (typeof evaluatedExpression === "number") {
        return evaluatedExpression;
    } else {
        throw new EvalError("Return type from evaluating mathematical expression was not a number.")
    }

}