import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import PDFIcon from '../../images/pdf-preview.jpg'
import MainButton from '../buttons/main-button'
import RoundButton from '../buttons/round-button'


export default function PDFDetail(props) {
    return (
        <div className="row">
            <div className="col-12 text-left mb-5">
                <h6 className="titles">{props.category}</h6>
            </div>
            <div className="col-12 mb-5">
                <h3 className="titles">{props.title}</h3>
            </div>
            <div className="col-12 col-md-6">
                <div className="preview-pdf-div">
                    <img src={PDFIcon} alt="A PDF icon" className="image" />
                    <div className="middle-pdf-preview">
                        <a
                            href="https://i.pinimg.com/originals/bb/f7/9a/bbf79a239b8f4261339469c6d371e205.jpg"
                            style={{ textDecoration: 'none' }}
                            download>
                            <div className="text-pdf-preview">Descargar</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 d-flex flex-column align-items-start">

                <h4 className="titles">
                    {props.content_type}
                </h4>
                <div className="text-justify">
                    {props.content}
                </div>
                {
                    props.notes &&
                    <div className="text-left mt-3">
                        <strong>Instrucciones: </strong>
                        <small>{props.notes}</small>
                    </div>
                }
                <div className="text-left mt-2">
                    {
                        props.tags && props.tags.map(tag => <strong>#{tag} </strong>)
                    }
                </div>
                <a
                    href="https://i.pinimg.com/originals/bb/f7/9a/bbf79a239b8f4261339469c6d371e205.jpg"
                    style={{ textDecoration: 'none' }}
                    download>
                    <MainButton name="Descargar" width="50"/>
                    <RoundButton name="Descargar"/>
                </a>
            </div>

            <div className="col-12 col-md-3 offset-md-9 d-flex justify-content-end mb-5">
                <Link to="/actividades" style={{ textDecoration: 'none' }}>
                    <Button className=" butn-standard">Regresar</Button>
                </Link>
            </div>
        </div>
    )
}