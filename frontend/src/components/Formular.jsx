
function Formular() {

    const sendData = (e) => {
        e.preventDefault()
        //Das braucht man um auf das Formular zugreifen zu können.
        //Mit e.target bekommt man das <form>
        //Und dann packt man es in den body vom Request
        const form = new FormData(e.target);
        //Hier wird nun gefetched mit einem POST req an den Server
        fetch('http://localhost:9999/api/posts', {
            method: 'POST',
            body: form
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data);

            })
    }
    return (


        //Bilder und Texte, also Daten, müssen noch an den Server gesendet werden
        <form onSubmit={sendData}>
            <p>Neuer Beitrag</p>
            <input type="text" name="title" placeholder="Titel" />
            {/* multer wird nach "picture" Bildern suchen */}
            <input type="file" name="postPic" placeholder="Beitragsbild" />
            <input type="text" name="text" placeholder="Beitragstext" />
            <input type="submit" value="Publish" />
        </form>
    )
}

export default Formular;


// return (
//     <form>
//         <p>Neuer Beitrag</p>
//         <input type="text" name="title" placeholder="Titel" />
//         {/* multer wird nach "picture" Bildern suchen */}
//         <input type="file" name="picture" placeholder="Beitragsbild" />
//         <input type="text" placeholder="Beitragstext" />
//         <input type="submit" value="Publish" />
//     </form>
// )