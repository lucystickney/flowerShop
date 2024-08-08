import React, { useState, useEffect } from 'react';


function Pea({ setGameState, gameState, pot, selectedPlants, setSelectedPlants }) {

    // pass the starting state --> most should start empty
    const [potState, setPotState] = useState(pot.state);  // pea's state
    //const [image, setImage] = useState()
    const [color, setColor] = useState(pot.color);  // keeps track of this pea's color + id
    

    const statement = (potState === 'grown') ? 'Remove plant' : 'Grow Plant';


    


    // gets called when selectedPlants changes
    useEffect(() => {

        if (selectedPlants.length === 2) {

            // calculate new pea genes
            // function to help calculate genes of new plant
            const calculateNewGenes = (plant1, plant2) => {
                // calculate color gene
                const [plant1Color1, plant1Color2] = plant1.color.split('');
                const [plant2Color1, plant2Color2] = plant2.color.split('');

                const colorArray = [plant1Color1 + plant2Color1, plant1Color1 + plant2Color2, plant1Color2 + plant2Color1, plant1Color2 + plant2Color2];
                const colorIndex = Math.floor(Math.random() * colorArray.length);

                setPotGenes(colorArray[colorIndex], 'color');   // set the new plant to have new color

                
            }
            calculateNewGenes(selectedPlants[0], selectedPlants[1]);

            // function to handle image change when you grow a plant
            const growPlant = () => {
                // current state is fully grown
                setPotState('grown');
                
            }
    
            growPlant();
            // reset selectedPots
            setSelectedPlants([]);

        }

    }, [selectedPlants, setSelectedPlants]); // called whenever selectedPlants changes


    // gets called when pot changes
    useEffect(() => {

    })

    

    

    const setPotGenes = (genotype, phenotype) => {
        switch (phenotype) {    // should have more later
            case 'color':
                setColor(genotype);
                break;
            default:
                console.log('phenotype not recognized');
        }
    }

    // called when a Pea plant is selected to crossPollinate
    const handleSelected = (pot) => {
        console.log(color);
        // check if we are currently pollinating -> state of game
        // check if this plant is grown
        
        // only non-empty pots have this option
        if (selectedPlants.includes(pot)) {
            // remove plant by filtering it out
            setSelectedPlants((prev) => prev.filter((p) => p !== pot));
        } else {
            // add it to selected plants
            setSelectedPlants((prev) => [...prev, pot]);
        }
    }
    
    // determines what action to take when this pot is clicked
    const handleClick = (pot) => {
        console.log('clicking on pot');
        // either show stats or allow it to pollinate
        if (potState === 'grown' && gameState === 'pollinating') {
            console.log('selecting to be pollinated')
            // allow it to be selected to be crosspollinated
            handleSelected(pot)
        } else {
            console.log('clicking an empty pot');
            // display stats of pea plant
        }

        // nothing else should happen
    }

    

    return (
        // a pot image
        // plant image, based on fields
        // plant stats, separate component
        
        <div>
            <h1 onClick={() => handleClick(pot)}>pea plant</h1>
            <p>
                plant stats:
                {pot.id}
                {pot.color}
            </p>
            <button onClick={() => handleClick(pot)}>{statement}</button>
            
        </div>
    )
}

export default Pea;