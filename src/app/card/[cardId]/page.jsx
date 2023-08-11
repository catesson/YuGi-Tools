/* eslint-disable @next/next/no-img-element */
import { getAllCard, getCard } from "../../../API/callAPI";
import { TypeCard } from "@/app/component/TypeCard";

export default function pageCardId({ params, searchParams }) {
  const card = getCard(params.cardId);
  const type = card.type.toLowerCase();
  const image = card.card_images[0];
  let color = null;

  switch (card.frameType.toLowerCase()) {
    case "link":
      color = "#0021CF";
      break;
    case "fusion":
      color = "#7000AD";
      break;
    case "xyz":
      color = "#242424";
      break;
    case "ritual":
      color = "#199EE1";
      break;
    case "synchro":
      color = "#E0E0E0";
      break;
    case "effect":
      color = "#C0730A";
      break;
    case "normal":
      color = "#E0DD03";
      break;
    case "trap":
      color = "#C6006F";
      break;
    case "spell":
      color = "#007504";
      break;
  }

  const universalCardInfo = () => {
    const ArcheType = card.archetype ? <p className="ml-3 text-xl text-center">Archetype : {card.archetype}</p> : undefined
    return (
      <div className="w-1/3 h-10 bg-blue-700 flex flex-col content-center">
        <img src={image.image_url} alt={card.name} />
        <TypeCard color={color} text={card.type} />
        {ArcheType}
      </div>
    );
  };


  const specialCardInfo = () => {
    if (type.includes("monster")) {
      
    } else if (type.includes("spell")) {
      
    } else if (type.includes("trap")) {
      
    } 
    return (
      <div className="w-2/3  h-10 bg-red-700">
        <h1 className="text-center w-full">{card.name}</h1>
        
      </div>
    );
  };




  return (
    <div className="w-11/12 m-auto flex flex-row h-auto bg-slate-500">
      {universalCardInfo()}
      {specialCardInfo()}
    </div>
  );
}
