import React, {useState, useEffect} from 'react';
import EmbedVideo from "./embed-video";
import { Media, Button } from 'reactstrap';

export default function Activity(props){
    const [activity, setActivity] = useState({});

    async function getActivityById(id, callBack){
        await fetch(`http://apieducare.mybluemix.net/resources/${id}`, {
            method : 'GET',
            headers: { 
                'Content-Type': 'application/json',
                "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMzA1ZDAzODM5ZjFmNDI1YTRlYTk4NiIsImlhdCI6MTYxMzc5OTgzMn0.hifm17Knm06wZtjB4WcdwG0EL90g9ndnkgOlkXKsK-U"
            }
        })            
        .then( response => {
            if(!response.ok){
                return response.json()
                .then(error => {throw new Error (error.message)})
            }
            return response.json()
        })
        .then( json => callBack(json.data))
        .catch( error => console.log(error))
    }

    useEffect(() => {
        getActivityById( props.id, setActivity ); 
    }, []);

    function redirectFunc(){
        window.location.href = "/actividades"
    }

    let {_id, title, notes, tags, content, category, content_type, link} = activity
    return(
  
        <div className="m-3">
            <Media className=" row d-flex justify-content-center">
                <div className="col-9 col-md-6">
                    <Media center top>
                        <h3 className="category-title">{category}</h3>
                        <h6 className="title-activity">{title}</h6>
                        {/* <Media object data-src="holder.js/64x64" alt="Generic placeholder image" /> */}
                    {link ? (<EmbedVideo url = {link}/>) : null}
                    </Media>
                </div>
                <div className="col-12 col-md-6 my-4">
                    <Media body >
                        <Media heading className="">
                            {content_type}
                        </Media>
                        <div className="text-justify">
                            {content}
                        </div>
                        {notes && (
                                <div className="text-left">
                                    <strong>Nota: </strong>
                                    <small>{notes}</small>
                                </div>
                            )  
                        }
                        <div className="text-left">
                            {
                                tags && tags.map(tag => <strong>#{tag} </strong>)
                            }    
                        </div> 
                        <div className="text-right">
                            <Button className=" btn-standard" outline color="success" onClick={redirectFunc}>Regresar</Button>
                        </div>                
                    </Media>
                </div>
            </Media>

        </div>
    )
}