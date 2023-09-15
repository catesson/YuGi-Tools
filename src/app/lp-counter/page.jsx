"use client";
import { LifePoint } from "./component/LifePoint";
import { FlipCoin } from "./component/FlipCoin";
import { DieRoll } from "./component/DieRoll";
import { BtnCalculator } from "./component/BtnClaculator";
import { BigBtnCalculator } from "./component/BigBtnClaculator";
import { InputCalculator } from "./component/InputCalculator";

import hotkeys from "hotkeys-js";
import React from "react";

import { useEffect, useState  } from "react";


export default function Home() {
  //contient les LP des joueur
  const [lpPlayerA, setLpPlayerA] = useState(8000);
  const [lpPlayerB, setLpPlayerB] = useState(8000);

  //defini le joueur dont on modifie les LP
  const [currentPlayer, setCurrentPlayer] = useState("");

  //contient le nombre que l'on souhaite soustraitre ou ajouter
  const [calculatorValue, setCalculatorValue] = useState("");

  //event clique sur un bouton avec un nombre
  const handelClickCalculatorBtn = (value) => {
    parseInt(calculatorValue + value) > 99999
      ? setCalculatorValue(99999)
      : setCalculatorValue(parseInt(calculatorValue + value));
  };

  //clique sur le bouton + Pour ajouter le valeur au point de vie du joueur selectionné
  const handelClickCalculatorSum = (player, value) => {
 

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
  const handelClickCalculatorSoustract = ( player, value) => {

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
    const newValue = calculatorValue.toString();
    if (newValue.length > 1) {
      setCalculatorValue(parseInt(newValue.slice(0, newValue.length - 1)));
    } else {
      setCalculatorValue("");
    }
  };
  useEffect(() => {
    console.log('rerender')
    hotkeys("left,right, down", (event, handeler) => {
      switch (handeler.key) {
        
        case "left":
setCurrentPlayer("Player A");
          break;
          case "right":
setCurrentPlayer("Player B");
          break;
          case "down":
setCurrentPlayer("");
          break;
        default:
          event.preventDefault();
      }
    });
    return () => hotkeys.unbind(",enter");
  }, []);



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
          <InputCalculator  value={calculatorValue} />
          <div
            className={`flex flex-row justify-center gap-3 ${
              currentPlayer && calculatorValue ? "" : ""
            }`}
          >
            <BigBtnCalculator
              value={"+"}
              onClick={(event) =>
                handelClickCalculatorSum(currentPlayer, calculatorValue)
              }
              keyCode={"num_add"}
            />
            <BigBtnCalculator
              value={"-"}
              onClick={(event) =>
                handelClickCalculatorSoustract(
         
                  currentPlayer,
                  calculatorValue
                )
              }
              keyCode={"num_subtract"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={1}
            onClick={(event) => handelClickCalculatorBtn("1")}
            keyCode={"num_1,1"}
            
          />
          <BtnCalculator
            value={4}
            onClick={(event) => handelClickCalculatorBtn("4")}
            keyCode={"num_4,4"}
          />
          <BtnCalculator
            value={7}
            onClick={(event) => handelClickCalculatorBtn("7")}
            keyCode={"num_7,7"}
          />
          <BtnCalculator
            value={"0"}
            onClick={(event) => handelClickCalculatorBtn("0")}
            keyCode={"num_0,0"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={2}
            onClick={(event) => handelClickCalculatorBtn("2")}
            keyCode={"num_2,2"}
          />
          <BtnCalculator
            value={5}
            onClick={(event) => handelClickCalculatorBtn("5")}
            keyCode={"num_5,5"}
          />
          <BtnCalculator
            value={8}
            onClick={(event) => handelClickCalculatorBtn("8")}
            keyCode={"num_8,8"}
          />
          <BtnCalculator
            value={"00"}
            onClick={(event) => handelClickCalculatorBtn("00")}
          />
        </div>
        <div className="flex flex-col gap-1">
          <BtnCalculator
            value={3}
            onClick={(event) => handelClickCalculatorBtn("3")}
            keyCode={"num_3,3"}
          />
          <BtnCalculator
            value={6}
            onClick={(event) => handelClickCalculatorBtn("6")}
            keyCode={"num_6,6"}
          />
          <BtnCalculator
            value={9}
            onClick={(event) => handelClickCalculatorBtn("9")}
            keyCode={"num_9,9"}
          />
          <BtnCalculator
            value={"000"}
            onClick={(event) => handelClickCalculatorBtn("000")}
          />
          <BtnCalculator
            value={"Delete"}
            onClick={() => handelClickDel()}
            keyCode={"backspace"}
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
