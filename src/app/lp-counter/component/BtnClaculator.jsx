export function BtnCalculator({value, onClick}){
    return (
        <button className="btnCalculator w-16 h-16 " onClick={onClick}>
            {value}
        </button>
    )
}