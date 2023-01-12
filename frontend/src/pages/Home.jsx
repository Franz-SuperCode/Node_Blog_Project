import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Beitrag from "../components/beitrag/Beitrag.jsx"
import Navbar from "../components/navbar/Navbar.jsx";

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
            <Navbar />
            <section>
                <h1>Willkommen</h1>
                <p>Bitte auf der Adminseite Beiträge eintragen. Diese werden hier angezeigt</p>
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
                        setArticles={setPosts}
                    />

                )
            })}

            <Link to="/admin"><p>Zur Adminseite</p></Link>

        </>
    )
}

export default Home;