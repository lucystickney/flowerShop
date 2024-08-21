import Pea from './Pea';
import React, { useState } from 'react';
import colors from './utils/utils';
import background from './images/flowerPots.png';

function Flowergame() {
    // state of game itself

    const [gameState, setGameState] = useState('idle'); // idle, pollinating
    //const [peaCount, setPeaCount] = useState(0); // keeps track of total grown plants
    const [selectedPlants, setSelectedPlants] = useState([]);   // selected plants to create new plant

    const [pots, setPots] = useState([
        { id: 0, color: 'Xx', state: 'grown', image: colors[1] },    // start with color, add more
        { id: 1, color: 'xx', state: 'grown', image: colors[0] },     // id is same as index into pots
        { id: 2, color: '', state: 'empty', image: '' },
        { id: 3, color: '', state: 'empty', image: '' }
    ]);

    console.log(pots[0].color);

    const updatePeas = (id, trait, newTrait) => {
        setPots((prevPots) => {
            const newPeas = [...prevPots];
            newPeas[id] = {...newPeas[id], [trait]: newTrait };
            return newPeas;
       });
    }
      
    
    return (
        <div className="flowerShop-container">
            <img src={background} alt="empty pots"/>
            <div className="peas-container">
            {pots.map((pot) => (    // creates a Pea pot for every plant

                <Pea
                    key={pot.id}
                    setGameState={setGameState}
                    gameState={gameState}
                    id={pot.id}   // send index into pot array
                    selectedPlants={selectedPlants}
                    setSelectedPlants={setSelectedPlants}
                    
                    allPots={pots}  // send all pots to every pot
                    updatePots={updatePeas}
                    color_image={pot.image}
                />
            ))}
            </div>

        </div>
    )

}

export default Flowergame;