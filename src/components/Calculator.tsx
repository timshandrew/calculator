import { useState } from "react";
import CalculatorBody from "./CalculatorBody";
import CalculatorScreen from "./CalculatorScreen";

import { type MathSymbol, type AppTheme } from "../types/sharedTypes";
import CalculatorHeader from "./CalculatorHeader";

export default function Calculator() {
  const [expression, setExpression] = useState<MathSymbol[]>([0]);
  const [theme, setTheme] = useState<AppTheme>("1");

  return (
    <div>
      <CalculatorHeader theme={theme} setTheme={setTheme} />
      <CalculatorScreen expression={expression} />
      <CalculatorBody expression={expression} setExpression={setExpression} />
    </div>
  );
}
