import { useState, useEffect } from "react";
import hotkeys from "hotkeys-js";

export function BtnCalculator({ value, onClick, keyCode }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    hotkeys(keyCode, (event) => {
        event.preventDefault()

        //onClick correspond au handelClickCalculatorBtn de page.jsx
        onClick(event, value)
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
        
      }, 100);
      return () => {clearTimeout(timer); hotkeys.unbind(keyCode)}
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
