import { useState, useEffect } from "react";

export function BigBtnCalculator({ value, onClick, keyCode }) {
  useEffect(() => {
    const handleHotkeyClick = (event) => {
      event.preventDefault();
      onClick();
    };

    hotkeys(keyCode, handleHotkeyClick);

    return () => {
      hotkeys.unbind(keyCode);
    };
  }, [onClick, keyCode]);

  return (
    <button className="w-24 h-32 border-4 btnCalculator text-7xl" onClick={onClick}>
      {value}
    </button>
  );
}