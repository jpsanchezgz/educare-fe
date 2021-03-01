import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PDF from '../images/Pdf-icon.svg'
import Video from '../images/Video-icon.svg'
import Book from '../images/book-solid.svg'
import ThreeIcons from '../images/three-resources-icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import api from '../lib/api';
import ActivityDetail from './../components/activity-detail/activity';

function Actividades () {
    const [activitiesList, setActivitesList ] = useState(null)
    const [filteredActivitiesList, setFilteredActivitiesList ] = useState(null)

    useEffect( async () => {
        setActivitesList( await api.getAllPosts() )
    }, [])

    const filterActivitiesHandler = (event) => {
        let value = event.target.name.toLowerCase()
        let filteredArrayActivities = activitiesList.data.filter(activity => {
            return activity.content_type.toLowerCase().includes(value)
        })

        setFilteredActivitiesList(filteredArrayActivities)
        console.log(value)
        console.log(filteredActivitiesList)
    }

    const getAllActivitiesHandler = () => {
        setFilteredActivitiesList(null)
    }

    const deleteActivity = (id) => {
        fetch(`http://apieducare.mybluemix.net/resources/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzA1ZDAzODM5ZjFmNDI1YTRlYTk4NiIsImlhdCI6MTYxMzc5OTgzMn0.hifm17Knm06wZtjB4WcdwG0EL90g9ndnkgOlkXKsK-U"
            }
        })
        .then( data => {
            return data.json()
          })
          .then( data => {
            if (data.success) {
                console.log("Se borró el recurso exitósamente.")
                window.location.reload()
            } else {
              console.error("Error: ", data.error)
            }
          })
    }

    const Lectura =  <FontAwesomeIcon icon={faBook} size="2x" color="#3E6C5F"></FontAwesomeIcon>

    return(
    
        <div className="row">
            <div className="col-12 col-md-11 text-left offset-md-1">
                <h2>Actividades</h2>
                <p>Busca las actividades que quisieras tomar. Recuerda que puedes filtrar por tipo de recurso. ¡Videos, lecturas, y PDFs! Todos y más de lo que pediste.</p>
            </div>
            <div className="col-12 col-md-11 text-left offset-md-1 filter-buttons-component">
                <h3>Filtros</h3>
            </div>
            <div className="col-12 col-md-3">
                <button className="filter-buttons-activities" onClick={filterActivitiesHandler}>
                    <img src={Book} alt="Book icon created by Font Awesome " name="Lectura" width="65"/>
                </button>
            </div>
            <div className="col-12 col-md-3">
                <button className="filter-buttons-activities" onClick={filterActivitiesHandler}>
                    <img src={Video} alt="Video icon" name="Video"/>
                </button>
            </div>
            <div className="col-12 col-md-3">
                <button className="filter-buttons-activities" onClick={filterActivitiesHandler}>
                    <img src={PDF} alt="PDF icon" name="PDF"/>
                </button>
            </div>
            <div className="col-12 col-md-3">
                <button className="filter-buttons-activities" onClick={getAllActivitiesHandler}>
                    <img src={ThreeIcons} alt="PDF icon" name="PDF" width="100"/>
                </button>
            </div>
            {
                filteredActivitiesList
                ? filteredActivitiesList.map( actividad => {
                    let { content_type, title, notes, _id } = actividad
                    return (
                        <div className="col-12 d-flex align-items-center justify-content-center flex-wrap my-3">
                            <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                                <div className="col-12 d-flex align-items-center my-1">
                                    <div>
                                        {
                                            content_type === "Lectura" ? Lectura
                                            : content_type === "Video musical" ? <img src={Video} alt="PDF icon" width="50"/>
                                            : <img src={PDF} alt="PDF icon" width="50"/>
                                        }
                                    </div>
                                    <div className="d-flex flex-column text-left ml-3">
                                        <strong>{title}</strong>
                                        <span>{notes}</span>
                                    </div>
                                </div>
                            </Link>
                            <div className="px-1">
                                <button className="check-icon" type="button" onClick={ () => deleteActivity(_id)}>
                                    <FontAwesomeIcon icon={faTrashAlt} size="1x" color="red"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    )
                }).reverse()
                : activitiesList && activitiesList.data.map( actividad => {
                    let { content_type, title, notes, _id } = actividad
                    return (
                        <div className="col-12 d-flex align-items-center justify-content-center flex-wrap my-3">
                            <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                                <div className="col-12 d-flex align-items-center my-1">
                                    <div>
                                        {
                                            content_type === "Lectura" ? Lectura
                                            : content_type === "Video musical" ? <img src={Video} alt="PDF icon" width="50"/>
                                            : <img src={PDF} alt="PDF icon" width="50"/>
                                        }
                                    </div>
                                    <div className="d-flex flex-column text-left ml-3">
                                        <strong>{title}</strong>
                                        <span>{notes}</span>
                                    </div>
                                </div>
                            </Link>
                            <div className="px-1">
                                <button className="check-icon" type="button" onClick={ () => deleteActivity(_id)}>
                                    <FontAwesomeIcon icon={faTrashAlt} size="1x" color="red"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    )
                }).reverse()
            }
        </div>

    )
}

export default Actividades