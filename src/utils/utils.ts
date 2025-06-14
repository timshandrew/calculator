import { type MathSymbol } from "../types/sharedTypes";

export function formMathExpression(expressionArray: MathSymbol[]): string {
    return expressionArray.toString().replace(new RegExp(",", "g"), "").replace(new RegExp("x", "g"), "*");
}

// Credit to https://stackoverflow.com/questions/2901102/how-to-format-a-number-with-commas-as-thousands-separators#:~:text=1%20more%20comment-,52%20Answers,-Sorted%20by%3A
// for the regex.
export function formatMathExpression(expression: string): string {
    return expression.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export function evaluateMathExpression(wellFormedExpression: string): number  {
    const evaluatedExpression = eval(wellFormedExpression);

    if (typeof evaluatedExpression === "number") {
        return evaluatedExpression;
    } else {
        throw new EvalError("Return type from evaluating mathematical expression was not a number.")
    }
}

// A leading zero here is meant as a zero which is not part of another number. i.e.
// the zero in 10 should not count as a leading zero. 
// Note that 00 is not counted as a leading zero, as only the last two digits are checked.
export function hasLeadingZero(expressionArray: MathSymbol[]): boolean {
    if (expressionArray.length === 1) {
        return expressionArray[0] === 0;
    } else {
        const topSymbol = expressionArray[expressionArray.length - 1]; 
        const secondTopSymbol = expressionArray[expressionArray.length - 2]; 

        return topSymbol === 0 && typeof secondTopSymbol !== "number";
    }
}