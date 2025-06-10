import React from "react";
import buttonData from "../buttonData.json";
import CalculatorButton from "./CalculatorButton.tsx";
import { type MathSymbol, type KeyThemeVariant, type CalculatorKeyLabel } from "../types/sharedTypes";

type CalculatorBodyProps = {
    expression: MathSymbol[];
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>}

export default function CalculatorBody({ expression, setExpression } : CalculatorBodyProps) {
    const buttons: React.JSX.Element[] = createButtons(expression, setExpression)

    return (<div className="grid gap-2">
        {buttons}
    </div>)
}

type CreateButtonsType = (
    expression: MathSymbol[], 
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>
) => React.JSX.Element[]

const createButtons: CreateButtonsType = (expression, setExpression) => {
    const buttons: React.JSX.Element[] = [];

    for (const button of buttonData) {
        buttons.push(
            <CalculatorButton 
                expression={expression} 
                setExpression={setExpression}
                label={button.value as CalculatorKeyLabel}
                variant={button.variant as KeyThemeVariant}
                columnSpan={button.gridSpan.column}
                gridOrigin={button.gridOrigin}
        />)
    }

    return buttons;
}