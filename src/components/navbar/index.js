import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function NavBar () {
    return(
      
      <nav class="navbar navbar-expand-lg navbar-light navbar-class">
        <a class="navbar-brand" href="#">EducApp Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <div class="search-component">
              <input class=" search-input mr-sm-2" type="search" placeholder="Buscador..." aria-label="Search"/>
              <button class="search-button my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></button>
          </div>
        </form>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link to="/catalogo" class="nav-link" >Catálogo</Link>
            </li>
            <li class="nav-item">
              <Link to="/formacion" class="nav-link" >Formación</Link>
            </li>
            <li class="nav-item">
              <Link to="/actividades" class="nav-link" >Actividades</Link>
            </li>
            <button class="nav-item login-button" type="button">
              <Link to="/login" class="nav-link" tabindex="-1" aria-disabled="true">Inicia Sesión</Link>
            </button>
            <button class="nav-item signup-button" type="button">
              <Link to="/signup" class="text-white nav-link" tabindex="-1" aria-disabled="true">Regístrate</Link>
            </button>
          </ul>
          </div>
        </nav>
    )
}

export default NavBar
