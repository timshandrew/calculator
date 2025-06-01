import {type TLabel} from "./CalculatorButton";

type propTypes = {
    stack: TLabel[]
}

export default function CalculatorScreen({stack} : propTypes) {
    return (<div>{stack}</div>)
}