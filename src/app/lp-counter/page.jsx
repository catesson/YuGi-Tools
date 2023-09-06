"use client";
import { LifePoint } from "./component/LifePoint";
import { FlipCoin } from "./component/FlipCoin";
import { DieRoll } from "./component/DieRoll";
import { BtnCalculator } from "./component/BtnClaculator";
import { BigBtnCalculator } from "./component/BigBtnClaculator";
import { InputCalculator } from "./component/InputCalculator";

import hotkeys from "hotkeys-js";

import { useEffect, useState } from "react";

export default function Home() {
  //contient les LP des joueur
  const [lpPlayerA, setLpPlayerA] = useState(8000);
  const [lpPlayerB, setLpPlayerB] = useState(8000);

  //defini le joueur dont on modifie les LP
  const [currentPlayer, setCurrentPlayer] = useState("");

  //contient le nombre que l'on souhaite soustraitre ou ajouter
  const [calculatorValue, setCalculatorValue] = useState("");

  //event clique sur un bouton avec un nombre
  const handelClickCalculatorBtn = (event, value) => {
    event.preventDefault();
    parseInt(calculatorValue + value) > 99999
      ? setCalculatorValue(99999)
      : setCalculatorValue(parseInt(calculatorValue + value));
  };

  //clique sur le bouton + Pour ajouter le valeur au point de vie du joueur selectionné
  const handelClickCalculatorSum = (event, player, value) => {
    event.preventDefault();

    try {
      if (player === "Player A") {
        setLpPlayerA(lpPlayerA + value);
        setCurrentPlayer("");
        setCalculatorValue("");
      } else if (player === "Player B") {
        setLpPlayerB(lpPlayerB + value);
        setCurrentPlayer("");
        setCalculatorValue("");
      } else {
        throw new Error("Joueur non reconnu");
      }
    } catch (Error) {
      console.error("Une erreur s'est produite :", Error.message);
    }
  };
  //clique sur le bouton - Pour soustraire le valeur au point de vie du joueur selectionné
  const handelClickCalculatorSoustract = (event, player, value) => {
    event.preventDefault();
    try {
      if (player === "Player A") {
        setLpPlayerA(lpPlayerA - value);
        setCurrentPlayer("");
        setCalculatorValue("");
      } else if (player === "Player B") {
        setLpPlayerB(lpPlayerB - value);
        setCurrentPlayer("");
        setCalculatorValue("");
      } else {
        throw new Error("Joueur non reconnu");
      }
    } catch (Error) {
      console.error("Une erreur s'est produite :", Error.message);
    }
  };
  // selection du joueur A
  const handelClickPlayerA = () => {
    currentPlayer === "Player A"
      ? setCurrentPlayer("")
      : setCurrentPlayer("Player A");
  };
  // selection du joueur B
  const handelClickPlayerB = () => {
    currentPlayer === "Player B"
      ? setCurrentPlayer("")
      : setCurrentPlayer("Player B");
  };
  const handelClickDel = () => {
    const newValue = calculatorValue.toString() 
    if (newValue.length > 1){
    setCalculatorValue(parseInt(newValue.slice(0, newValue.length - 1)))}
    else {
      setCalculatorValue("")
    }
  }
  useEffect(() => {
    hotkeys.unbind(
      "1,2,3,4,5,6,7,8,9,0,num_0,num_1,num_2,num_3,num_4,num_5,num_6,num_7,num_8,num_9,num_add,num_subtract,enter"
    );

    hotkeys(
      "1,2,3,4,5,6,7,8,9,0,num_0,num_1,num_2,num_3,num_4,num_5,num_6,num_7,num_8,num_9,num_add,num_subtract,enter,backspace",
      (event, handeler) => {
        switch (handeler.key) {
          case "num_1":
          case "1":
            handelClickCalculatorBtn(event, "1");
            break;
          case "num_2":
          case "2":
            handelClickCalculatorBtn(event, "2");
            break;
          case "num_3":
          case "3":
            handelClickCalculatorBtn(event, "3");
            break;
          case "num_4":
          case "4":
            handelClickCalculatorBtn(event, "4");
            break;
          case "num_5":
          case "5":
            handelClickCalculatorBtn(event, "5");
            break;
          case "num_6":
          case "6":
            handelClickCalculatorBtn(event, "6");
            break;
          case "num_7":
          case "7":
            handelClickCalculatorBtn(event, "7");
            break;
          case "num_8":
          case "8":
            handelClickCalculatorBtn(event, "8");
            break;
          case "num_9":
          case "9":
            handelClickCalculatorBtn(event, "9");
            break;
          case "num_0":
          case "0":
            handelClickCalculatorBtn(event, "0");
            break;
          case "num_add":
            handelClickCalculatorSum(event, currentPlayer, calculatorValue);
            break;
          case "num_subtract":
            handelClickCalculatorSoustract(
              event,
              currentPlayer,
              calculatorValue
            );
            break;
          case "enter":
            currentPlayer == "Player A"
              ? setCurrentPlayer("Player B")
              : setCurrentPlayer("Player A");
            break;
          case "backspace" : 
          handelClickDel()
        break;
          default:
            event.preventDefault();
        }
      }
    );
  });

  // Fonction pour gérer le démontage du composant

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center gap-5">
        <LifePoint
          onClick={() => {
            handelClickPlayerA();
          }}
          lifePoint={lpPlayerA}
          name={"Player A"}
          className={
            currentPlayer === "Player A"
              ? "bg-red-900 text-white"
              : "text-red-900 bg-white"
          }
        />
        <LifePoint
          onClick={() => {
            handelClickPlayerB();
          }}
          lifePoint={lpPlayerB}
          name={"Player B"}
          className={
            currentPlayer === "Player B"
              ? "bg-red-900 text-white"
              : "text-red-900 bg-white"
          }
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
            onClick={(event) => handelClickCalculatorBtn(event, "0")}
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
      <button
        onClick={() => {
          setLpPlayerA(8000);
          setLpPlayerB(8000);
          setCurrentPlayer("");
          setCalculatorValue("");
        }}
      >
        Restart
      </button>
    </div>
  );
}
