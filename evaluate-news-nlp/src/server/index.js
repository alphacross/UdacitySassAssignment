const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.static('dist'))
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/test', async function (req, res) {
    let formData = new FormData();

    formData.append('key', process.env.API_KEY);
    formData.append('lang', 'auto');
    formData.append('url', req.body.url);

    const response = await fetch('https://api.meaningcloud.com/sentiment-2.1', {
        method: 'POST',
        body: formData
    });

    res.send(await response.json());
})

