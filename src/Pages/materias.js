import React, { useState, useEffect } from 'react'

import MateriaCard from '../components/materias-cards/materias-cards'
import SearchBar from '../components/searchbar/search-bar'
import api from '../lib/api'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import PDF from '../images/Pdf-icon.svg'
import Video from '../images/Video-icon.svg'
import Book from '../images/book-solid.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function Materias(props) {
    const [materias, setMaterias] = useState([
        {
            title: "Lenguaje y comunicación",
            content: "Fomenta la lectura de tus pequeños a una temprana edad."
        },
        {
            title: "Pensamiento lógico y estructurado",
            content: "Fomenta desde pequeños el pensamiento estructurado y metódico."
        },
        {
            title: "Arte y música",
            content: "Ayuda a desarrollar la creatividad de tus hijos para explotar sus talentos."
        },
        {
            title: "Desarrollo emocional y social",
            content: "Fomenta la lectura de tus pequeños a una temprana edad."
        },
        {
            title: "Arte y música II",
            content: "Fomenta desde pequeños el pensamiento estructurado y metódico."
        },
        {
            title: "Desarrollo intelectual y cognitivo",
            content: "Ayuda a desarrollar la creatividad de tus hijos para explotar sus talentos."
        },
        {
            title: "Lenguaje y comunicación II",
            content: "Fomenta la lectura de tus pequeños a una temprana edad."
        },
        {
            title: "Pensamiento lógico y estructurado II",
            content: "Fomenta desde pequeños el pensamiento estructurado y metódico."
        },
        {
            title: "Arte y música III",
            content: "Ayuda a desarrollar la creatividad de tus hijos para explotar sus talentos."
        },

    ])

    const [filterdMaterias, setFilteredMaterias] = useState(null)
    const [activitiesList, setActivitesList] = useState(null)
    const [filteredActivitiesList, setFilteredActivitiesList] = useState(null)

    useEffect(async () => {
        setActivitesList(await api.getAllActivities(props.token))
    }, [])

    const filterByMateriaHandler = (event) => {
        let value = event.target.name.toLowerCase()
        if(activitiesList) {
            let filteredArrayActivities = activitiesList.data.filter(activity => {
                return activity.category.toLowerCase().includes(value)
            })
            setFilteredActivitiesList(filteredArrayActivities)
            console.log(value)
            console.log(filteredActivitiesList)
        }
    }

    const filterHandler = (event) => {
        let value = event.target.value.toLowerCase()
        let filteredArrayMaterias = materias.filter(materia => {
            return materia.title.toLowerCase().includes(value)
        })

        setFilteredMaterias(filteredArrayMaterias)
    }
    const goBackHandler = () => {
        setFilteredActivitiesList(null)
        setFilteredMaterias(null)
    }

    return (
        filteredActivitiesList
            ? <>
                <div className="col-12 col-md-5 d-flex mb-5">
                    <Link to="/materias" style={{ textDecoration: 'none' }}>
                        <Button className=" butn-standard" onClick={goBackHandler}>Regresar</Button>
                    </Link>
                </div>
                <div className="row actividades-row">
                {filteredActivitiesList.map(actividad => {
                    let { content_type, title, notes, _id, category } = actividad
                    return (
                        <div className="col-12 col-md-3 d-flex my-3 activities-card">
                            <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                                <div className="my-1">
                                    <div>
                                        {
                                            content_type === "Lectura" ? <img src={Book} alt="PDF icon" width="100" />
                                                : content_type === "Video musical" ? <img src={Video} alt="PDF icon" width="100" />
                                                    : <img src={PDF} alt="PDF icon" width="100" />
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
                                <button className="plus-icon" type="button" onClick={ async () => await api.addActivityToMyContentHandler(props.token , _id)}>
                                    <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                    )
                })
                }
                </div>
            </>
            :
            <>
                <div className="row ml-5">
                    <div className="col-6">
                        <SearchBar
                            filterH={filterHandler}
                            texto="Busca por nombre de materia..."
                        />
                    </div>
                </div>
                <div className="row mb-5 px-5">
                    {
                        filterdMaterias
                            ? filterdMaterias.map(materia => {
                                return (
                                    <div className="col-lg-4 my-3">
                                        <MateriaCard
                                            title={materia.title}
                                            content={materia.content}
                                            filterByMateriaHandler={filterByMateriaHandler}

                                        />
                                    </div>
                                )
                            })
                            : materias.map(materia => {
                                return (
                                    <div className="col-lg-4 my-3">
                                        <MateriaCard
                                            title={materia.title}
                                            content={materia.content}
                                            filterByMateriaHandler={filterByMateriaHandler}

                                        />
                                    </div>
                                )
                            })
                    }
                </div>
            </>

    )
}

export default Materias