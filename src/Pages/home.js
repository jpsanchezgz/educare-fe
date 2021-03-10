import MyCarousel from "../components/carousel/carousel"
import MainButton from "../components/buttons/main-button"
import bwwpImage from '../images/black-woman-pencil.png'
import PQS from '../components/parr-quienes-somos/parr-quienes-somos'
import { Link } from 'react-router-dom'
import fotoJP from '../images/foto-jp.png'
import fotoPete from '../images/foto-pete.png'
import fotoCin from '../images/cinthia-foto.png'
import PicCard from "../components/home-components/pictures"
import CallButton from '../components/buttons/call-button'
import donatesvg from '../images/PayPal-Donate 1.svg'
import DonateButton from '../components/papyal-button/donate-button'
import BenefitCard from "../components/home-components/benefit-card"
import Resources from '../images/three-resources-icon-g.svg'
import plusActs from '../images/school-solid.svg'
import table from '../images/table-solid.svg'
import free from '../images/hand-holding-usd-solid.svg'
import bmi from '../images/black-man.jpeg'
import niñaCubre from '../images/niña-cubrebocas.jpg'
import estadisticas from '../images/estadistics.jpg'
import ymi from '../images/yellow-man.jpeg'
import rmi from '../images/idea-red-man.jpeg'

function Home(props) {
    return (
        <>

            <div className="row first-home-row">
            <div className="col-12 margin-page"></div>
                <div className="col-12">
                    <MyCarousel />
                </div>
                {
                    !props.token &&
                    <div className="col-12 my-5">
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <CallButton name="Sí, quiero ayudar a mi hija" />
                        </Link>
                        <h2 className="titles my-5">EduCaré es la guía que necesitas como padre o madre para apoyar a tus hijos <br />👧🏽🧒🏼👦🏻</h2>
                    </div>
                }
            </div>


            <div className="row second-row mb-5 pb-5">
                <div className="col-12 qs-row-1 px-5 my-5 text-left">
                    <h2 className="titles">¿Quiénes somos?</h2>
                    <PQS />
                </div>
                <div className="col-12 mb-5">
                    <h2 className="titles">Los creadores de EduCaré</h2>
                </div>
                <PicCard
                    link="https://github.com/juanpablosg1"
                    pic={fotoJP}
                    name="Juan Pablo"
                />
                <PicCard
                    link="https://github.com/ceenti"
                    pic={fotoCin}
                    name="Cinthia"
                />
                <PicCard
                    link="https://github.com/DevPedroA78"
                    pic={fotoPete}
                    name="Pedro Antonio"
                />
            </div>

            <div className="row third-row">
                <BenefitCard
                    icon={free}
                    title="Esta plataforma es 100% gratiuita"
                    content="También podrías ser un papá o una mamá héroe donando, ya que esta plataforma se sustenta únicamente a través de donaciones. Con tu ayuda más padres de familia y escuelas podrán enseñar a los niños de forma divertida y dinámica."
                />
                <BenefitCard
                    icon={plusActs}
                    title="¡Escuela en casa y padres profesores!"
                    content="No te rompas la cabeza buscando cómo enseñarle a tus hijos lo que deberían de estar aprendiendo en la escuela en estos momentos. Sabemos lo difícil que es hacerlo solos desde casa. Sigamos unidos en esta situación mundial. ¡Nosotros te apoyamos con las actividades!"
                />
                <BenefitCard
                    icon={table}
                    title="Tu propio panel de control de contenido"
                    content='Cuando encuentres una actividad que te gustó muchísimo, no se te olvide agregarla a tu porpio panel de contenido, "Mi contenido". Guarda todas las actividades que quieras y quítalas cuando hayas terminado con ellas. ¡Si no las quieres quitar, ahí se pueden quedar!'
                />
                <BenefitCard
                    icon={Resources}
                    title="Videos, libros y PDFs"
                    content="Desde el principio supimos que tus hijos no aprenden todos de la misma forma. Esta plataforma es totalmente inclusiva con todas las formas de aprendizaje. Tenemos todo el tiempo en la mente que tus hijos requerirán diferentes tipos de recursos para aprender."
                />
                {
                    !props.token &&
                    <div className="col-12">
                        <div className="second-manipulative-button">
                            <h3 className="titles">Regístrate ¡YA!</h3>
                            <p>Empieza a realizar las actividades y a apoyar a tu hijo desde ahorita. Solo haz clic en este botón. <span className="font-weight-bold">Fácil, rápido y sencillo.</span></p>
                            <Link to="/signup" style={{ textDecoration: 'none' }}>
                                <CallButton name="¡Estoy listo para empezar!" />
                            </Link>
                        </div>
                    </div>
                }
            </div>

            <div className="row fourth-row">
                <div className="col-12 col-md-6 text-left">
                    <h2 className="titles">Campos de formación académica</h2>
                    <p>Selecciona una de las siguientes materias para acceder a sus actividades.</p>
                    <Link to="/actividades" style={{ textDecoration: "none" }}><MainButton name="Lenguaje y comunicación" /></Link>
                    <Link to="/actividades" style={{ textDecoration: "none" }}><MainButton name="Pensamiento matemático" /></Link>
                    <Link to="/actividades" style={{ textDecoration: "none" }}><MainButton name="Comprensión natural y social" /></Link>
                </div>
                <div className="col-12 col-md-6">
                    <img src={ymi} alt="3D image of father" className="sq-pics" />
                </div>
            </div>

            <div className="row fifth-row">
                <div className="col-12 text-left">
                    <h2 className="titles">¿Sabías qué?</h2>
                    <p>Nosotros te entendemos y es por eso que estamos aquí a tu lado y queremos hacer la diferencia contigo y tus hijos.</p>
                </div>
                <div className="col-md-6">
                    <div>
                        <img src={bmi} alt="3D image of a father" className="sq-pics" />
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <div>
                        <h3 className="titles">Abandono educativo en México 2021</h3>
                        <img src={niñaCubre} alt="imagen de una niña estudiando con cubrebocas" className="sq-pics" />
                        <p>Se estima que en el 2021 el impacto de la pandemia generé una deserción de sus estudios a más de  678 mil niños y adolescentes entre 6 y 17 años.</p>
                    </div>
                </div>
                <div className="col-md-6 text-left">
                    <p>En la encuesta realizado a una muestra representativa, detectamos lo siguiente:</p>
                    <ul>
                        <li><p>El 100% de los entrevistados desean conocer el avance educativo de los niños.</p></li>
                        <li><p>El Internet, computadora y tablet son los principales gadgets utilizados para la enseñanza.</p></li>
                        <li><p>Los PDF, libros, videos y guías escolares son son de gran importancia para los padres y educadores</p></li>
                    </ul>
                </div>
                <div className="col-md-6">
                    <img src={estadisticas} alt="imagen con estadisticas" className="sq-pics"/>
                </div>
            </div>

            <div className="row sixth-row">
                <div className="col-12">
                    <h2 className="titles">¡Tú también puedes donar!</h2>
                    <p>Por todo esto, es que se nos ocurrió esta gran idea. La idea de crear este sitio para apoyarte y lo mejor es que los beneficiados somos todos. Entonces, te invitamos a que seas un héroe, y con tu ayuda más padres de familia y escuelas podrán enseñar a los niños de forma divertida y dinámica.</p>
                </div>
                <div className="col-12 col-md-6">

                    <img src={rmi} alt="3D image of a father" className="sq-pics" />
                </div>
                <div className="col-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center">
                    <div className="">
                    <img src={donatesvg} alt="Logo de Paypal" className="sq-pics" />
                    <DonateButton />
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home