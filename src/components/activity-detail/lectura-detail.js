import {Link} from 'react-router-dom'
import { Button } from 'reactstrap'

export default function LecturaDetail(props) {
    return (
        <div className="row">
            <div className="col-12 text-left mb-5">
                <h6 className="titles">{props.category}</h6>
            </div>
            <div className="col-12 mb-5">
                <h3 className="titles">{props.title}</h3>
            </div>
            <div className="col-12 text-left">
                <h4 className="titles">{props.content_type}</h4>
                <p>
                    <strong>Instrucciones: </strong>
                    <small>{props.notes}</small>
                </p>
                {
                    props.tags && props.tags.map(tag => <strong>#{tag} </strong>)
                }
            </div>
            <div className="col-12 col-md-10 offset-md-1 lectura-content-col my-5 overflow-auto text-left">
                <p>
                    <br />{props.content}<br />
                </p>
            </div>
        </div>
    )
}