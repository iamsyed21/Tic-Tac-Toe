import React, {useState,useEffect} from 'react';
import './index.scss';
import StartGame from '../StartGame'


const Main = () =>{
    const [Turn, setTurn] = useState(null);
    const [mode, setMode] = useState(null);
    const [AI, setAI] = useState(null);


    const clickAIBtn = () => {
        setMode(true)
    }

    let changeTurn=()=>{
        if(Turn==='X')
            setTurn('O')
        else
        if(Turn==='O')
            setTurn('X')
    }

    const oPlayerSelect = () => {
        setTurn('O')
        setAI('X')
    }

    const xPlayerSelect = () => {
        setTurn('X')
        setAI('O')
    }

    return(
        <div className='gameFrame'>
            <StartGame/>
        </div>
    )
}


export default Main;