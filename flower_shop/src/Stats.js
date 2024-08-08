

function Stats( {pot} ) {
    const statement = (potState === 'grown') ? 'Remove plant' : 'Grow Plant';


    const handleButtonClick = () => {
        if (pot.state === 'grown') {
            // the button should be remove
            // change the state of the pot
            // changing the state shouls change the image from useEffect in Pea
        }   
    }


    return (
        <div>
            {showStats && (
            <div>
                <h1>Pea Plant</h1>
                <p>Flower Color: {pot.color}</p>
                <button>{statement}</button>
            </div>
            )}
        </div>
    )
}