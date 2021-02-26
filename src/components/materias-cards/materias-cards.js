import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

function MateriasCard ( props ) {
    return (
        <Card body style={{ backgroundColor: '#EEBD52' }}>
            <CardTitle className="text-left title" tag="h3">{props.title}</CardTitle>
            <CardText className="text-left">{props.content}</CardText>
            <Button className="text-left button">Ir a actividades --></Button>
        </Card>
    )
}

export default MateriasCard