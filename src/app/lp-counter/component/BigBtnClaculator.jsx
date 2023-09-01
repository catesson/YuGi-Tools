export function BigBtnCalculator({value, onClick}){
    return (
        <button className="w-24 h-32 border-4 btnCalculator text-7xl" onClick={onClick}>
            {value}
        </button>
    )
}