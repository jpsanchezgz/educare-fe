import React, { useState } from 'react';
import {
  Collapse,
  NavbarToggler,
} from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logotype from '../../images/EduCare-Text-Logo-200px.svg'

function NavBar () {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
      <nav className="navbar navbar-expand-lg navbar-light navbar-className flex-wrap">
        <Link className="navbar-brand" to="/"><img src={logotype} alt="logotype de EduCaré" width="200" /></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <form className="form-inline my-2 my-lg-0">
            <div className="search-component">
              <input className=" search-input mr-sm-2" type="search" placeholder="Buscador..." aria-label="Search" />
              <button className="search-button my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></button>
            </div>
          </form>
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item active">
              <Link to="/" className="nav-link" >Inicio<span className="sr-only">(current)</span></Link>
            </li> */}
            <li className="nav-item">
              <Link to="/materias" className="nav-link" >Materias</Link>
            </li>
            <li className="nav-item">
              <Link to="/actividades" className="nav-link" >Actividades</Link>
            </li>
            <button className="nav-item login-button" type="button">
              <Link to="/login" className="nav-link" tabindex="-1" aria-disabled="true">Iniciar Sesión</Link>
            </button>
            <button className="nav-item signup-button" type="button">
              <Link to="/signup" className="text-white nav-link" tabindex="-1" aria-disabled="true">Regístrate</Link>
            </button>
          </ul>
        </Collapse>
      </nav>
    )
}

export default NavBar
