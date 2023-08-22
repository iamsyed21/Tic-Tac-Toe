import React from 'react'
import './index.scss'


const StartGame = (startGameButton) =>{
    return(
        <>
       
        <div>
            <button onClick={startGameButton}>
                START!
            </button>
        </div>
        </>
    )
}

export default StartGame;