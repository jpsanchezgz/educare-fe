import React, { useState, useEffect } from 'react' 
import { useHistory } from "react-router-dom";

import {
    Link
} from 'react-router-dom'

function LoginForm ( props ) {
    const [ user, setUser ] = useState({})
    const history = useHistory(); 

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


        fetch('http://apieducare.mybluemix.net/auth/admin/login', requestObject)
            .then( data => {
              return data.json();
            })
            .then( data => {
              if (data.success) {
                console.log(data.data.token);
                localStorage.setItem("token", data.data.token);
                history.push("/");
              } else {
                console.log("Tus datos son incorrectos.");
              }
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