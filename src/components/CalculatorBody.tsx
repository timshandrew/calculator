import React from "react";
import buttonData from "../buttonData.json";
import CalculatorButton from "./CalculatorButton.tsx";
import {
  type MathSymbol,
  type KeyThemeVariant,
  type CalculatorKeyLabel,
  type AppTheme,
} from "../types/sharedTypes";

type CalculatorBodyProps = {
  expression: MathSymbol[];
  setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>;
  theme: AppTheme;
};

export default function CalculatorBody({
  expression,
  setExpression,
  theme,
}: CalculatorBodyProps) {
  const buttons: React.JSX.Element[] = createButtons(
    expression,
    setExpression,
    theme
  );

  return (
    <div className="grid rounded-lg bg-bg-keypad auto-rows-[4rem] auto-cols-[4rem] gap-2 p-4">
      {buttons}
    </div>
  );
}

type CreateButtonsType = (
  expression: MathSymbol[],
  setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>,
  theme: AppTheme
) => React.JSX.Element[];

const createButtons: CreateButtonsType = (expression, setExpression, theme) => {
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
        theme={theme}
      />
    );
  }

  return buttons;
};
