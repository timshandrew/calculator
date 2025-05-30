type buttonProps = {
    label: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 0 | '.' | '+' | '-' | 'x' | '/' | 'DEL' | 'RESET' | '=';
    variant: 'primary' | 'secondary' | 'tertiary';
}

export default function CalculatorButton({label, variant} : buttonProps) {
    let className = "cursor-pointer text-3xl";

    if (variant === 'primary') {
        className += " bg-blue-500 text-yellow-200";
    } else if (variant === 'secondary') {
        className += " bg-purple-500 text-green-600";
    }

    return (<button className={className}>{label}</button>)
}