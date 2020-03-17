const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);
const configKnex = require("./knexConfig.js");
module.exports =  {
    name: 'ultimate warrior',
    secret: "Live Strong, Act Bold, Be Brave",
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
