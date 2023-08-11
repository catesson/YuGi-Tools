import { mocked } from "../unit/variable";
import allCard from "../data/data.json"
export function getAllCard(){

    if (mocked){
        const cards = allCard.map(card => {
            return (card)
        })
        return cards
}


}

export function getCard(id){
    if (mocked){
        const card = allCard.find((card) => card.id == id)
        return card
}
}