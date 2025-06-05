import buttonData from "../buttonData.json";
import { getFrom2DArray } from "../utils/utils";
import CalculatorButton from "./CalculatorButton.tsx";

import { type MathSymbol, type KeyThemeVariant, type CalculatorKeyLabel } from "../types/sharedTypes";

const COLUMN_COUNT = 4;
const ROW_COUNT = 5;

type CalculatorBodyProps = {
    expression: MathSymbol[];
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>
}

export default function CalculatorBody({ expression, setExpression } : CalculatorBodyProps) {
    const buttons = [];

    for (let row = 0; row < ROW_COUNT; row++) {
        for (let col = 0; col < COLUMN_COUNT; col++) {
            const label = getFrom2DArray(buttonData.labels, col, row)
            const variantIndex = getFrom2DArray(buttonData.variants, col, row)

            const variant = ['primary', 'secondary', 'tertiary'][variantIndex as number];

            buttons.push(
                <CalculatorButton 
                    key={`${col}-${row}`} 
                    label={label as CalculatorKeyLabel} 
                    variant={variant as KeyThemeVariant}
                    expression={expression}
                    setExpression={setExpression}

                />
            )
        }
    }

    return (<div className="grid grid-cols-4 grid-rows-5 gap-2">
        {buttons}
    </div>)
}
