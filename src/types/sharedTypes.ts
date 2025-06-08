export type MathOperator = '.' | '+' | '-' | 'x' | '/'
export type MathSymbol = number | MathOperator
export type CalculatorKeyLabel = MathSymbol | 'DEL' | 'RESET' | '='
export type KeyThemeVariant = 'primary' | 'secondary' | 'tertiary';