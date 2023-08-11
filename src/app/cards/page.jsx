import { getAllCard } from "../../API/callAPI";
import LittleCard from "../component/LittleCard";


export default function pageCards() {
  const Cards = getAllCard()
  const allCards = Cards.slice(0,200).map((card) => {
    return <LittleCard name={card.name} image={card.card_images[0]} key={card.id }id={card.id}/>
  })
  return(
    <div className="flex flex-wrap justify-evenly">{allCards }</div>) 
}
