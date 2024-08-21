import React, { useState, useEffect } from 'react';
import Stats from './Stats';
//import colors from './utils/utils';
import colors from './utils/utils';




// setGameState => sets the game state to idle or pollinating
// gameState => either idle or pollinating
// pot => id number of this pot, index into the pots array
// selectedPlants => array of selected plants to be pollinated
// setSelectedPlants => updates array of selected plants
// allPots => array of all pots that exist
// updatePots => function that updates traits of the pots array
function Pea({ setGameState, gameState, id, selectedPlants, setSelectedPlants, allPots, updatePots, color_image }) {
    console.log("first pot: " + allPots[0].color);
    //let color_image;
   // const colors = [{rec_color}, {dom_color}];
    // pass the starting state --> most should start empty
    // const [potState, setPotState] = useState(pot.state);  // pea's state
    // //const [image, setImage] = useState()
    // const [color, setColor] = useState(pot.color);  // keeps track of this pea's color + id
    const [showStats, setShowStats] = useState(false);  // start by hiding stats
    const [pollinate, setPollinate] = useState(false);  // true when 2 are selected to be pollinated
   // const statement = (potState === 'grown') ? 'Remove plant' : 'Grow Plant';

    // get color with allPots[id].color
    // get state with allPots[id].state



    // when 2 peas are added to selected plants, it displays the "grow" button
    useEffect(() => {
        // ready to pollinate, should display button
        if (selectedPlants.length === 2 && allPots[id].state === 'growing') {
            setPollinate(true);
        }
    }, [setPollinate, selectedPlants, allPots, id]);


    //function to handle image change when you grow a plant
    const growPlant = () => {

        // calculates genes of ids in selectedPlants
        calculateNewGenes(allPots[selectedPlants[0]].color, allPots[selectedPlants[1]].color);
        // current state is fully grown
        updatePots(id, 'state', 'grown');
        setGameState('idle');
        setPollinate(false);

    }


    // pass in the traits of the two plants
    const calculateNewGenes = (plant1, plant2) => {

        console.log('plant1: ' + plant1);
        console.log('plant2: ' +plant2);
        // calculate color gene
        const [plant1Color1, plant1Color2] = plant1.split('');
        const [plant2Color1, plant2Color2] = plant2.split('');

        const colorArray = [plant1Color1 + plant2Color1, plant1Color1 + plant2Color2, plant1Color2 + plant2Color1, plant1Color2 + plant2Color2];
        const colorIndex = Math.floor(Math.random() * colorArray.length);
        console.log('index: ' + colorIndex);
        console.log('chosen color: '+ colorArray[colorIndex]);
        setPotGenes(colorArray[colorIndex], 'color');   // set the new plant to have new color
    }

    // sets the genes of this pot to show new growth
    const setPotGenes = (genotype, phenotype) => {
        switch (phenotype) {    // should have more later
            case 'color':
                updatePots(id, 'color', genotype);
                console.log("potColor: "+ allPots[id].color);
                // if genotype contains 'X':
                if (genotype.includes('X')){
                    // it is dominant
                    updatePots(id, 'image', colors[1]);
                }
                else {
                    updatePots(id, 'image', colors[0]);
                }
                

                    // set image to be dominant color
                // else: 
                    // set image to recessive
                break;
            default:
                console.log('phenotype not recognized');
        }
    }

    // called when a Pea plant is selected to crossPollinate
    // just adds id # to selectedPlants
    const handleSelected = () => {
        console.log(allPots[id].color);
        // check if we are currently pollinating -> state of game
        // check if this plant is grown
        
        // only non-empty pots have this option
        if (selectedPlants.includes(id)) {
            console.log('removing from selected');
            // remove plant by filtering it out
            setSelectedPlants((prev) => prev.filter((p) => p !== id));
        } else {
            console.log('adding to selected');
            // add it to selected plants
            setSelectedPlants((prev) => [...prev, id]);
        }
    }
    

    // toggles whether stats are shown or chosen for pollination
    const handleToggleClick = () => {

        // allow pot to be selected for pollinatiion
        if (gameState === 'pollinating' && allPots[id].state === 'grown') {

            console.log('selecting to be pollinated');
            handleSelected();
        } else {
            // toggle show stats
            console.log('showing:'+ showStats);
            setShowStats((prev) => !prev);  // setShowStats expects either a value or a func that defines the new val of showStats
        }
    }

    

    return (
        // a pot image
        // plant image, based on fields
        // plant stats, separate component
        
        <div className={`pea-plant-${id}`} onClick={handleToggleClick}>
            <h1>pea plant</h1>
            {color_image && <img src={color_image} alt="flowerPot"/>}
            <Stats id={id} pot={allPots[id]} showing={showStats} changePot={updatePots} setGameState={setGameState} pollinate={pollinate} growPlant={growPlant}/>
            
        </div>
    )
}

export default Pea;