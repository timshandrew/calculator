import { type MathSymbol } from "../types/sharedTypes";
import { formatMathExpression } from "../utils/utils";

type CalculatorScreenProps = {
  expression: MathSymbol[];
};

export default function CalculatorScreen({
  expression,
}: CalculatorScreenProps) {
  const formattedExpression = formatMathExpression(
    expression.toString().replace(new RegExp(",", "g"), "")
  );
  return (
    <div className="font-bold rounded-lg text-4xl bg-bg-screen text-text-main text-end p-2 mb-4">
      {formattedExpression}
    </div>
  );
}
