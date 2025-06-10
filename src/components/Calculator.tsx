import { useState } from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorScreen from "./CalculatorScreen";

import { type MathSymbol } from "../types/sharedTypes";
import CalculatorHeader from "./CalculatorHeader";

export default function Calculator() {
    const [expression, setExpression] = useState<MathSymbol[]>([0]);

    return (
        <div>
            <CalculatorHeader />
            <CalculatorScreen expression={expression} />
            <CalculatorBody expression={expression} setExpression={setExpression} />
        </div>
    )
}