const { addNewPlayer, getPlayers, getPlayerWithId, updatePlayer, deletePlayer } = require('../controllers/playerControllers');

const routes = (app) => {
    app.route('/players')
    .get(getPlayers) // Get EndPoints
    .post(addNewPlayer) // Post End Points

    app.route("/player/:PlayerId")
    .get(getPlayerWithId)
    .put(updatePlayer)
    .delete(deletePlayer)
};


module.exports = routes;
