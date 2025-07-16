import ThemeSelector from "./ThemeSelector";

import { type AppTheme } from "../types/sharedTypes.ts";

type CalculatorHeaderProps = {
  theme: AppTheme;
  setTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
};

export default function CalculatorHeader({
  theme,
  setTheme,
}: CalculatorHeaderProps) {
  return (
    <div className="flex justify-between">
      <h1>Calc</h1>
      <ThemeSelector theme={theme} setTheme={setTheme} />
    </div>
  );
}
