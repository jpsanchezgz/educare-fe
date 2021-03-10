import React, { useState, useEffect } from 'react';
import { Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Video from '../../images/Video-icon-r.svg'
import Book from '../../images/book-solid.svg'
import PDF from '../../images/Pdf-icon-a.svg'
import { faQuestion, faArrowRight, faMinus  } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchBar from '../searchbar/search-bar'

const DBTable = (props) => {

  const [filteredActivities, setFilteredActivities] = useState(null)

  const filterHandler = (event) => {
    let value = event.target.value.toLowerCase()
    let filteredArrayMaterias = props.currentUser.filter(actividad => {
      if (!actividad.resource) { return }
      return actividad.resource.title.toLowerCase().includes(value)
    })

    setFilteredActivities(filteredArrayMaterias)
  }

  let cont = 1
  return (
    <div>
      <div className="db-searchbar-container my-5">
        <SearchBar filterH={filterHandler} texto="Busca por título..." />
      </div>
      <Table borderless id="db-table">
        <thead>
          <tr className="bg-dark text-white">
            <th>&nbsp;</th>
            <th>Título</th>
            <th>Materia</th>
            <th className="d-none d-lg-block">&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredActivities
              ? filteredActivities.map(actividad => {
                if (!actividad.resource) { return }
                const { title, category, content_type, _id } = actividad.resource
                cont = cont + 1
                return (
                  <tr className={cont % 2 == 0 ? "active" : "no-active"}>
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
                          : content_type === "Video musical" || content_type === "Video" ? <img src={Video} alt="Video icon" width="45" />
                            : content_type === "PDF" ? <img src={PDF} alt="PDF icon" width="45" />
                              : <FontAwesomeIcon icon={faQuestion} size="1x"></FontAwesomeIcon>
                      }
                    </td>
                    <td><button className="plus-icon" type="button">
                      <FontAwesomeIcon icon={faMinus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                    </button></td>
                  </tr>
                )
              })
              : props.currentUser ?
                props.currentUser.map(item => {
                  if (!item.resource) { return }
                  const { title, category, content_type, _id } = item.resource
                  cont = cont + 1
                  return (
                    <tr className={cont % 2 == 0 ? "active" : "no-active"}>
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
                            : content_type === "Video musical" || content_type === "Video" ? <img src={Video} alt="Video icon" width="45" />
                              : content_type === "PDF" ? <img src={PDF} alt="PDF icon" width="45" />
                                : <FontAwesomeIcon icon={faQuestion} size="1x"></FontAwesomeIcon>
                        }
                      </td>
                      <td><button className="plus-icon" type="button">
                        <FontAwesomeIcon icon={faMinus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                      </button></td>
                    </tr>
                  )
                })
                : <p>Usted no tiene actividades guardadas</p>
          }
        </tbody>
      </Table>
    </div>
  );
}

export default DBTable;