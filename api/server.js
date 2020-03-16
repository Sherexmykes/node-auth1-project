const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const usersRouter = require('../users/users-router.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

const sessionConfig = {
      name: 'ultimate warrior',
      secret: "Be Brave and Be Strong",
      cookie: {
            maxAge: 1000 * 60 * 60 * 24,
            secure: false,
            httpOnly: true,
      },
      resave: false,
      saveUninitialized: true,
      store: new KnexSessionStore({
            knex: require('../data/dbConfig.js'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createTable: true,
            clearInterval: 1000 * 60 * 60,
      }),    
};

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(session(sessionConfig));

 
server.get('/', (req, res) => {
      res.send(`<h2> I nailed it!</h2>`)
      .catch(err => {
            console.log(`\nERROR`, err);
            res.status(500).json({ error: "I didn' nail it."})
      })
});

server.use('/api/users', usersRouter);
server.use('/api/auth', authRouter);

module.exports = server;