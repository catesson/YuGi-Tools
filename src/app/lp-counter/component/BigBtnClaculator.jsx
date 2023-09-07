import { useState, useEffect } from "react";

export function BigBtnCalculator({value, onClick, keyCode}){


    console.log("Big btn refrech")
  useEffect(() => {
    hotkeys(keyCode, (event) => {
        event.preventDefault()

        //onClick correspond au handelClickCalculatorBtn de page.jsx
        onClick(event, value)
        ;
 
      
      
      return () => {hotkeys.unbind(keyCode)}
    });
  });
    return (
        <button className="w-24 h-32 border-4 btnCalculator text-7xl" onClick={onClick}>
            {value}
        </button>
    )
}