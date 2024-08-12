//import React, { useState, useEffect } from 'react';

function Stats( {id, pot, showing, potState, changePot, setGameState, pollinate, growPlant} ) {
    const statement = (potState === 'grown') ? 'Remove plant' : 'Grow Plant';
    console.log("pot: "+pot);

    // const handleButtonClick = () => {
    //     if (pot.state === 'grown') {
    //         // the button should be remove
    //         // change the state of the pot
    //         // changing the state shouls change the image from useEffect in Pea
    //     }   
    // }

    // click the button --> its either grow or remove
    const handleGrowOrRemove = () => {
        if (potState === 'grown') {
            console.log('removing plant');
            // remove the plant
            changePot(id, 'state', 'empty');
            changePot(id, 'color', '');
            // update the pot's fields
            
            
        } else {
            // grow plant --> go into logic of cross polination
            console.log('growing plant');
            changePot(id, 'state', 'growing');
            setGameState('pollinating');
        }
    }


    return (
        <div className="stats-box">
            {showing && ( 
            <div>
                
                <p>Flower Color: {pot.color}</p>
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