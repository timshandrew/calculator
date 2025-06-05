import {type MathSymbol, type KeyThemeVariant, type CalculatorKeyLabel } from "../types/sharedTypes";
import { evaluateMathExpression, formMathExpression } from "../utils/utils";

type CalculatorButtonProps = {
    label: CalculatorKeyLabel;
    variant: KeyThemeVariant;
    expression: MathSymbol[];
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>
}

export default function CalculatorButton({label, variant, expression, setExpression} : CalculatorButtonProps) {
    
    function handleClick() {
        switch (label) {
            case "RESET": {
                setExpression([])
                break;
            }
            case "DEL": {
                setExpression(array => {array = structuredClone(array); array.pop(); return array});
                break;
            }
            case "=": {
                const formedExpression = formMathExpression(expression);
                const evaluatedExpression = evaluateMathExpression(formedExpression);
                setExpression([evaluatedExpression])
                break;
            }
            default: {
                setExpression(array => {array = structuredClone(array); array.push(label); return array;})
            }
        }
    }

    let className = "cursor-pointer text-3xl";

    if (variant === 'primary') {
        className += " bg-blue-500 text-yellow-200";
    } else if (variant === 'secondary') {
        className += " bg-purple-500 text-green-600";
    } else if (variant === 'tertiary') {
        className += " bg-red-500 text-green-600";
    }

    return (<button className={className} onClick={handleClick}>{label}</button>)
}