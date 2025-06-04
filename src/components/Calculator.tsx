import { useState } from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorScreen from "./CalculatorScreen";

import { type MathSymbol } from "../types/sharedTypes";

export default function Calculator() {
    const [expression, setExpression] = useState<MathSymbol[]>([]);

    return (
        <div>
            <CalculatorScreen expression={expression} />
            <CalculatorBody setExpression={setExpression} />
        </div>
    )
}