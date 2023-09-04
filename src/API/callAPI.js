import { mocked } from "../unit/variable";
import allCard from "../data/data.json";

export async function getAllCard(params, body) {
  if (mocked) {
    const cards = allCard.map((card) => {
      return card;
    });
    return cards;
  }

console.log(params)
  const url = params ? `http://localhost:3001/cards?${params.toString()}` : "http://localhost:3001/cards"
  const response = await fetch(url, {
    
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  }, )    
      if (!response.ok) {
        console.log("Mauvaise réponse du réseau");
      } 
      else {
        //contient la liste de toutes les cartes et le nombre maximum de page {cards : [cards], maxPage : page}
        const JsonResponse = await response.json()

        return JsonResponse
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
