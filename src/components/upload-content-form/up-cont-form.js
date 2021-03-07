import React, { useState, useEffect } from 'react'
import api from '../../lib/api' 

function UploadContentForm ( props ) {
    const [ newActivity, setNewActivity ] = useState({
        tags: [
          "abecedario",
          "numeros",
          "letras"
        ],
  }) 

  const token = localStorage.getItem('token')

    const createNewActivityHandler = ( event ) => {
        let value = event.target.value
        let property = event.target.name
        setNewActivity( {...newActivity, [property] : value} )
    }

    return (
        <form action="registry-form">
          <div className="form-group">
            <input className="form-controle" type="text" placeholder="Título" name="title" onChange={createNewActivityHandler} />
          </div>
          <div className="form-group">
            <input className="form-controle" type="text-area" placeholder="Notas" name="notes" onChange={createNewActivityHandler} />
          </div>
          <div className="form-group">
            <input className="form-controle" type="text-area" placeholder="Contenido" name="content" onChange={createNewActivityHandler} />
          </div>
          <div className="form-group">
                <select className="form-controle" aria-label="Default select example" name="category" onChange={createNewActivityHandler}>
                    <option selected>Open this select menu</option>
                    <option value="Lenguaje y Comunicación">Lenguaje y Comunicación</option>
                    <option value="Arte y Música">Arte y Múscia</option>
                    <option value="Pensamiento Matemático y Lógico">Pensamiento Matemático y Lógico</option>
                </select>
          </div>
          <div className="form-group">
                <select className="form-controle" aria-label="Default select example" name="content_type" onChange={createNewActivityHandler}>
                    <option selected>Open this select menu</option>
                    <option value="Video">Video</option>
                    <option value="PDF">PDF</option>
                    <option value="Lectura">Lectura</option>
                </select>
          </div>
          <div className="form-group">
            <input className="form-controle" type="text" placeholder="Url del recurso" name="link" onChange={createNewActivityHandler} />
          </div>
          <button type="button" className="create-user-button" onClick={
              () => {
                api.saveNewActivityHandler(token, newActivity)
              }
          }>¡Subir Actividad!</button>
        </form>
    )
}

export default UploadContentForm