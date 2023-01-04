import { Link } from "react-router-dom";



function Beitrag(props) {
    console.log(props);
    return (
        //die ID bekommen wir von der Home-Seite. Dann wird hier
        // Eine Verlinkung zur Detailseite erstellt MIT
        // der jeweiligen ID
        <Link to={`/detail/${props.id}`}>
            <article>
                <img src={`http://localhost:9999/${props.postPic}`} alt={props.title} />
                <h2>{props.title}</h2>
                {/* <p>{props.text}</p> */}
            </article>
        </Link>
    )

}

export default Beitrag;