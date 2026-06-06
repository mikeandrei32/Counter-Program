import { useState } from 'react';

const Counter = () => {

    let [ counter, setCounter ] = useState(0);

    const increaseBtn = () => {
        setCounter( counter + 1 );
    }

    const resetBtn = () => {
        setCounter( counter = 0 );
    }

    const decreaseBtn = () => {
        setCounter( counter - 1 );
    }

    return(
        <div className='container'>
            <h1>{ counter }</h1>
            <div className='button-container'>
                <button onClick={increaseBtn}>Increase</button>
                <button onClick={resetBtn}>Reset</button>
                <button onClick={decreaseBtn}>Decrease</button>
            </div>
        </div>
    )

}

export default Counter;