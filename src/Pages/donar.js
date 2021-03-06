import donarImg from '../images/donacion-pic.png'
import donatesvg from '../images/PayPal-Donate 1.svg'
import DonateButton from '../components/papyal-button/donate-button'

function Donar () {
    return (
        <div className="row">
            <div className="offset-md-1 col-md-5 paypal-col">
                <h2 className="text-left">¿Quieres hacer una donación?</h2>
                <p className="mb-5 text-left"> Haz clic en el botón "Donate". Cualquier donación es bienvenida y de gran apoyo para la educación infantil.
                <br/><br/>
                Con tu ayuda podremos mantener vivo este proyecto, la educación de los niños no tiene precio.
                </p>
                <img src={donatesvg} alt="Logo de Paypal" className="paypal-pic"/>
                <DonateButton />
            </div>
            <div className="col-md-6 don-img-col">
                <img src={donarImg} alt="Imagen de dinero y educación" className="donacion-pic"/>
            </div>
        </div>
    )
}

export default Donar