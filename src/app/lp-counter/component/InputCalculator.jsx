import { useContext } from "react"

export function InputCalculator({value}){

    return (
        <div className="w-52 h-20 border-4 flex items-center justify-center border-red-900 rounded-3xl ">
        <p className="text-5xl text-red-900">{value}</p>
      </div>
    )
}