"use client";
import { getAllCard } from "@/API/callAPI";
import LittleCard from "../component/LittleCard";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";

//affiche la liste de toute les carte ou des cartes recherchés
export function CardResult() {
  const [cards, setCards] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  //récupère les params de l'url
  const [params, setParams] = useState(new URLSearchParams(searchParams));
  //Body qui sera envoyer dans le fetch
  const [body, setBody] = useState({
    archetype: params.get("archetype"),
  });
  //intéroge la base de données pour récupérer les cartes
  const search = useCallback(async () => {
    const { cards, maxPage } = await getAllCard(params, body);

    setCards(cards);
    setMaxPage(maxPage);
    if (params.get("page")) {
      setCurrentPage(params.get("page"));
    }
  }, [params, body]);
  useEffect((params, body) => {
    console.log("useEffect");
    search(params, body);
  }, []);

  //affiche toutes les carte retourné
  const allCards = cards.map((card) => {
    return (
      <LittleCard
        name={card.name}
        image={card.card_images[0]}
        key={card.id}
        id={card.id}
      />
    );
  });
  const handelClickNext = (event) => {
    event.preventDefault();
    const nextPage = parseInt(currentPage) + 1;
    params.set("page", nextPage);
    search();
  };
  const handelClickPrev = (event) => {
    event.preventDefault();
    const prevPage = parseInt(currentPage) - 1;
    params.set("page", prevPage);
    search();
  };
  const handelClickFirstPage = (event) => {
    event.preventDefault()
    params.set("page", 1);
    search();
  };
  const handelClickLastPage = (event) => {
    event.preventDefault()
    params.set("page", maxPage);
    search();
  };


  const paginate = () => {
    let page = currentPage;
    return (
      <div className="flex flex-nowrap justify-center gap-4">
        <button onClick={handelClickFirstPage}>First Page</button>
        <button onClick={handelClickPrev}>prev</button>
        <h1>{page}</h1>
        <button onClick={handelClickNext}>next</button>
        <button onClick={handelClickLastPage}>Last Page</button>
      </div>
    );
  };
  console.log("refrech");
  return (
    <div className="flex justify-center flex-col">
      <div className="flex flex-wrap justify-evenly gap-y-5">{allCards}</div>
      {paginate()}
    </div>
  );
}
