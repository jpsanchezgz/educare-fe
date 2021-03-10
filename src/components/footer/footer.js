import {
    Link
} from 'react-router-dom'
import fbicon from '../../images/Facebook-icon-white.svg'
import IGicon from '../../images/Instagram-icon-white.svg'
import twicon from '../../images/Twitter-icon-white.svg'
import gHicon from '../../images/Github-icon-white.svg'
import donatesvg from '../../images/PayPal-Donate 1.svg'
import DonateButton from '../papyal-button/donate-button'
import logo from '../../images/EduCare-White-Blue-Logo 1.svg'

function FooterEducare() {
    return (
        <div className="container-fluid footer-container">
            <div className="row p-3">
                <div className="col-md-2">
                    <ul className="text-white pl-0 d-flex flex-column justify-content-evenly">
                        <Link to="/" className="li-footer"><li>Inicio</li></Link>
                        <Link to="/" className="li-footer"><li>¿Quiénes somos?</li></Link>
                        <Link to="/materias" className="li-footer"><li>Materias</li></Link>
                        <Link to="/actividades" className="li-footer"><li>Actividades</li></Link>
                    </ul>
                </div>
                <div className="col-md-2">
                    <ul className="text-white pl-0">
                        <Link to="/donacion" className="li-footer"><li>Donación</li></Link>
                        <Link to="/hijo" className="li-footer"><li>Mis cursos</li></Link>
                        <Link to="/hijo" className="li-footer"><li>Mi progreso</li></Link>
                    </ul>
                </div>
                <div className="col-md-4 md-footer">
                    <div>
                        <img src={logo} alt="EduCaré logo" />
                    </div>
                    <div className="icons-div">
                        <span className="icons"><img src={twicon} alt="twitter icon" width="24" /></span>
                        <span className="icons ml-1"><img src={fbicon} alt="facebook icon" width="30" /></span>
                        <span className="icons" ><img src={IGicon} alt="instagram icon" width="28" /></span>
                    </div>
                </div>
                <div className="col-md-2 d-flex flex-column align-items-center justify-content-center">
                    <p className="text-center text-white mb-2">Con tu ayuda podremos mantener vivo este proyecto</p>
                    <Link to="/donacion"><img src={donatesvg} alt="paypal icon" width="100" className="mt-2" /></Link>
                    <DonateButton />
                </div>
                <div className="col-md-2">
                    <ul className="text-white pl-0">
                        Desarrollado por:
                        <a href="https://github.com/juanpablosg1" style={{textDecoration: 'none'}}><li className="icons li-footer mt-3"><img src={gHicon} alt="github icon" width="20" className="mr-2" />JP</li></a>
                        <a href="https://github.com/ceenti" style={{textDecoration: 'none'}}><li className="icons li-footer"><img src={gHicon} alt="github icon" width="20" className="mr-2" />Cin</li></a>
                        <a href="https://github.com/DevPedroA78" style={{textDecoration: 'none'}}><li className="icons li-footer"><img src={gHicon} alt="github icon" width="20" className="mr-2" />Pete</li></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterEducare