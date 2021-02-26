import donarImg from '../images/donacion-pic.png'
import donatesvg from '../images/PayPal-Donate 1.svg'
import DonateButton from '../components/papyal-button/donate-button'

function Donar () {
    return (
        <div className="row">
            <div className="offset-md-1 col-md-5 paypal-col">
                <h2 className="">¡Ayúdanos donando!</h2>
                <p className="mb-5">Con tu donación ayudas a que este proyecto siga creciendo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cupiditate magnam tempora harum ducimus nam?
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