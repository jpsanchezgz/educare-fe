import React, {useState, useEffect } from 'react'

import MateriaCard from '../components/materias-cards/materias-cards'
import SearchBar from '../components/searchbar/search-bar'


function Materias ( props ) {
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

    const [filterdMaterias, setFilteredMaterias ] = useState(null)

    const filterHandler = ( event ) => {
        let value = event.target.value.toLowerCase()
        let filteredArrayMaterias = materias.filter(materia => {
            return materia.title.toLowerCase().includes(value)
        })

        setFilteredMaterias(filteredArrayMaterias)
    }

    return (
        <>
            <div className="row ml-5">
                <div className="col-6">
                    <SearchBar 
                    filterH={filterHandler}
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