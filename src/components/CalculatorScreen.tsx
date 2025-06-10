import { type MathSymbol } from "../types/sharedTypes";
import { formatMathExpression } from "../utils/utils";

type CalculatorScreenProps = {
    expression: MathSymbol[]
}

export default function CalculatorScreen({ expression } : CalculatorScreenProps) {
    const formattedExpression = formatMathExpression(expression.toString().replace(new RegExp(",", "g"), ""));
    return (<div className="bg-black text-white text-end p-2">{formattedExpression}</div>)
}