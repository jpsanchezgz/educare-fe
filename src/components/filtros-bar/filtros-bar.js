import PDF from '../../images/Pdf-icon-n.svg'
import Video from '../../images/Video-icon-n.svg'
import Book from '../../images/book-solid-n.svg'
import ThreeIcons from '../../images/three-resources-icon.svg'

function FiltroBar(props) {
    return (

        <div className="filtros-bar col-12 col-md-6 offset-md-6 d-flex justify-content-around">
            <button className="filter-buttons-activities" onClick={props.filterActivitiesHandler}>
                <img src={Book} alt="Book icon created by Font Awesome " name="Lectura" width="50" className="filter-icons"/>
            </button>
            <button className="filter-buttons-activities" onClick={props.filterActivitiesHandler}>
                <img src={Video} alt="Video icon" name="Video" width="50" className="filter-icons"/>
            </button>
            <button className="filter-buttons-activities" onClick={props.filterActivitiesHandler}>
                <img src={PDF} alt="PDF icon" name="PDF" width="50" className="filter-icons"/>
            </button>
            <button className="filter-buttons-activities" onClick={props.getAllActivitiesHandler}>
                <img src={ThreeIcons} alt="PDF icon" name="PDF" width="50" className="filter-icons"/>
            </button>
        </div>

    )
}

export default FiltroBar