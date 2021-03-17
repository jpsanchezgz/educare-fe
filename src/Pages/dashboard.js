import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DBTable from '../components/db-table/db-table'


function Dashboard ( props ) {

    const inputEl = useRef(null)
    
    const onButtonClick = () => {
        inputEl.current.click()
        console.log(inputEl)
      }
    

    const [upImgState, setUpImgState ] = useState(null)

    const fileSelectedHandler = ( event ) => {
        setUpImgState(event.target.files[0])
    }

    const fileUploadHandler = () => {
        const fd = new FormData()
        fd.append('upImg', upImgState, upImgState.name)
        axios.post('https://ajaxclass-1ca34.firebaseio.com/juanpablo/pictures.json', fd)
        .then( res => {
            console.log(res)
        })
    }
    
    return(
        <div className="row">
            <h5 className="col-12 title_dash margin-page">Conoce las actividades de tu pequeñ@</h5>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                <input 
                style={{ display: "none"}}
                type="file" 
                onChange={fileSelectedHandler}
                ref={inputEl} />

                <button  onClick={onButtonClick} className="pic-avatar-button shadow mb-3">
                    <FontAwesomeIcon icon={faCamera} size='3x' color='#EEBD52'></FontAwesomeIcon>
                </button>
                <button className="upImg-button py-2 px-4" type="button" onClick={fileUploadHandler}>Upload</button>
            </div>
            <div className="col-12 col-md-9">
                <DBTable 
                currentUser={props.currentUser}
                />
            </div>
        </div>
    )
}
export default Dashboard