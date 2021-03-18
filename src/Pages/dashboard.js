import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import DBTable from '../components/db-table/db-table'
import api from '../lib/api'


const Dashboard = ( props ) => {
    const inputEl = useRef(null)
    
    const onButtonClick = () => {
        inputEl.current.click()
      }
    
    const [upImgState, setUpImgState ] = useState(null)
    const [uploadedImage, setUploadedImage] = useState(null)

    const fileSelectedHandler = ( event ) => {
        setUpImgState(event.target.files[0])
    }

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error)
    })

    const fileUploadHandler = async () => {
        const file = await toBase64(upImgState)
        const data = {
            file: file,
            filename: upImgState.name
        }

        fetch('http://localhost:8080/users/upload_photo', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': props.token
            },
            body: JSON.stringify(data)
        })
        .then(data => {
                return data.json()
        })
        .then(res => {
            setUploadedImage(res.data.Location)
        })
    }

    useEffect(() => {
        api.getUserInfo(props.token, (response) => {
            setUploadedImage(response.data.kid_photo)
        })
    }, [])
    
    return (
        <div className="row">
            <h5 className="col-12 title_dash margin-page">Conoce las actividades de tu pequeñ@</h5>

            <div className="col-12 col-md-3 d-flex flex-column align-items-center">
                <input 
                style={{ display: "none"}}
                type="file" 
                onChange={fileSelectedHandler}
                ref={inputEl} />

                <button  onClick={onButtonClick} className="pic-avatar-button shadow mb-3">
                    {uploadedImage ? 
                        (<img src={uploadedImage} />) :
                        (<FontAwesomeIcon icon={faCamera} size='3x' color='#EEBD52'></FontAwesomeIcon>)
                        
                    }
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
