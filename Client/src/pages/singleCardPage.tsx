import { getCard } from '../redux/actions/card.action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

export const SingleCardPage = () => {

  type appDispatch = () => any
  const card = useSelector((state: any) => state.cardReducer)
  const useAppDispatch = () => useDispatch<appDispatch>()
  const dispatch = useAppDispatch()

    useEffect(() => {
        getCard(card, dispatch)
      })
  return (
    <div>
        <h2>{card.name}</h2>
        <img src={card.picturte} alt="image us"/>
        <h2>{card.power}</h2>
        <h2>{card.nation}</h2>
        <h2>{card.effect}</h2>
        <h2>{card.price}</h2>
    </div>
  )
}
