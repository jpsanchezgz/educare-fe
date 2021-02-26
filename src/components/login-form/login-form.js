import React, { useState, useEffect } from 'react' 

import {
    Link
} from 'react-router-dom'

function LoginForm ( props ) {
    const [ user, setUser ] = useState({}) 

    const createLoginHandler = ( event ) => {
        let value = event.target.value
        let property = event.target.name
        setUser( {...user, [property] : value} )
    }
    
    const sendLoginHandler = () => {
        const requestObject = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( user )
        };


        fetch('https://ajaxclass-1ca34.firebaseio.com/juanpablo/users.json', requestObject)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                window.location.href = "http://localhost:3000/"
            });
             
    }

    return (
        <form action="registry-form">
          <div className="form-group">
            <input className="form-controle" type="text" placeholder="E-mail" name="email" onChange={createLoginHandler} />
          </div>
          <div className="form-group text-left">
            <input className="form-controle mb-3" type="password" placeholder="Contraseña" name="password" onChange={createLoginHandler} />
            <span><a href="">¿Olvidaste tu contraseña?</a></span>
          </div>

          <div className="d-flex justify-content-around align-items-center">
          <Link to="/signup"><span className="first-sign-up">Registrarme</span></Link>
          <button type="button" className="loginform-button" onClick={
              () => {
                sendLoginHandler()
              }
          }>Iniciar sesión</button>
          </div>

        </form>
    )
}

export default LoginForm