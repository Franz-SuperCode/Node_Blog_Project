
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detailseite() {
    //Hole die ID vom URL
    const { id } = useParams();
    const [article, setArticle] = useState({});
    useEffect(() => {
        //Sende ein Request an unseren Server
        fetch(`http://localhost:9999/api/posts/${id}`)
            //Bekommt das jeweilige Objekt und wandelt es in JS-Objc um
            .then(response => response.json())
            //Speichere es in article
            .then(data => {
                setArticle(data);
                console.log(data);
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <article>
            <img src={`http://localhost:9999/${article.path}`} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.text}</p>
        </article>
    )

}

export default Detailseite;