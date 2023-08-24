import React from 'react'
import helloHuman from '../../Resources/pictures/hellohuman.png';
import './index.scss'


const StartGame = ({startGameButton}) =>{
    return(
        <>
       
        <div className='startGameContainer'>
            <img src={helloHuman} className='helloPicture'/>
            <button onClick={startGameButton} className='startNowButton'>
                START!
            </button>
        </div>
        </>
    )
}

export default StartGame;