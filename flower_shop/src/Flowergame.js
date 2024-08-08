import Pea from './Pea';
import React, { useState } from 'react';

function Flowergame() {
    // state of game itself

    const [gameState, setGameState] = useState('idle'); // idle, pollinating
    //const [peaCount, setPeaCount] = useState(0); // keeps track of total grown plants
    const [selectedPlants, setSelectedPlants] = useState([]);   // selected plants to create new plant

    const pots = [
        { id: 1, color: 'Xx', state: 'grown' },    // start with color, add more
        { id: 2, color: 'xx', state: 'grown' },
        { id: 3, color: '', state: 'empty' },
        { id: 4, color: '', state: 'empty' }
    ]

    
    return (
        <div>
            {pots.map((pot) => (    // creates a Pea pot for every plant
                <Pea 
                    setGameState={setGameState}
                    gameState={gameState}
                    pot={pot}   // send entire pot instance through
                    selectedPlants={selectedPlants}
                    setSelectedPlants={setSelectedPlants}
                />
            ))}

        </div>
    )

}

export default Flowergame;