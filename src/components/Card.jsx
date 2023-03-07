import React from 'react'

export const Card = ({nombre, colorFavorito}) => {
  return (
    <div>
        <h3>Hola {nombre}, sabemos que tu color favorito es el {colorFavorito}</h3>
    </div>
  )
}

export default Card