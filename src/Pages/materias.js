import React, { useState, useEffect } from 'react'
import MateriaCard from '../components/materias-cards/materias-cards'
import SearchBar from '../components/searchbar/search-bar'
import api from '../lib/api'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import ActivityCard from '../components/activity-card/activity-card'


function Materias(props) {
    const [materias, setMaterias] = useState([
        {
            title: "Lenguaje y comunicación",
            content: "Fomenta la lectura de tus pequeños.",
            enabled: true,
        },
        {
            title: "Pensamiento lógico y estructurado",
            content: "Fomenta el pensamiento estructurado y metódico.",
            enabled: false,
        },
        {
            title: "Arte y música",
            content: "Explota sus talentos y desarrolla su creatividad.",
            enabled: false,
        },
        {
            title: "Desarrollo emocional y social",
            content: "Fortalece a tu pequeño desde su interior.",
            enabled: false,
        },
        {
            title: "Arte y música II",
            content: "Explota sus talentos y desarrolla su creatividad.",
            enabled: false,
        },
        {
            title: "Desarrollo intelectual y cognitivo",
            content: "Ayuda a desarrollar la creatividad de los pequeños.",
            enabled: false,
        },
        {
            title: "Lenguaje y comunicación II",
            content: "Fomenta la lectura de tus pequeños.",
            enabled: false,
        }

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
            ? <div className="row m-4 justify-content-center">
                <div className="col-12 mb-5 margin-page">
                    <Link to="/materias" style={{ textDecoration: 'none' }}>
                        <Button className=" butn-standard" onClick={goBackHandler}>Regresar</Button>
                    </Link>
                </div>
                {filteredActivitiesList.map(actividad => {
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
                })
                }
            </div>
            :
            <>
                <div className="row d-flex flex-column justify-content-center">
                    <div className="margin-page col-12">
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-center mt-4">
                            <SearchBar
                                filterH={filterHandler}
                                texto="Busca por materia..."
                            />
                        </div>
                    </div>
                    <div className="row mb-5 px-5">
                        {
                            filterdMaterias
                                ? filterdMaterias.map(materia => {
                                    return (
                                        <div className="col-lg-3 my-4">
                                            <MateriaCard
                                                title={materia.title}
                                                content={materia.content}
                                                enabled={materia.enabled}
                                                filterByMateriaHandler={filterByMateriaHandler}

                                            />
                                        </div>
                                    )
                                })
                                : materias.map(materia => {
                                    return (
                                        <div className="col-lg-3 my-4">
                                            <MateriaCard
                                                title={materia.title}
                                                content={materia.content}
                                                enabled={materia.enabled}
                                                filterByMateriaHandler={filterByMateriaHandler}

                                            />
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
            </>

    )
}

export default Materias