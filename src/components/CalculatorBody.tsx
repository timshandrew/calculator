import CalculatorButton from "./CalculatorButton";

export default function CalculatorBody() {
    return (<div>
        <CalculatorButton label={1} variant="primary" />
        <CalculatorButton label={2} variant="secondary" />
    </div>)
}