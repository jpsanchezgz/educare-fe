import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar ( props ) {

    return(
        <form className="form-inline my-2 my-lg-0">
            <div className="search-component-bar">
                <input className="search-input-component mr-sm-2" type="search" placeholder="Buscador..." aria-label="Search" onChange={props.filterH}/>
                <button className="search-button-component my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faSearch} ></FontAwesomeIcon></button>
            </div>
        </form>
    )
}

export default SearchBar