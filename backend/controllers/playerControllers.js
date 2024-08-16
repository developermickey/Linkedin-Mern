const mongoose = require('mongoose');
const { PlayerSchema } = require('../models/playerModel');

const Player = mongoose.model('Player', PlayerSchema);

const addNewPlayer = async (req, res) => {
    try {
        const newPlayer = new Player(req.body);
        const player = await newPlayer.save();
        res.status(201).json(player); // 201 Created
    } catch (error) {
    
        res.status(400).json({ error: 'Failed to add new player', details: error.message }); // 400 Bad Request
    }
};

const getPlayers = async (req, res) => {
    try {
        const players = await Player.find({})
        res.json(players);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add new player', details: error.message }); // 400 Bad Request
    }
}

const getPlayerWithId = async (req, res) => {
    try {
        const player = await Player.findById(req.params.PlayerId);
        res.json(player);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add new player', details: error.message }); // 400 Bad Request
    }
}


const updatePlayer = async (req, res) => {
    const { PlayerId } = req.params; // Assuming PlayerId is passed as a URL parameter
    const updateData = req.body; // The data you want to update

    try {
        // Ensure that req.body contains the fields you want to update
        const player = await Player.findOneAndUpdate(
            { _id: PlayerId }, // Find player by ID
            updateData, // Update data
            { new: true, runValidators: true } // Return the updated document and run validation
        );

        if (!player) {
            return res.status(404).json({ error: 'Player not found' }); // Handle case where player is not found
        }

        res.json(player); // Return the updated player
    } catch (error) {
        res.status(400).json({ error: 'Failed to Update player', details: error.message }); // 400 Bad Request
    }
};


const deletePlayer = async (req, res) => {
    const { PlayerId } = req.params;
    try {
      await Player.findOneAndDelete(req.params.PlayerId);
        res.json({message: "Player deleted successfully"});
    } catch (error) {
        res.status(400).json({ error: 'Failed To Delete Player', details: error.message }); // 400 Bad Request
    }
}




module.exports = { addNewPlayer, getPlayers, getPlayerWithId, updatePlayer, deletePlayer };
