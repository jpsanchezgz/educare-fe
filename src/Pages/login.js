import React, { useState } from 'react'
import RegistryForm from '../components/registro-form/index'
import LoginForm from '../components/login-form/login-form'
import logo from '../images/EduCare-Logo 200px.png'

function Login ( props ) {
    
    return(
      
      
         
          <div className="row">
            <div className="offset-md-3 col-md-6 offset-md-3 marco-login">
                <div className="">
                    <img src={logo} alt="Educare logo" width="100" />
                    <h3>Inicia sesión</h3>
                    <p>Usa tu cuenta que registraste en EduCaré</p>
                </div>
                <LoginForm />
            </div>
          </div>
        
     
    )
}

export default Login