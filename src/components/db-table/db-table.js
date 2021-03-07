import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Video from '../../images/Video-icon-r.svg'
import Book from '../../images/book-solid.svg'
import PDF from '../../images/Pdf-icon-a.svg'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchBar from '../searchbar/search-bar'

const DBTable = (props) => {

  const [filteredActivities, setFilteredActivities] = useState(null)

  const filterHandler = (event) => {
    let value = event.target.value.toLowerCase()
    let filteredArrayMaterias = props.currentUser.misActividades.filter(actividad => {
        return actividad.title.toLowerCase().includes(value)
    })

    setFilteredActivities(filteredArrayMaterias)
  }

  return (
    <div>
      <div className="db-searchbar-container my-5">
        <SearchBar filterH={filterHandler} texto="Busca por título..."/>
      </div>
      <Table borderless id="db-table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Título</th>
          <th>Materia</th>
          <th>&nbsp;</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {
          filteredActivities 
          ? filteredActivities.map(actividada => {
            const { title, category, content_type, _id} = actividada
            return (
              <tr>
                <th scope="row">
                  <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                    <button className="plus-icon" type="button">
                      <FontAwesomeIcon icon={faArrowRight} size="1x" color="#FE8D03"></FontAwesomeIcon>
                    </button>
                  </Link>
                </th>
                <td>{title}</td>
                <td>{category}</td>
                <td className="d-none d-lg-block">
                  {
                    content_type === "Lectura" ? <img src={Book} alt="Book icon" width="45" />
                      : content_type === "Video musical" ? <img src={Video} alt="Video icon" width="45" />
                        : content_type === "PDF" ? <img src={PDF} alt="PDF icon" width="45" />
                          : null
                  }
                </td>
                <td><button className="check-icon" ><FontAwesomeIcon icon={faTrashAlt} color='green' size="2x"></FontAwesomeIcon></button></td>
              </tr>
            )
          })
          : props.currentUser.misActividades &&
          props.currentUser.misActividades.map(actividada => {
            const { title, category, content_type, _id} = actividada
            return (
              <tr>
                <th scope="row">
                  <Link to={`/actividades/${_id}`} style={{ textDecoration: 'none' }} className="activity-detail-Link">
                    <button className="plus-icon" type="button">
                      <FontAwesomeIcon icon={faArrowRight} size="1x" color="#FE8D03"></FontAwesomeIcon>
                    </button>
                  </Link>
                </th>
                <td>{title}</td>
                <td>{category}</td>
                <td className="d-none d-lg-block">
                  {
                    content_type === "Lectura" ? <img src={Book} alt="Book icon" width="45" />
                      : content_type === "Video musical" ? <img src={Video} alt="Video icon" width="45" />
                        : content_type === "PDF" ? <img src={PDF} alt="PDF icon" width="45" />
                          : null
                  }
                </td>
                <td><button className="check-icon" ><FontAwesomeIcon icon={faTrashAlt} color='green' size="2x"></FontAwesomeIcon></button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    </div>
  );
}

export default DBTable;