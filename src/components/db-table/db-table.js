import React, { useState, useEffect } from 'react'
import { Table } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Video from '../../images/Video-icon-r.svg'
import Book from '../../images/book-solid.svg'
import PDF from '../../images/Pdf-icon-a.svg'
import { faQuestion, faArrowRight, faMinus, faEye, faBook, faVideo, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SearchBar from '../searchbar/search-bar'
import api from '../../lib/api'

const DBTable = (props) => {

  const [filteredActivities, setFilteredActivities] = useState(null)

  const filterHandler = (event) => {
    const value = event.target.value.toLowerCase()
    const filteredArrayMaterias = props.currentUser.filter(actividad => {
      if (!actividad.resource) { return }
      return actividad.resource.title.toLowerCase().includes(value)
    })

    setFilteredActivities(filteredArrayMaterias)
  }

  const deleteHandler = (event) => {
    const activity_id = event.currentTarget.dataset.id
    if(window.confirm('¿Estás seguro de eliminar la actividad de tu historial?')) {
      api.deleteResourceFromUserHandler(localStorage.getItem("token"), activity_id)
      setFilteredActivities((filteredActivities || props.currentUser).filter(actividad => actividad._id !== activity_id))
    }
  }

  const getIcon = content_type => {
    return content_type === "Lectura" ? (
      <FontAwesomeIcon icon={faBook} size="1x" color="#000000" />
    ) : content_type === "Video musical" || content_type === "Video" ? (
      <FontAwesomeIcon icon={faVideo} size="1x" color="#000000" />
    ) : content_type === "PDF" ? (
      <FontAwesomeIcon icon={faFilePdf} size="1x" color="#000000" />
    ) : (
      <FontAwesomeIcon icon={faQuestion} size="1x" color="#000000" />
    )
  }

  let cont = 1
  return (
    <div className="overflow-auto">
      <div className="db-searchbar-container my-4 col-12 col-md-6">
        <SearchBar filterH={filterHandler} texto="Busca por título..." />
      </div>
      <Table borderless id="db-table" hover striped className="rounded">
        <thead>
          <tr className="bg-dark text-white">
            <th>Tipo</th>
            <th>Título</th>
            <th>Materia</th>
            <th colSpan="2">&nbsp;</th>
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
                        {getIcon(content_type)}
                      </Link>
                    </th>
                    <td>{title}</td>
                    <td>{category}</td>
                    <td>
                      <Link to={`/actividades/${_id}`} className="plus-icon">
                        <FontAwesomeIcon icon={faEye} size="1x" color="#3bb4ca" />
                      </Link>
                    </td>
                    <td>
                      <button className="plus-icon" type="button" onClick={deleteHandler} data-id={actividad._id}>
                        <FontAwesomeIcon icon={faMinus} size="1x" color="#3bb4ca" />
                      </button>
                    </td>
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
                          {getIcon(content_type)}
                        </Link>
                      </th>
                      <td>{title}</td>
                      <td>{category}</td>
                      <td>
                        <Link to={`/actividades/${_id}`} className="plus-icon">
                          <FontAwesomeIcon icon={faEye} size="1x" color="#3bb4ca" />
                        </Link>
                      </td>
                      <td>
                        <button className="plus-icon" type="button" onClick={deleteHandler} data-id={item._id}>
                          <FontAwesomeIcon icon={faMinus} size="1x" color="#3bb4ca" />
                        </button>
                      </td>
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
