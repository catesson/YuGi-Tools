"use client";
import { getAllCard } from "@/API/callAPI";
import LittleCard from "../component/LittleCard";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

//affiche la liste de toute les carte ou des cartes recherchés
export function CardResult() {

  const [cards, setCards] = useState([]);
  const searchParams = useSearchParams() 
  //récupère les params de l'url
  const [params, setParams] = useState(searchParams.toString())
 
  //Body qui sera envoyer dans le fetch
  const [body, setBody] = useState({archetype:searchParams.get('archetype')})
 

  useEffect(() => {
    async function allCards(
    ) {
      const cards = await getAllCard(params, body);
      setCards(cards)     
    } allCards()
  }, []);
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

  return allCards;
}
