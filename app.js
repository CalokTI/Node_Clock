const express = require("express");
const app = express();

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {

    res.sendFile(__dirname + '/public/clock.html');
})


const port = process.env.PORT || 8080;
app.listen(port);
console.log('Server started at http://localhost:' + port);