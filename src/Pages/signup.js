import image from '../images/registry.svg';
import React, { useState } from 'react'
import RegistryForm from '../components/registro-form/index'

function Registro ( props ) {
    return(
      
        <>
          {/* <div className="green-circle"></div> */}
          <div className="row">
          <div className="col-12 margin-page"></div>
            {/* registro y form */}
            <div className="col-md-6 p-3 pl-5 signup-row">
              <div className="">
                <h2 className="text-left">Regístrate</h2>
                <p className="text-left">Completa el formulario para crear tu cuenta, al registrarte podrás acceder a material educativo y sus actividades.</p>
              </div>
              <img className="reg-3d-pic" src={image} alt="asdfasdf" />
            </div>
            <div className="d-none d-md-block col-md-1 vlc">
              <div className="vl mr-5"></div>
            </div>
            <div className="col-md-5 my-3 p-3 pr-5">
              <RegistryForm />
            </div>
          </div>
        </>
     
    )
}

export default Registro