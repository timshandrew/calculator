import { type MathSymbol } from "../types/sharedTypes";

type CalculatorScreenProps = {
    expression: MathSymbol[]
}

export default function CalculatorScreen({ expression } : CalculatorScreenProps) {
    return (<div>{expression}</div>)
}