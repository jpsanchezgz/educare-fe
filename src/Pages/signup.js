import image from '../images/registry.png';
import React, { useState } from 'react'
import RegistryForm from '../components/registro-form/index'

function Registro ( props ) {
    return(
      
        <>
          {/* <div className="green-circle"></div> */}
          <div className="row">
            {/* registro y form */}
            <div className="col-md-5 p-5 signup-row">
              <div className="">
                <h2 className="text-left">Regístrate</h2>
                <p className="text-left">Para registrarte necesitas crear tu cuenta llenando este formulario con tu información un par de datos de tu hijo. Después de este paso, podrás acceder al material educativo y sus actividades.</p>
              </div>
              <img className="reg-3d-pic" src={image} alt="asdfasdf" />
            </div>
            <div className="d-none d-md-block col-md-1 vlc">
              <div className="vl mr-5"></div>
            </div>
            <div className="col-md-6 my-3 p-5">
              <RegistryForm />
            </div>
          </div>
        </>
     
    )
}

export default Registro