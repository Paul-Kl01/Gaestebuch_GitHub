"use strict";
/*
// Http Module nutzen
let http = require("http");

// Anfrage verarbeiten
let server = http.createServer((request, response) => {
    let url = request.url;
    if (url == "/hallo.html") {
        response.write("hallo");
        response.end();
    }
    console.log("wurde ausgeführt!");
    response.write("Hallo Welt" + url);
    response.end();
});

server.listen(5000);
*/

let express = require("express");

let app = express();
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/index", (req, res) => {
    res.render("index", {
        title: "Titel Variable"
    });
    res.end();
});

app.listen(5000, () => {
    console.log("App wurde gestartet");
});