import { mocked } from "../unit/variable";
import allCard from "../data/data.json";
import { urlApi } from "../unit/variable";

export async function getAllCard(params) {
  if (mocked == true) {
    const url = params
    const cards = allCard.map((card) => {
      
            return card;
    }).slice(0,30)
    const maxPage = 12
  console.log(cards)
    return {cards, maxPage};
  } else {
    const url = params
      ? `${urlApi}cards?${params.toString()}`
      : `${urlApi}cards`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
    if (!response.ok) {
      window.alert("Aucune carte n'a été trouvé");
      
      return 
    } else {
      //contient la liste de toutes les cartes et le nombre maximum de page {cards : [cards], maxPage : page}
      const JsonResponse = await response.json();
      console.log(JsonResponse)
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
  const response = await fetch(`${urlApi}cards/filter`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    window.alert("Le server n'a pas retourner les Monster Filter");
    return 
  } else {
    //contient la liste de toutes les cartes et le nombre maximum de page {cards : [cards], maxPage : page}
    const JsonResponse = await response.json();
    console.log(JsonResponse)

    return JsonResponse;
  }
}



export async function getCard(id) {
  if (mocked) {
    const card = allCard.find((card) => card.id == id);
    return card;
  }
  const response = await fetch(
    `${urlApi}cards/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    console.log("Mauvaise réponse du réseau");
  } else {
    const card = await response.json();
    return card;
  }
}

export async function userConnect(email, password){

    const response = await fetch(`${urlApi}user/login`, 
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify({
        "email" : email,
        "password" : password
    })
    })
    const JsonResponse = await response.json();
    if (!response.ok) {
      throw new Error(JsonResponse.message)
 
    }
      // contient l'id de l'utilisateur ainsi que son token de connexion
    
    console.log(JsonResponse)

    return JsonResponse;
    
}