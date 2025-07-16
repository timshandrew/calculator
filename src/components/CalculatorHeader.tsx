import ThemeSelector from "./ThemeSelector";

export default function CalculatorHeader() {
  return (
    <div className="flex justify-between">
      <h1>Calc</h1>
      <ThemeSelector />
    </div>
  );
}
