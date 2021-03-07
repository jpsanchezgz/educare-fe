import { Link } from 'react-router-dom'
import EmbedVideo from "./embed-video"
import { Media, Button } from 'reactstrap'

export default function VideoDetail ( props ) {
    return(
        <div className="row m-auto">
            <div className="col-12 text-left mb-5">
                <h6 className="title-activity">{props.category}</h6>
            </div>
            <div className="col-12 mb-5">
                <h3 className="category-title">{props.title}</h3>
            </div>
            <Media className=" row d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6">
                    <Media center top>
                        {/* <Media object data-src="holder.js/64x64" alt="Generic placeholder image" /> */}
                        {props.link ? (<EmbedVideo url={props.link} />) : null}
                    </Media>
                </div>
                <div className="col-12 col-md-6 my-4">
                    <Media body >
                        <Media heading className="">
                            {props.content_type}
                        </Media>
                        <div className="text-justify">
                            {props.content}
                        </div>
                        {props.notes && (
                            <div className="text-left mt-3">
                                <strong>Instrucciones: </strong>
                                <small>{props.notes}</small>
                            </div>
                        )
                        }
                        <div className="text-left mt-2">
                            {
                                props.tags && props.tags.map(tag => <strong>#{tag} </strong>)
                            }
                        </div>
                    </Media>
                </div>
            </Media>
        </div>
    )
}