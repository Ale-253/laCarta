const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030;

app.use(express.static('public'));

/* RUTAS */

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "home.html"))
)

app.get("/principales", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "principales.html"))
)

app.get("/postres", (req, res) =>
    res.sendFile(path.join(__dirname, "views", "postres.html"))
)

app.listen(PORT, () =>
    console.log("Server running in http://localhost:" + PORT)
);



