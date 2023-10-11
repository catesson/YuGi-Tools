import { getAllCard, getCard } from '@/API/callAPI'
import { useSelector } from 'react-redux'


export default function Home() {
  const allcard = getCard(34541863)
  const userConnect = useSelector((state) => state.connect)
  console.log(userConnect)
  return (
    
   <div>{allcard.name}</div>

  )
}
