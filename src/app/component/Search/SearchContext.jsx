"use client";
import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { createContext } from "react";
import { getAllCard, getFilter } from "@/API/callAPI";
import { Loader } from "../Loader";

export const SearchContext = createContext(null);

export function SearchContextProvider({ children }) {
  const [allCards, setAllCards] = useState([]);
  const [maxPage, setMaxPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  //récupère les params de l'url
  const [params, setParams] = useState(new URLSearchParams(searchParams));
  const [loading, setLoading] = useState("");
  //contient les filtre spécifique au monstre (race, attribute)
  const [monsterRace, setRace] = useState([]);
  const [attribute, setAttribute] = useState([]);
  const [magicRace, setMagicRace] = useState([])
  const [trapRace, setTrapRace] = useState([])
  //intéroge la base de données pour récupérer les cartes
  const search = useCallback(async () => {
    try {
      const { cards, maxPage } = await getAllCard(params);
      
      if (monsterRace.length == 0 || attribute.length == 0) {

        const { monsterRace, attribute, magicRace, trapRace } = await getFilter() ;
       setMagicRace(magicRace);
        setTrapRace(trapRace);
        setAttribute(attribute);
        setRace(monsterRace);
      }

      setAllCards(cards);
      setLoading("hidden");
      setMaxPage(maxPage);
      if (params.get("page")) {
        setCurrentPage(params.get("page"));
      }
    } catch (error) {
      setAllCards([]);
      setLoading("hidden");
    }
  }, [params]);

  useEffect((params) => {
    search(params);
  }, []);
  return (
    <SearchContext.Provider
      value={{
        allCards,
        params,
        maxPage,
        currentPage,
        monsterRace,
        attribute,
        magicRace,
        trapRace,
        search,
      }}
    >
      {children}
      <Loader className={loading} />
    </SearchContext.Provider>
  );
}
