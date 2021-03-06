import MyCarousel from "../components/carousel/carousel"
import MainButton from "../components/buttons/main-button"
import bwwpImage from '../images/black-woman-pencil.png'
import PQS from '../components/parr-quienes-somos/parr-quienes-somos'
import { Link } from 'react-router-dom'

function Home () {
    return(
        <>
        
            <div className="row first-home-row">
                <div className="col-12">
                    <MyCarousel />
                </div>
            </div>
        
        
            <div className="row second-row">
                <div className="col-12 qs-row-1 px-5 my-5">
                    <h2 className="titles">¿Quiénes somos?</h2>
                    <PQS />
                </div>
            </div>

            <div className="row second-row">
                <div className="col-12 col-md-6 qs-row-2 px-5 mb-5">
                    <h2 className="titles text-left">Campos de formación académica</h2>
                    <p>Selecciona una de las siguientes materias para acceder a sus actividades.</p>
                    <Link to="/actividades" style={{textDecoration: "none"}}><MainButton name="Lenguaje y comunicación"/></Link>
                    <Link to="/actividades" style={{textDecoration: "none"}}><MainButton name="Pensamiento matemático"/></Link>
                    <Link to="/actividades" style={{textDecoration: "none"}}><MainButton name="Comprensión natural y social"/></Link>
                </div>
                <div className="col-12 col-md-6 bwwpCol">
                    <img src={bwwpImage} alt="" className="bwwp"/>
                </div>
            </div>
        
        
        </>
    )
}

export default Home