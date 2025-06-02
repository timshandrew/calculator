import {type TKey, type TKeyVariant} from "../types/keyTypes.ts"

type TButtonProps = {
    label: TKey;
    variant: TKeyVariant;
    setEntryStack: React.Dispatch<React.SetStateAction<TKey[]>>

}

export default function CalculatorButton({label, variant, setEntryStack} : TButtonProps) {
    
    function handleClick() {
        setEntryStack(current => {current = structuredClone(current); current.push(label); return current})
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