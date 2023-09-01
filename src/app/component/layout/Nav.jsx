"use client";

import * as React from "react";
import { useState } from "react";

export function Nav() {
  const [navStatus, setNavStatus] = useState(false)

  const handleNavClick = () => {
setNavStatus(!navStatus)
  }
      
  return (
    <nav className="flex items-center flex-col sm:flex-row sm:justify-center h-min">
      <button onClick={handleNavClick} className={"h-14 w-14 sm:hidden"}>X</button>
      <ul className={`flex flex-col myTransition origin-top ${navStatus ? "h-56" : "h-0"} sm:flex-row sm:h-auto`}>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/cards"
          >
            Cards
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/deck"
          >
            Deck
          </a>
        </li>
        <li>
          <a
            className="block leading-10 my-2 px-4 mx-4 font-bold text-white text-center hover-underline"
            href="/lp-counter"
          >
            LP Counter
          </a>
        </li>
      </ul>
    </nav>
  );
}
