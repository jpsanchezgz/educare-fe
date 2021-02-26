import MyCarousel from "../components/carousel/carousel"
import MainButton from "../components/buttons/main-button"
import bwwpImage from '../images/black-woman-pencil.png'

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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, ut veritatis. Laboriosam, hic ipsum adipisci molestias pariatur eum earum deserunt cumque rerum voluptatem laborum ea illum eveniet perferendis consectetur dolores qui, corporis expedita quam ad?</p>
                </div>
            </div>

            <div className="row second-row">
                <div className="col-12 col-md-6 qs-row-2 px-5 mb-5">
                    <h2 className="titles text-left">Campos de formación académica</h2>
                    <MainButton name="Lenguaje y comunicación"/>
                    <MainButton name="Pensamiento matemático"/>
                    <MainButton name="Comprensión natural y social"/>
                </div>
                <div className="col-12 col-md-6 bwwpCol">
                    <img src={bwwpImage} alt="" className="bwwp"/>
                </div>
            </div>
        
        
        </>
    )
}

export default Home