import { getAllCard, getCard } from '@/API/callAPI'

export default function Home() {
  const allcard = getCard(34541863)
  return (

   <div>{allcard.name}</div>
  )
}
