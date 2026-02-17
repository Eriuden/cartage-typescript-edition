import {useState, useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Card } from "../components/Card"
import {getAllCards} from "../redux/actions/card.action"
import {isEmpty} from "../Utils"

export const Home = () => {
    const [loadCard, setLoadCard] = useState(false)
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()
    const cards = useSelector((state:any)=> state.allCardsReducer)
  
  
    const loadMore = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >
        document.scrollingElement!.scrollHeight)
        {
          setLoadCard(true)
        }
    }
  
    useEffect(()=> {
      if (loadCard) {
        getAllCards(count,dispatch)
        setLoadCard(false)
        setCount(count + 10)
      }
      window.addEventListener("scroll", loadMore)
    }, [loadCard, dispatch, count])
    
    return (
      <div>
        <div>
          <ul>
            {!isEmpty(cards[0]) &&
              cards.map((article:any) => {
                return <Card card={article} key={article._id}/>
            })}
          </ul>
        </div>
      </div>
    )
}