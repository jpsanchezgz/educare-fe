import React from 'react';
import {CardTitle, CardText } from 'reactstrap';
import {
    Link
} from 'react-router-dom'

function MateriasCard ( props ) {
    return (

        <Link to="/actividades" style={{ textDecoration: 'none' }}>
            <div className="materias-body shadow">
                <CardTitle className="title" tag="h3">{props.title}</CardTitle>
                <CardText className="">{props.content}</CardText>
            </div>
        </Link>
    )
}

export default MateriasCard