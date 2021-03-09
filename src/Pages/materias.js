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
                        <ActivityCard 
                        content_type={content_type}
                        category={category}
                        title={title}
                        notes={notes}
                        _id={_id}
                        />
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