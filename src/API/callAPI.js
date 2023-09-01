import { mocked } from "../unit/variable";
import allCard from "../data/data.json";

export async function getAllCard(params) {
  if (mocked) {
    const cards = allCard.map((card) => {
      return card;
    });
    return cards;
  }
  const url = params ? `http://localhost:3001/cards?${params}` : "http://localhost:3001/cards"
  const response = await fetch(url, {
    
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }, )    
      if (!response.ok) {s
        console.log("Mauvaise réponse du réseau");
      } 
      else {
        const cards = await response.json()
        return cards
      }
}
export async function getCard(id) {
  if (mocked) {
    const card = allCard.find((card) => card.id == id);
    return card;
  }
  const response = await fetch(`http://localhost:3001/cards/${id}`, {next: { revalidate: 40}}, {
    
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }, )    
      if (!response.ok) {s
        console.log("Mauvaise réponse du réseau");
      } 
      else {
        
        const card = await response.json()
        return card
      }
}
