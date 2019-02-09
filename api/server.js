const express = require('express');

const server = express();
const db = require('../dbConfig.js')

server.use(express.json());

server.get('/games', async (req, res) =>{
    db('games')
    .then(games =>{
        res
        .status(200)
        .json(games)
    })
    .catch(err =>{
        res
        .status(500)
        .json({error: "Unable to retrieve games"})
    })
})

module.exports = server;