import React from 'react'

export const Card = ({nombre, colorFavorito}) => {
  return (
    <div>
        <h3>Hola {nombre}, Sabemos que tu color favorito es {colorFavorito}</h3>
    </div>
  )
}
