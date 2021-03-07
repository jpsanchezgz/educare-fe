import React from 'react';
import {CardTitle, CardText } from 'reactstrap';
import {
    Link
} from 'react-router-dom'
import Brain from '../../images/brain-solid.svg'
import Read from '../../images/readme-brands.svg'
import Calc from '../../images/calculator-solid.svg'
import PaintMusic from '../../images/music-art.png'

function MateriasCard ( props ) {
    return (

        <Link to="/actividades" style={{ textDecoration: 'none' }}>
            <div className="materias-body shadow d-flex flex-column justify-content-around align-items-center">
                {
                    props.title.includes("Lenguaje") ? <img src={Read} alt="PDF icon" width="85" />
                        : props.title.includes("Arte") ? <img src={PaintMusic} alt="PDF icon" width="85" />
                            : props.title.includes("Pensamiento") ? <img src={Calc} alt="PDF icon" width="85" />
                                : <img src={Brain} alt="PDF icon" width="85" />
                }
                <CardTitle className="title mt-2" tag="h3">{props.title}</CardTitle>
                <CardText className="">{props.content}</CardText>
            </div>
        </Link>
    )
}

export default MateriasCard