import CalculatorButton from "./CalculatorButton";
import buttonData from "../buttonData.json";
import { getFrom2DArray } from "../utils/utils";

const COLUMN_COUNT = 4;
const ROW_COUNT = 5;

export default function CalculatorBody() {
    const buttons = [];

    for (let row = 0; row < ROW_COUNT; row++) {
        for (let col = 0; col < COLUMN_COUNT; col++) {
            const label = getFrom2DArray(buttonData.labels, col, row)
            const variantIndex = getFrom2DArray(buttonData.variants, col, row)

            if (label === undefined || variantIndex === undefined) continue;

            const variant = ['primary', 'secondary', 'tertiary'][variantIndex as number];

            buttons.push(
                <CalculatorButton 
                    key={`${col}-${row}`} 
                    label={label } 
                    variant={variant }
                />
            )
        }
    }

    return (<div className="grid grid-cols-4 grid-rows-5 gap-2">
        {buttons}
    </div>)
}
