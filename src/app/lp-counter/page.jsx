"use client";
import { LifePoint } from "./component/LifePoint";
import { FlipCoin } from "./component/FlipCoin";
import { DieRoll } from "./component/DieRoll";
import { BtnCalculator } from "./component/BtnClaculator";
import { BigBtnCalculator } from "./component/BigBtnClaculator";
import { InputCalculator } from "./component/InputCalculator";

import { useState } from "react";

export default function Home() {
  //contient les LP des joueur
  const [lpPlayerA, setLpPlayerA] = useState(8000);
  const [lpPlayerB, setLpPlayerB] = useState(8000);

  //defini le joueur dont on modifie les LP
  const [currentPlayer, setCurrentPlayer] = useState("");

  //contient le nombre que l'on souhaite soustraitre ou ajouter
  const [calculatorValue, setCalculatorValue] = useState("");

  const handelClickCalculatorBtn = (event, value) => {
    event.preventDefault();
    parseInt(calculatorValue + value) > 99999
      ? setCalculatorValue(99999)
      : setCalculatorValue(parseInt(calculatorValue + value));
  };
  const handelClickCalculatorSum = (event, player, value) => {
    event.preventDefault();
    if (player === "Player A") {
      setLpPlayerA(lpPlayerA + value);
      setCurrentPlayer("");
      setCalculatorValue("");
    } else if (player === "Player B") {
      setLpPlayerB(lpPlayerB + value);
      setCurrentPlayer("");
      setCalculatorValue("");
    } else {
      Error;
    }
  };
  const handelClickCalculatorSoustract = (event, player, value) => {
    event.preventDefault();
    if (player === "Player A") {
      setLpPlayerA(lpPlayerA - value);
      setCurrentPlayer("");
      setCalculatorValue("");
    } else if (player === "Player B") {
      setLpPlayerB(lpPlayerB - value);
      setCurrentPlayer("");
      setCalculatorValue("");
    } else {
      Error;
    }
  };

  const handelClickPlayerA = () => {
    currentPlayer === "Player A" ? setCurrentPlayer("") : setCurrentPlayer("Player A");
  };

  const handelClickPlayerB = () => {
    currentPlayer === "Player B" ? setCurrentPlayer("") : setCurrentPlayer("Player B");
  };
  console.log('Render occurred')
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center gap-5">
        <LifePoint
          onClick={() => {
            handelClickPlayerA();
          }}
          lifePoint={lpPlayerA}
          name={"Player A"}
          className={(currentPlayer === "Player A") ? "bg-red-900 text-white" : "text-red-900 bg-white" }
        />
        <LifePoint
          onClick={() => {
            handelClickPlayerB();
          }}
          lifePoint={lpPlayerB}
          name={"Player B"}
          className={(currentPlayer === "Player B") ? "bg-red-900 text-white" : "text-red-900 bg-white" }
        />
      </div>
      <div className="flex flex-row gap-x-2">
        <div className="flex flex-col gap-1">
          <InputCalculator value={calculatorValue} />
          <div
            className={`flex flex-row justify-center gap-3 ${
              calculatorValue && currentPlayer ? "" : "hidden"
            }`}
          >
            <BigBtnCalculator
              value={"+"}
              onClick={(event) =>
                handelClickCalculatorSum(event, currentPlayer, calculatorValue)
              }
            />
            <BigBtnCalculator
              value={"-"}
              onClick={(event) =>
                handelClickCalculatorSoustract(
                  event,
                  currentPlayer,
                  calculatorValue
                )
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={1}
            onClick={(event) => handelClickCalculatorBtn(event, "1")}
          />
          <BtnCalculator
            value={4}
            onClick={(event) => handelClickCalculatorBtn(event, "4")}
          />
          <BtnCalculator
            value={7}
            onClick={(event) => handelClickCalculatorBtn(event, "7")}
          />
          <BtnCalculator
            value={"0"}
            onClick={(event) => handelClickCalculatorBtn(event, "7")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={2}
            onClick={(event) => handelClickCalculatorBtn(event, "2")}
          />
          <BtnCalculator
            value={5}
            onClick={(event) => handelClickCalculatorBtn(event, "5")}
          />
          <BtnCalculator
            value={8}
            onClick={(event) => handelClickCalculatorBtn(event, "8")}
          />
          <BtnCalculator
            value={"00"}
            onClick={(event) => handelClickCalculatorBtn(event, "00")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={3}
            onClick={(event) => handelClickCalculatorBtn(event, "3")}
          />
          <BtnCalculator
            value={6}
            onClick={(event) => handelClickCalculatorBtn(event, "6")}
          />
          <BtnCalculator
            value={9}
            onClick={(event) => handelClickCalculatorBtn(event, "9")}
          />
          <BtnCalculator
            value={"000"}
            onClick={(event) => handelClickCalculatorBtn(event, "000")}
          />
        </div>
      </div>
      <FlipCoin />
      <DieRoll />
      <button onClick={() => {setLpPlayerA(8000); setLpPlayerB(8000); setCurrentPlayer(""); setCalculatorValue("")}}>Restart</button>
    </div>
  );
}
