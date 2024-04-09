const express = require('express');
const app = express();


// controllers
const serveIndex = (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
}

const serveAbout = (req, res, next) => {
    res.send('<h1>About</h1>');
}

const serveData = (req, res, next) => {
    const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
    res.send(data);
}

const serveHello = (req, res, next) => {
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
}


// endpoints
app.get('/', serveIndex);
app.get('/about', serveAbout);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 