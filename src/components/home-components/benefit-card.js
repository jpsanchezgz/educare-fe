import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function BenefitCard( props ) {
    return(
        <div className="col-md-6">
        <div className="benefit-div mb-5">
            <img src={props.icon} className="benefit-icon" width="150"></img>
            <p className="mt-3"><strong>{props.title}</strong></p>
            <p>{props.content}</p>
        </div>
    </div>
    )
}