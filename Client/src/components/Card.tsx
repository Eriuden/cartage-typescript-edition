import React from 'react'

export default function Card(card:any) {
  return (
    <div>
        <img src={card.picture} alt= "image de carte" />
        <h2>{card.name}</h2>
        <h3>{card.power}</h3>
        <h3>{card.shield}</h3>
        <p>{card.effect}</p>
        <h3>{card.nation}</h3>
    </div>
  )
}
