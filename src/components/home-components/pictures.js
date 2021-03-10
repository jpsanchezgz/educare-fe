export default function PicCard( props ) {
    return(
        <div className="col-md-4 my-3">
        <a href={props.link} style={{textDecoration: 'none'}}>
            <div className="pictures">
                <div className="">
                    <img src={props.pic} alt="imagen de los creadores" width="200" className="" />
                </div>
                <p><strong>{props.name}</strong></p>
            </div>
        </a>
    </div>
    )
}