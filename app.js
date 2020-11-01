"use strict";
// Server nutzen
let express = require("express");
// Gästebuch Module holen
let GuestbookEntry = require("./src/GuestbookEntry");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

// Plugin verwenden/konfigurieren
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
    res.write("Erfolgreich");
    res.end();
});

app.listen(5000, () => {
    console.log("App wurde auf Port 5000 gestartet");
});