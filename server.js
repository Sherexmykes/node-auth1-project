const express = require('express');

const server = express();

server.use(express.json());


// check route 
server.get('/', (req, res) => {
      res.send(`<h2>Server is Workking</h2>`)
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "Server Down"})
      })
    });

module.exports = server; 