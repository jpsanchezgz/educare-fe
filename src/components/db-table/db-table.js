import React from 'react';
import ReactSlider from 'react-slider'
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const DBTable = (props) => {
  return (
    <Table borderless id="db-table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Mis Actividades</th>
          <th>Materia</th>
          <th>Progreso</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faVideo} color='red' size="2x"></FontAwesomeIcon></th>
          <td>El abecedario de Otto</td>
          <td>Lenguaje y Comunicación</td>
          <td>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
          </td>
          <td><button className="check-icon" ><FontAwesomeIcon icon={faCheckCircle} color='green' size="2x"></FontAwesomeIcon></button></td>
        </tr>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faBook} color='blue' size="2x"></FontAwesomeIcon></th>
          <td>Jacob la liebre gigante</td>
          <td>Matemáticas</td>
          <td>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
          </td>
        </tr>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faFilePdf} color='#EEBD52' size="2x"></FontAwesomeIcon></th>
          <td>Cuando voy a cruzar la calle</td>
          <td>Desarrollo motriz</td>
          <td>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DBTable;