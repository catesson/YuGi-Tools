"use client";
import { getAllCard } from "@/API/callAPI";
import LittleCard from "../component/LittleCard";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

//affiche la liste de toute les carte ou des cartes recherchés
export function CardResult() {

  const [Cards, setCards] = useState([]);
  const searchParams = useSearchParams()
  const [params, setParams] = useState(searchParams.toString())
  //récupère les params de l'url
  
  
 
  useEffect((params) => {
    async function allCards(
    ) {
      const cards = await getAllCard(params);
      setCards(cards)     
    } allCards()
  }, []);
  const allCards = Cards.map((card) => {
    return (
      <LittleCard
        name={card.name}
        image={card.card_images[0]}
        key={card.id}
        id={card.id}
      />
    );
  });

  return allCards;
}
