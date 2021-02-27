import React from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const DBTable = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Actividad</th>
          <th>Materia</th>
          <th>Progreso</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faVideo} color='red'></FontAwesomeIcon></th>
          <td>El abecedario de Otto</td>
          <td>Lenguaje y Comunicación</td>
          <td>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          </td>
        </tr>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faBook} color='blue'></FontAwesomeIcon></th>
          <td>Jacob la liebre gigante</td>
          <td>Matemáticas</td>
          <td>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          </td>
        </tr>
        <tr>
          <th scope="row"><FontAwesomeIcon icon={faFilePdf} color='#EEBD52'></FontAwesomeIcon></th>
          <td>Cuando voy a cruzar la calle</td>
          <td>Desarrollo motriz</td>
          <td>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} color='#EEBD52'></FontAwesomeIcon>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DBTable;