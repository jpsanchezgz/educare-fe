import React, {useState, useEffect } from 'react'
import PDF from '../images/Pdf-icon.svg'
import Video from '../images/Video-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import api from '../lib/api'

function Actividades () {
    const [activitiesList, setActivitesList ] = useState(null)

    useEffect( async () => {
        setActivitesList( await api.getAllPosts() )
    }, [])

    const Lectura =  <FontAwesomeIcon icon={faBook} size="2x" color="#3E6C5F"></FontAwesomeIcon>
    return(
        <div className="row">
            <div className="col-12 col-md-11 text-left offset-1">
                <h2>Actividades</h2>
                <p>Busca las actividades que quisieras tomar. Recuerda que puedes filtrar por tipo de recurso. ¡Videos, lecturas, y PDFs! Todos y más de lo que pediste.</p>
            </div>
            <div className="col-12 col-md-4 my-2">
            <FontAwesomeIcon icon={faBook} size="4x" color="#3E6C5F"></FontAwesomeIcon>
            </div>
            <div className="col-12 col-md-4">
                <img src={Video} alt="Video icon"/>
            </div>
            <div className="col-12 col-md-4">
                <img src={PDF} alt="PDF icon"/>
            </div>
            {
                activitiesList && activitiesList.data.map( actividad => {
                    let { content_type, title, notes } = actividad
                    return (
                        <div className="col-12 d-flex align-items-center my-3">
                            <div className="">
                                {
                                    content_type !== "lectura"
                                        ? <img src={Video} alt="Video icon" width="40"/>
                                        : Lectura
                                }

                            </div>
                            <div className="d-flex flex-column text-left ml-3">
                                <strong>{title}</strong>
                                <span>{notes}</span>
                            </div>
                            <div className="px-1">
                            <button className="check-icon"type="button">
                            <FontAwesomeIcon icon={faTrashAlt} size="1x" color="red"></FontAwesomeIcon>
                            </button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Actividades