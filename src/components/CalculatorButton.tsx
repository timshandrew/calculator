import {type MathSymbol, type KeyThemeVariant, type CalculatorKeyLabel } from "../types/sharedTypes";

type CalculatorButtonProps = {
    label: CalculatorKeyLabel;
    variant: KeyThemeVariant;
    setExpression: React.Dispatch<React.SetStateAction<MathSymbol[]>>
}

export default function CalculatorButton({label, variant, setExpression} : CalculatorButtonProps) {
    
    function handleClick() {
        setExpression(current => {current = structuredClone(current); current.push(label); return current})
    }

    let className = "cursor-pointer text-3xl";

    if (variant === 'primary') {
        className += " bg-blue-500 text-yellow-200";
    } else if (variant === 'secondary') {
        className += " bg-purple-500 text-green-600";
    } else if (variant === 'tertiary') {
        className += " bg-red-500 text-green-600";
    }

    return (<button className={className} onClick={handleClick}>{label}</button>)
}