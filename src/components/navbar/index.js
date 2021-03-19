import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import { Link } from "react-router-dom";
import logotype from '../../images/EduCare-Blue Text Logo.svg'
import api from '../../lib/api'

function NavBar(props) {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const token = localStorage.getItem("token")

  return (
    <div className="row navbar-className navbar-light position-fixed">
      <div className="col-12">
        <nav className="navbar navbar-expand-lg flex-wrap mb-2">
          <Link className="navbar-brand" to="/"><img src={logotype} alt="logotype de EduCaré" width="200" /></Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link" style={{ color: "#3BB4CA" }}>Inicio</Link>
              </li>
              {
                token &&
                <li className="nav-item">
                  <Link to="/materias" className="nav-link" style={{ color: "#3BB4CA" }}>Materias</Link>
                </li>
              }
              {
                token &&
                <li className="nav-item">
                  <Link to="/actividades" className="nav-link" style={{ color: "#3BB4CA" }}>Actividades</Link>
                </li>
              }
              <li className="nav-item">
                <Link to="/donacion" className="nav-link" style={{ color: "#3BB4CA" }}>Donación</Link>
              </li>
              {
                token
                ? (
                  <>
                  <button className="nav-item signup-button" type="button">
                    <Link to="/hijo" className="text-white nav-link" tabindex="-1" aria-disabled="true" onClick={async () => {
                      await api.getUserInfoHandler(token, props.setCurrentUser)
                    }}>Mi contenido</Link>
                  </button>
                  <button className="nav-item login-button" type="button">
                  <Link className="nav-link" tabindex="-1" aria-disabled="true" onClick={props.logout} style={{ color: "#FE8D03" }}>Cerrar Sesión</Link>
                  </button>
                  </>
                )
                : (
                  <>
                  <button className="nav-item login-button" type="button">
                  <Link to="/login" className="nav-link" tabindex="-1" aria-disabled="true" style={{ color: "#FE8D03" }}>Iniciar Sesión</Link>
                  </button>
                    <button className="nav-item signup-button" type="button">
                    <Link to="/signup" className="text-white nav-link" tabindex="-1" aria-disabled="true" >Regístrate</Link>
                  </button>
                  </>
                )
              }
            </ul>
          </Collapse>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
