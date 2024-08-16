import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import './App.css';

import PlayerForm from "./components/Player/PlayerForm";
import PlayerList from "./components/Player/PlayerList";
import PlayerSingle from "./components/Player/PlayerSingle";

function App() {
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});

  useEffect(() => {
    const url = 'http://localhost:4000/players';

    axios.get(url)
      .then((response) => setPlayers(response.data))
      .catch((error) => console.error(error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>
      <div className="row">
        <div className="col s3">
          <PlayerList players={players} />
        </div>
        <div className="col s9">
          <PlayerSingle player={currentPlayer} />
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <PlayerForm />
        </div>
      </div>
    </div>
  );
}

export default App;
