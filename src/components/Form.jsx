import React, { useState } from 'react'
import  Card  from './Card'

export const Form = () => {

    const [user, setUser] = useState({
        nombre: '',
        colorFavorito: '',
    })

    const [show, setShow] = useState(false)
    const [err, setErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(user.nombre.length >= 3 && user.colorFavorito.length >= 6) {
            setShow(true)
            setErr(false)
        } else {
            setErr(true)
        }

    }

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
            <label>Ingresa tu nombre</label>
            <input type="text" value={user.nombre} onChange={(e) => setUser({...user, nombre: e.target.value})}/>
            <label>Ingresa tu color favorito</label>
            <input type="text" value={user.colorFavorito} onChange={(e) => setUser({...user, colorFavorito: e.target.value})}/>

            <button>ENVIAR</button>
            {err && 'Por favor chequea que la informacion sea correcta'}
        </form>

        {show && <Card nombre={user.nombre} colorFavorito={user.colorFavorito}/>}
    </div>
  )
}

export default Form