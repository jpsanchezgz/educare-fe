import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PDF from '../images/Pdf-icon.svg'
import Video from '../images/Video-icon.svg'
import Book from '../images/book-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import api from '../lib/api';
import ActivityDetail from './../components/activity-detail/activity';
import FiltroBar from '../components/filtros-bar/filtros-bar'

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

    const token = localStorage.getItem('token')

    return(
    
        <div className="row actividades-row">
            <div className="col-12 text-left">
                <h2>Actividades</h2>
                <p>En esta página encontrarás todo el material disponible de EduCaré, haz clic sobre el tipo de recurso que quieras ver. Videos, libros o PDFs. Agrégalos a tu contenido y revísalos las veces que quieras.</p>
            </div>
            <FiltroBar 
            filterActivitiesHandler={filterActivitiesHandler}
            getAllActivitiesHandler={getAllActivitiesHandler}
            />
            {
                filteredActivitiesList
                ? filteredActivitiesList.map( actividad => {
                    let { content_type, title, notes, _id, category } = actividad
                    return (
                        <div className="col-12 col-lg-3 d-lg-flex my-3 activities-card">
                            <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                                <div className="my-1">
                                    <div>
                                        {
                                            content_type === "Lectura" ? <img src={Book} alt="PDF icon" width="100"/>
                                            : content_type === "Video musical" ? <img src={Video} alt="PDF icon" width="100"/>
                                            : <img src={PDF} alt="PDF icon" width="100"/>
                                        }
                                    </div>
                                    <div className="d-flex flex-column text-left ml-3">
                                        <strong className="activity-title">{title}</strong>
                                        <span>{notes}</span>
                                        <small className="mt-3">{category}</small>
                                    </div>
                                </div>
                            </Link>
                            <div className="px-1">
                                <button className="plus-icon d-none d-lg-block" type="button" onClick={ async () => await api.deleteActivity(_id, token)}>
                                    <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                                </button>
                                <button className="add-act-button d-lg-none mt-3" type="button" onClick={ async () => await api.deleteActivity(_id, token)}>
                                    Agregar a mis actividades
                                </button>
                            </div>
                        </div>
                    )
                }).reverse()
                : activitiesList && activitiesList.data.map( actividad => {
                    let { content_type, title, notes, _id, category } = actividad
                    return (
                        <div className="col-12 col-lg-3 d-lg-flex my-3 activities-card">
                            <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                                <div className="my-1">
                                    <div>
                                        {
                                            content_type === "Lectura" ? <img src={Book} alt="PDF icon" width="100"/>
                                            : content_type === "Video musical" ? <img src={Video} alt="PDF icon" width="100"/>
                                            : <img src={PDF} alt="PDF icon" width="100"/>
                                        }
                                    </div>
                                    <div className="d-flex flex-column text-left ml-3">
                                        <strong className="activity-title">{title}</strong>
                                        <span>{notes}</span>
                                        <small className="mt-3">{category}</small>
                                    </div>
                                </div>
                            </Link>
                            <div className="px-1">
                                <button className="plus-icon d-none d-lg-block" type="button" onClick={ async () => await api.deleteActivity(_id, token)}>
                                    <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                                </button>
                                <button className="add-act-button d-lg-none mt-3" type="button" onClick={ async () => await api.deleteActivity(_id, token)}>
                                    Agregar a mis actividades
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