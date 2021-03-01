import React, {useState, useEffect} from 'react';
import EmbedVideo from "./embed-video";
import { Media } from 'reactstrap';

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

    console.log(activity)
    let {_id, title, notes, tags, content, category, content_type, link} = activity
    return(
        <div data-id={_id}>
            <h3 className="m-2">{category}</h3>
            <h6 className="m-2">{title}</h6>
            <Media className="my-4">
                <Media left top href={link}>
                    {/* <Media object data-src="holder.js/64x64" alt="Generic placeholder image" /> */}
                   {link ? (<EmbedVideo url = {link}/>) : null}
                </Media>
                <Media body>
                    <Media heading className="p-2">
                        {content_type}
                    </Media>
                    <div className="m-3 text-justify">
                        {content}
                    </div>
                    {notes && (
                            <div className="p-4 text-left">
                                <strong>Nota: </strong>
                                <small>{notes}</small>
                            </div>
                        )  
                    }
                    <div className="text-left m-3">
                        {
                            tags && tags.map(tag => <strong>#{tag} </strong>)
                        }    
                    </div>                 
                </Media>
            </Media>
        </div>

    )
}