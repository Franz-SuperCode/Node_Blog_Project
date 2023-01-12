import { Link } from "react-router-dom";



function Beitrag(props) {
    console.log(props);

    const deletePost = () => {
        fetch(`http://localhost:9999/api/posts/${props.id}`, {
            method: "DELETE",
        }
        ).then(res => res.json())
            .then(data => props.setArticles(data));
    };

    return (
        //die ID bekommen wir von der Home-Seite. Dann wird hier
        // Eine Verlinkung zur Detailseite erstellt MIT
        // der jeweiligen ID
        <>
            <Link to={`/detail/${props.id}`}>
                <article>
                    <img src={`http://localhost:9999/${props.postPic}`} alt={props.title} />
                    <h2>{props.title}</h2>
                    {/* <p>{props.text}</p> */}
                </article>
            </Link>
            <button onClick={deletePost}>Delte Post</button>
        </>
    )

}

export default Beitrag;