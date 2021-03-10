import React, { useState, useEffect } from 'react'
import api from '../lib/api';
import FiltroBar from '../components/filtros-bar/filtros-bar'
import ActivityCard from '../components/activity-card/activity-card'
import ModalMeesage from '../components/modal-message/modal-message'

function Actividades(props) {
    const [activitiesList, setActivitesList] = useState(null)
    const [filteredActivitiesList, setFilteredActivitiesList] = useState(null)


    useEffect(async () => {
        setActivitesList(await api.getAllActivities(props.token))
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

    return (
        <>
        <div className="row actividades-row">
            <div className="col-12 text-left margin-page">
                <ModalMeesage />
                <h2>Actividades</h2>
                <p>En esta página encontrarás todo el material disponible de EduCaré, haz clic sobre el tipo de recurso que quieras ver. Videos, libros o PDFs. Agrégalos a tu contenido y revísalos las veces que quieras.</p>
            </div>
            <FiltroBar
                filterActivitiesHandler={filterActivitiesHandler}
                getAllActivitiesHandler={getAllActivitiesHandler}
            />
        </div>
        <div className="row m-4 justify-content-center">
            {
                filteredActivitiesList
                    ? filteredActivitiesList.map(actividad => {
                        let { content_type, title, notes, _id, category } = actividad
                        return (
                            <ActivityCard
                                content_type={content_type}
                                category={category}
                                title={title}
                                notes={notes}
                                _id={_id}
                                token={props.token}
                            />
                        )
                    }).reverse()
                    : activitiesList && activitiesList.data.map(actividad => {
                        let { content_type, title, notes, _id, category } = actividad
                        return (
                            <ActivityCard
                                content_type={content_type}
                                category={category}
                                title={title}
                                notes={notes}
                                _id={_id}
                                token={props.token}
                            />
                        )
                    }).reverse()
            }
        </div>
        </>
    )
}

export default Actividades