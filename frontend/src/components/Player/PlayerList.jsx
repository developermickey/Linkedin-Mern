const PlayerList = (props) => {
    return (
        <div>
            <ul className="collection with-header">
                <li className="collection-header">
                    <p>Players</p>
                </li>
                {props.players.map((item) => {
                    return (
                        <a href="#" className="collection-item" key={item.id}>
                            {item.firstName} {item.lastName}
                        </a>
                    );
                })}
            </ul>
        </div>
    );
}

export default PlayerList;
