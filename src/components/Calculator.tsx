import { useState } from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorScreen from "./CalculatorScreen";
import {type TLabel} from "./CalculatorButton"

export default function Calculator() {
    const [entryStack, setEntryStack] = useState<TLabel>([]);

    return (
        <div>
            <CalculatorScreen stack={entryStack}/>
            <CalculatorBody />
        </div>
    )
}