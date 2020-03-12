const express = require('express');
const helmet = require('helmet');
const server = express();
server.use(helmet());
server.use(express.json());
const usersRouter = require('./users/users-router.js');
const authRouter = require('./auth/auth-router.js');


// check route 
server.get('/', (req, res) => {
      res.send(`<h2>Server is Workking</h2>`)
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "Server Down"})
      })
    });
    server.use('/api/auth', authRouter);
    server.use('/api/users', usersRouter);
module.exports = server; 