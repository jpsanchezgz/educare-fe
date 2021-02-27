import image from '../images/registry.png';
import React, { useState } from 'react'
import UploadContentForm from '../components/upload-content-form/up-cont-form';


function Admin ( props ) {
    return(
      
        <>
          {/* <div className="green-circle"></div> */}
          <div className="row">
            {/* registro y form */}
            <div className="col-md-5 p-5 signup-row">
              <div className="">
                <h2 className="text-left">¡Crea nuevo contenido!</h2>
                <p className="text-left">Recuerda meter los datos Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur in porro consectetur. Possimus veniam ratione ex, nobis culpa voluptatum libero, maxime saepe odit corrupti natus.</p>
              </div>
              <img className="reg-3d-pic" src={image} alt="asdfasdf" />
            </div>
            <div className="d-none d-md-block col-md-1 vlc">
              <div className="vl mr-5"></div>
            </div>
            <div className="col-md-6 my-3 p-5">
              <UploadContentForm />
            </div>
          </div>
        </>
     
    )
}

export default Admin