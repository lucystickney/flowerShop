//import React, { useState, useEffect } from 'react';

function Stats( {id, pot, showing, potState, changePot, setGameState, pollinate, growPlant} ) {
    let statement;
    console.log("pot: "+pot);

    if (pot.state === 'grown') {
        statement = 'Remove Plant';
    } else if (pot.state === 'empty') {
        statement = 'Grow Plant';
    } else {
        statement = 'Cancel Pollination';
    }

    // when plant is growing, should display "select x more plants"
    const selectTwo = (pot.state === 'growing');
    // const handleButtonClick = () => {
    //     if (pot.state === 'grown') {
    //         // the button should be remove
    //         // change the state of the pot
    //         // changing the state shouls change the image from useEffect in Pea
    //     }   
    // }

    // click the button --> its either grow or remove
    const handleGrowOrRemove = () => {
        if (pot.state === 'grown') {
            console.log('removing plant');
            // remove the plant
            changePot(id, 'state', 'empty');
            changePot(id, 'color', '');
            // update the pot's fields
            changePot(id, 'image', '');
            
            
        } else if (pot.state ==='empty') {
            // grow plant --> go into logic of cross polination
            console.log('growing plant');
            changePot(id, 'state', 'growing');
            setGameState('pollinating');
        } else if (pot.state === 'growing') {
            // should give option to cancel pollination
            console.log('cancel pollination');
            changePot(id, 'state', 'empty');
            setGameState('idle');
        }
    }


    return (
        <div className="stats-box">
            {showing && ( 
            <div>
                
                <p>Flower Color: {pot.color}</p>
                {selectTwo && (
                    <p>Select 2 grown pots</p>
                )}
                <button onClick={handleGrowOrRemove}>{statement}</button>
                {pollinate &&  (
                <button onClick={growPlant}>Grow New Plant</button>
                )}
            </div>
            )}
        </div>
    )

}

export default Stats;