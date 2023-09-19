import { mocked } from "../unit/variable";
import allCard from "../data/data.json";

export async function getAllCard(params) {
  if (mocked) {
    const url = params
    const cards = allCard.map((card) => {
      
            return card;
    }).slice(0,30)
    const maxPage = 12
console.log(cards)
    return {cards, maxPage};
  } else {
    const url = params
      ? `http://localhost:3001/cards?${params.toString()}`
      : "http://localhost:3001/cards";
      console.log(url)
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      window.alert("Mauvaise réponse du réseau");
      
      return 
    } else {
      //contient la liste de toutes les cartes et le nombre maximum de page {cards : [cards], maxPage : page}
      const JsonResponse = await response.json();

      return JsonResponse;
    }
  }
}

export async function getFilter() {
  if (mocked) {
    const attribute = ['fire', 'water']
    const race = ['warrior', "fairy"]
    return {attribute, race}
  } 
  const response = await fetch("http://localhost:3001/cards/filter", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    window.alert("Le server n'a pas retourner les Monster Filter");
    return 
  } else {
    //contient la liste de toutes les cartes et le nombre maximum de page {cards : [cards], maxPage : page}
    const JsonResponse = await response.json();
  

    return JsonResponse;
  }
}



export async function getCard(id) {
  if (mocked) {
    const card = allCard.find((card) => card.id == id);
    return card;
  }
  const response = await fetch(
    `http://localhost:3001/cards/${id}`,
    { next: { revalidate: 40 } },
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    s;
    console.log("Mauvaise réponse du réseau");
  } else {
    const card = await response.json();
    return card;
  }
}
