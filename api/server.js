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

server.post('/games', async (req, res) =>{
    const game = req.body;
    if(game.name && game.genre){
        db('games').insert(game)
        .then(id => {
            res
            .status(201)
            .json({message: `Game ${id} added`})
        })
        .catch(err =>{
            res
            .status(500)
            .json({error: "There was an error adding the game to the database"})
        })
    } else {
        res
        .status(422)
        .json({errorMessage: "Please provide the name and genre of the game"})
    }
})

module.exports = server;