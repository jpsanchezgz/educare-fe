import MateriaCard from '../components/materias-cards/materias-cards'

function Materias () {
    return (

        <div className="row">
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Lenguaje y comunicación"
                content="Fomenta la lectura de tus pequeños a una temprana edad."
                />
            </div>
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Pensamiento lógico"
                content="Fomenta desde pequeños el pensamiento estructurado y metódico."
                />
            </div>
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Arte y música"
                content="Ayuda a desarrollar la creatividad de tus hijos para explotar sus talentos."
                />
            </div>
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Arte y música"
                content="Ayuda a desarrollar la creatividad de tus hijos para explotar sus talentos."
                />
            </div>
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Pensamiento lógico"
                content="Fomenta desde pequeños el pensamiento estructurado y metódico."
                />
            </div>
            <div className="col-md-4 my-5">
                <MateriaCard 
                title="Lenguaje y comunicación"
                content="Fomenta la lectura de tus pequeños a una temprana edad."
                />
            </div>
        </div>
        
    )
}

export default Materias