import { getAllCard } from "../../API/callAPI";
import LittleCard from "../component/LittleCard";



export default async function pageCards() {
  
  const Cards = await getAllCard()
  
  const allCards = Cards.map((card) => {
    return <LittleCard name={card.name} image={card.card_images[0]} key={card.id }id={card.id}/>
  })
  return(
    <div className="flex flex-wrap justify-evenly gap-y-5">{allCards }</div>) 
}
