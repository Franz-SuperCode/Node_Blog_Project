//?  Mein Backend kann nun:
//*     - Hat einen Server bereitgestellt auf den Port 9999
//*     - Erwartet einen GET Request auf /api/posts und gibt als Response
//*       das Array mit Daten. 
//*     - Man kann mit fetch vom Frontend nun auf diese GET URL zugreifen und
//*       bekommt diese Daten als Antwort
//*     - 

import express from 'express';
import cors from 'cors';
import morgan from 'morgan'; // logging middleware packages
import multer from 'multer'; //packages um Bilder hochzuladen bzw. um forms auszulesen
//multer ist eine Middleware 


const app = express();
const PORT = 9999;

// Die Konfiguration gibt an, dass die hochgeladenen Bilder im Ordner "images" gespeichert werden sollen. dest = destination (Ort wo die Bilder abgelegt werden sollen)
const upload = multer({ dest: './public' }) // 

// Jeder Request wird im "dev"-Format geloggt mit morgan
app.use(morgan('dev'));
app.use(cors());
//Das app.use soll auf eine spezifische Route gehen: /images. Wenn der Request das beinhaltet
//dann gukt er im static Ordner ./images ob er Bilder liefern kann
//Sonst nimmt er jeden Request und prüft ob es Bilder in dem Ordner gibt.
//Für die Route /images haben wir die Middleware zu ./images festgelegt
app.use('/public', express.static('./public'));
// Startet den Server und lässt ihn auf dem festgelegten Port lauschen
app.listen(PORT, () => console.log('Dieser Server läuft auf Port:', PORT));

// Erstellt ein leeres Array, in dem Posts (Bilder mit Titel) gespeichert werden
const posts = [];

//Neue Dinge hinzufügen/hochladen mit Post und der add Route. Multer soll es nutzen
// Man kann jetzt eine Middleware dazwischen packen. Die multer Funktion "upload" wird
//als Middleware hier eingesetzt.
//Auf der /newPicture Route/URL möchten wir eine Middleware haben: Upload
// Mit Single sagen wir dass wir eine Datei möchten.
// Dieses Bild hat aus der <form> einen bestimmten namen, hier: picture
//Syntax: app.post(Pfad, Middleware, Requesthandler)
//Wenn ein Post Request kommt mit /newPicture möchten wir mit multer aus uploud 
// eine Datei haben, mit einem bestimmten Namen (hier "picture"). Der muss gleich sein,
// wie das "name" aus dem Formular vom Frontend. Und das wird dann wie zuvor definiert
// in /images gespeichert
app.post('/api/posts', upload.single('postPic'), (req, res) => {

    //Verarbeiten unser Request

    //In diesem Code wird ein JavaScript-Objekt mit dem Namen "post" erstellt. Das Objekt enthält zwei Eigenschaften: "title" und "picture".

    // Die Eigenschaft "title" wird dem "req.body.title" zugewiesen. "req.body" ist ein Objekt, das von Express.js bereitgestellt wird und alle nicht-Datei-Parameter enthält, die im Anfragekörper gesendet wurden. In diesem Fall wird der Titel aus dem Anfragekörper genommen und der Eigenschaft "title" des "post"-Objekts zugewiesen.

    // Die Eigenschaft "picture" wird dem "req.file.picture" zugewiesen. "req.file" ist ebenfalls ein Objekt, das von Express.js bereitgestellt wird und die hochgeladene Datei enthält. In diesem Fall wird der Pfad zum hochgeladenen Bild der Eigenschaft "picture" des "post"-Objekts zugewiesen.
    const post = {
        title: req.body.title,
        text: req.body.text,
        //Pfad von unserem Bild
        path: req.file.path
    }

    // Fügt das Post-Object dem Array "posts" hinzu
    posts.push(post);

    // Sendet das Array "posts" als Antwort an den Client als json
    res.json(posts);

})

// Fügt eine GET-Route hinzu, um bereits gespeicherte Bilder an den Client zu senden
// Wenn diese URL im Browser aufgerufen wird, wird der Inhalt vom Array als JSON
// an den Browser gesendet als Antwort. 
//fetch auf diese Route ist möglich
app.get('/api/posts', (_, res) => {
    // Sendet das Array "posts" als Antwort an den Client
    res.json(posts)
})

app.get('/api/posts/:id', (req, res) => {
    //Hole das Objekt mit der jeweiligen ID
    const selectedPost = posts[req.params.id];
    //Schicke als Antwort das Objekt mit dem jeweiligen Post
    res.json(selectedPost);
})

