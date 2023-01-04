import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Beitrag from "../components/beitrag/Beitrag.jsx"

// import Adminseite from "./Adminseite.jsx";



// Man holt sich die Daten aus dem selbst gebauten Server und speichert sie hier wie gewohnt.
// Danach übergibt man sie der Komponente in Form von Props wie gewohnt
function Home() {
    //Hole die Daten vom eigenen Server
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:9999/api/posts')
            .then(response => response.json())
            .then((data) => {
                setPosts(data)
                console.log(data);
            })
    }, [])
    console.log(posts);
    return (

        <>
            <section>
                <img src="https://images.unsplash.com/photo-1672608322232-be8fbf473789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="headerBild" />
                <h1>Begrüßung</h1>
            </section>
            {/* Die Daten vom Server werden der Komponente übergeben */}
            {posts.map((post, index) => {
                return (
                    <Beitrag
                        key={index}
                        id={index}
                        postPic={post.path}
                        title={post.title}
                        text={post.text}
                    />

                )
            })}

            <Link to="/admin"><p>Zur Adminseite</p></Link>

        </>
    )
}

export default Home;