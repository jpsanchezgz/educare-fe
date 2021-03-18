import React from 'react';
import {CardTitle, CardText } from 'reactstrap';
import Brain from '../../images/brain-solid.svg'
import Read from '../../images/readme-brands.svg'
import Calc from '../../images/calculator-solid.svg'
import PaintMusic from '../../images/music-art.png'

function MateriasCard ( props ) {
    return (
        <div className="materias-body d-flex flex-column justify-content-around align-items-center">
            <button type="button" onClick={props.filterByMateriaHandler} className="icon-materia-button">
                {
                    props.title.includes("Lenguaje") ? <img src={Read} alt="PDF icon" width="85" name={props.title} />
                        : props.title.includes("Arte") ? <img src={PaintMusic} alt="PDF icon" width="85" name={props.title} />
                            : props.title.includes("Pensamiento") ? <img src={Calc} alt="PDF icon" width="85" name={props.title} />
                                : <img src={Brain} alt="PDF icon" width="85" name={props.title} />
                }
            </button>
            <CardTitle name={props.title} className="title mt-2" tag="h4">{props.title}</CardTitle>
            <CardText name={props.title} className="">{props.content}</CardText>
        </div>
    )
}

export default MateriasCard