import express from 'express';
import session from 'express-session';
import crypto from 'crypto';
import path from 'path';
const Mongoose = require('mongoose');

// Setup environment variables
require('dotenv').config();

// Setup Express
const app = express();
const port = process.env.PORT || 3001;
const mongoURI = process.env.MONGODB_URI || process.env.MONGODB_URI;

// Setup body-parser
app.use(express.json());
app.use(function (req, res, next) {
    next()
})

// Setup session middleware so we can access session inside of socket instance
const httpServer = require("http").createServer(app);
const options = { /* ... */ };
let sessionMiddleware = session({
    secret: crypto.randomBytes(48).toString('hex'),
    resave: false,
    saveUninitialized: false
});
app.use(sessionMiddleware);

// Setup our routes.
import routes from './routes';
app.use('/', routes);

// Make the "public" folder available statically
app.use(express.static(path.join(__dirname, '../public')));

// Serve up the frontend's "build" directory, if we're running in production mode.
if (true) {
    console.log('Running in production!');

    // Make all files in that folder public
    app.use(express.static(path.join(__dirname, '../../sss_frontend/build')));

    // If we get any GET request we can't process using one of the server routes, serve up index.html by default.
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../../sss_frontend/build/index.html'));
    });
}

// Connect to MongoDb and if successful start server
Mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    app.listen(port, () => {
        console.log(`Listening to requests on http://localhost:${port}`);
    })
);
