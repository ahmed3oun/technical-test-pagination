const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();

app.use(cors());

const port = '8080';

app.get('/posts', (req, res) => {
    fetch(
            "https://jsonplaceholder.typicode.com/posts"
        )
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
});

app.listen(port, () => {
    console.log("listening on port " + port);
})