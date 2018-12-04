require("dotenv").config()
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views')) // views folder
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));

const comments = ['This is a comment', 'This is also a comment'];

app.get('/', (req, res, next) => {
    res.render('index', { comments });
})

app.get('/login', (req, res, next) => {
    res.render('login');
})

app.post('/post', (req, res, next) => {
    comments.push(req.body.comment)
    res.redirect('/');
})

const server = http.createServer(app);
server.listen(3000, () => {
    console.log('server is listening on port 3000')
});