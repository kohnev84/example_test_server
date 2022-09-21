const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.render('index', req.query);
});

app.get('/ited', function (req, res) {
    res.send("Hello I ited")
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));
