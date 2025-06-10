import {type MathSymbol, type KeyThemeVariant, type CalculatorKeyLabel } from "../types/sharedTypes";
import { evaluateMathExpression, formMathExpression, hasLeadingZero } from "../utils/utils";

type CalculatorButtonProps = {
    label: CalculatorKeyLabel;
    variant: KeyThemeVariant;
    expression: MathSymbol[];
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>;
    columnSpan: number;
    gridOrigin: {"column": number, "row": number};
}

export default function CalculatorButton({label, variant, expression, setExpression, columnSpan, gridOrigin} : CalculatorButtonProps) {
    let className = `cursor-pointer text-3xl`;
 
    if (variant === 'primary') {
        className += " bg-blue-500 text-yellow-200";
    } else if (variant === 'secondary') {
        className += " bg-purple-500 text-green-600";
    } else if (variant === 'tertiary') {
        className += " bg-red-500 text-green-600";
    }

    // Using inline styles here because there would be too many prop-to-style mappings required to get Tailwind to
    // generate the classes for each of the grid-rows/grid-column utilities. In the case for the variants above, there
    // are only a few possible literal values the prop can take. There are quite a few row/column values.
    const inlineStyles = {
        gridRow: gridOrigin.row,
        gridColumn: `${gridOrigin.column} / span ${columnSpan}`,
    }

    function handleClick() {
        switch (label) {
            case "RESET": {
                setExpression([0])
                break;
            }
            case "DEL": {
                const nextExpression = structuredClone(expression)
                nextExpression.pop()
                if (nextExpression.length === 0) nextExpression.push(0);
                setExpression(nextExpression);
                break;
            }
            case "=": {
                const formedExpression = formMathExpression(expression);
                const evaluatedExpression = evaluateMathExpression(formedExpression);
                setExpression([evaluatedExpression])
                break;
            }
            default: {
                const nextExpression = structuredClone(expression)
                const topSymbol = nextExpression[nextExpression.length - 1]

                // Allows the user to replace a leading zero or operator by entering another one.
                // Maybe change the switch to an if-conditional and move the typeof operator to a separate 'case'.
                if (typeof label === "number" && hasLeadingZero(expression)) {
                    nextExpression[nextExpression.length - 1] = label;
                } else if (isOperator(label as string) && isOperator(topSymbol as string)) {
                    nextExpression[nextExpression.length - 1] = label;
                } else {
                    nextExpression.push(label);
                }

                setExpression(nextExpression);
            }
        }
    }

    return (<button className={className} style={inlineStyles} onClick={handleClick}>{label}</button>)
}

const isOperator = (symbol: string): boolean => {
    return ["+", "-", "x", "/", "."].includes(symbol);
}