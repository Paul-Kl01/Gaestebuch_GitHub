"use strict";
// Server nutzen
let express = require("express");
let bodyParser = require("body-parser");
// Gästebuch Module holen
let GuestbookEntry = require("./src/GuestbookEntry");


let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// Plugins verwenden/konfigurieren
app.use(bodyParser.urlencoded({extended: true})); // Formular verarbeiten
app.use(express.static("./public"));

// Gästebucheinträge in Array speichern
let entries = [
    new GuestbookEntry("Titel1", "Inhalt 1"),
    new GuestbookEntry("Titel2", "Inhalt 2"),
];

app.get("/index", (req, res) => {
    res.render("index", {
        entries: entries
    });
    res.end();
});

app.post("/guestbook/new", (req, res) => {
    let title = req.body.title;
    let content = req.body.content;
    
    let newEntry = new GuestbookEntry(title, content);
    entries.push(newEntry);
    
    res.redirect("/index");
});

app.listen(5000, () => {
    console.log("App wurde auf Port 5000 gestartet");
});