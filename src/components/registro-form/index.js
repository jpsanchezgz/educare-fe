import React, { useState, useEffect } from 'react' 

function RegistryForm ( props ) {
    const [ newUser, setNewUser ] = useState({}) 

    const createNewUserHandler = ( event ) => {
        let value = event.target.value
        let property = event.target.name
        setNewUser( {...newUser, [property] : value} )
    }

    useEffect(() => {
        fetch("https://ajaxclass-1ca34.firebaseio.com/juanpablo/.json")
        .then( response => response.json())
        .then( json => {
            console.log(json)

        }, [])
    })
    
    const saveNewUserHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( newUser )
        };


        fetch('https://ajaxclass-1ca34.firebaseio.com/juanpablo/.json', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.href = "http://localhost:3000/home"
            });
             
    }

    return (
        <form action="registry-form">
          <span className="registry-span">Mis datos</span>
          <div className="form-group mt-2">
            <input class="form-controle" type="text" placeholder="Nombre" name="name" onChange={createNewUserHandler} />
          </div>
          <div className="form-group">
            <input class="form-controle" type="text" placeholder="Apellidos" name="lastName" onChange={createNewUserHandler} />
          </div>
          <div className="form-group">
            <input class="form-controle" type="text" placeholder="E-mail" name="email" onChange={createNewUserHandler} />
          </div>
          <div className="form-group">
            <input class="form-controle" type="password" placeholder="Contraseña" name="password" onChange={createNewUserHandler} />
          </div>
          <span className="registry-span">Datos de mi hijo</span>
          <div className="form-group mt-2">
            <input class="form-controle" type="date" placeholder="Fecha de nacimiento de tu hijo" name="kidBirthday" onChange={createNewUserHandler} />
          </div>
          <div className="form-group">
            <input class="form-controle" type="text" placeholder="Alias de tu hijo" name="kidName" onChange={createNewUserHandler} />
          </div>
          <button type="button" className="create-user-button" onClick={
              () => {
                saveNewUserHandler()
              }
          }>¡Registrarme!</button>
        </form>
    )
}

export default RegistryForm