import { useState } from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorScreen from "./CalculatorScreen";
import {type TKey} from "../types/keyTypes.ts"

export default function Calculator() {
    const [entryStack, setEntryStack] = useState<TKey[]>([]);

    return (
        <div>
            <CalculatorScreen stack={entryStack}/>
            <CalculatorBody setEntryStack={setEntryStack}/>
        </div>
    )
}