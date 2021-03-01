import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function WarningBar ( props ) {

    
    return(
        <div className="row">
            <div className="warning-bar col-12 col-md-4 offset-md-4 p-2 mt-3">
                <FontAwesomeIcon icon={faExclamationCircle} size="1x" className="mx-2 mt-2"></FontAwesomeIcon>
                <span className="warning-content">
                    {`Inicia sesión para ver ${props.title} o si no tienes cuenta aún `}
                    <Link to="/signup">regístrate aquí</Link>
                </span>
            </div>
        </div>
    )
}

export default WarningBar