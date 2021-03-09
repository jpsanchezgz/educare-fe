import React, { useState } from 'react'
import PDF from '../../images/Pdf-icon-a.svg'
import Video from '../../images/Video-icon-r.svg'
import Book from '../../images/book-solid.svg'
import Brain from '../../images/brain-solid.svg'
import Read from '../../images/readme-brands.svg'
import Calc from '../../images/calculator-solid.svg'
import PaintMusic from '../../images/music-art.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faQuestion } from '@fortawesome/free-solid-svg-icons'
import api from '../../lib/api'


export default function ActivityCard(props) {

    const [toggleSave, setToggleSave] = useState(false)

    const toggleSaveHandler = () => setToggleSave(!toggleSave);
    return (
        <div className="col-12 col-lg-3 d-lg-flex flex-column align-items-end activities-card shadow">
            <div className="mx-lg-2 mb-lg-3">
                {
                    !toggleSave
                        ? <>
                            <button className="plus-icon d-none d-lg-block" type="button" onClick={async () => await api.addActivityToMyContentHandler(props.token, props._id, toggleSaveHandler)}>
                                <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                            </button>
                            <button className="add-act-button d-lg-none mt-3" type="button" onClick={async () => await api.addActivityToMyContentHandler(props.token, props._id, toggleSaveHandler)}>
                                Agregar a mis actividades <FontAwesomeIcon icon={faPlus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                            </button>
                        </>
                        : <>
                            <button className="plus-icon d-none d-lg-block" type="button" onClick={toggleSaveHandler}>
                                <FontAwesomeIcon icon={faMinus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                            </button>
                            <button className="add-act-button d-lg-none mt-3" type="button" onClick={toggleSaveHandler}>
                                Quitar de mis actividades <FontAwesomeIcon icon={faMinus} size="1x" color="#FE8D03"></FontAwesomeIcon>
                            </button>
                        </>
                }
            </div>
            <Link to={`/actividades/${props._id}`} style={{ textDecoration: 'none', backgroundColor: 'white' }} className="activity-detail-Link">
                <div className="d-flex flex-column align-items-start text-left justify-content-around activity-detail-Link-inside">
                    <div>
                        {
                            props.content_type === "Lectura" ? <img src={Book} alt="PDF icon" width="75" />
                                : props.content_type === "Video musical" || props.content_type === "Video" ? <img src={Video} alt="PDF icon" width="75" />
                                    : <img src={PDF} alt="PDF icon" width="75" />
                        }
                    </div>
                    <p className="activity-title mt-lg-2"><strong>{props.title}</strong></p>
                    <p className="">{props.category}</p>
                    {
                        props.category.includes("Lenguaje") ? <img src={Read} alt="PDF icon" width="25" />
                            : props.category.includes("Arte") ? <img src={PaintMusic} alt="PDF icon" width="25" />
                                : props.category.includes("Pensamiento") ? <img src={Calc} alt="PDF icon" width="25" />
                                    : props.category.includes("Desarrollo") ? <img src={Brain} alt="PDF icon" width="25" />
                                        : <FontAwesomeIcon icon={faQuestion} size="1x"></FontAwesomeIcon>
                    }
                    <span className="mt-2">{props.notes}</span>
                </div>
            </Link>
        </div>
    )
}