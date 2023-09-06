import { useState, useEffect } from "react";
import hotkeys from "hotkeys-js";

export function BtnCalculator({ value, onClick, keyCode }) {
  const [active, setActive] = useState(false);
 hotkeys.unbind(keyCode);
  useEffect(() => {
    hotkeys(keyCode, (event, handeler) => {
        event.preventDefault()

        //onClick correspond au handelClickCalculatorBtn de page.jsx
        onClick(event, value)
      setActive(true);
      setTimeout(() => {
        setActive(false);
        
      }, 100);
    });
  });
  return (
    <button
      className={`btnCalculator w-16 h-16 ${
        active ? "btnCalculator-active" : ""
      }`}
      //onClick correspond au handelClickCalculatorBtn de page.jsx
      onClick={onClick}
    >
      {value}
    </button>
  );
}
