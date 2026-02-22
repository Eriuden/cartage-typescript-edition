import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCards } from "../redux/actions/card.action"
import Card from "./Card"
import { isEmpty } from "../utils"

export const Searcher = () => {

    type appDispatch = () => any
    const [search, setSearch] = useState("")
    const cards = useSelector((state: any) => state.allCardsReducer)
    const useAppDispatch = () => useDispatch<appDispatch>()
    const dispatch = useAppDispatch()

    useEffect(()=> {
        getAllCards(cards, dispatch)
    }, [search])

    const handleSearchChange = (e: any) => {
        setSearch(e.target.value)

        const result = cards.filter((card: any)=> card.name.toLowerCase()
        .includes(search.toLowerCase()) 
        || card.nation.toLowerCase().includes(search.toLowerCase())
        || card.grade.toLowerCase().includes(search.toLowerCase()))

        setSearch(result)
    }
  return (
    <div className='flex justify-center'>
      <form action='' className='border-2 rounded-sm my-4 max-w-[100%] border-black'>
        <input className='text-center' type="text" placeholder="card/nation/grade"
        onChange={handleSearchChange} value={search}/>
      </form>

      <div>
        { !isEmpty(cards[0]) && search !="" ? (
          cards.map((card:any) => {
            if (card.name.includes(search)){
              <Card articleProps={card} key={card._id}/>
            }
          })
        ): ""}
      </div>
    </div>
  )
}