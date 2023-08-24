import React, {useState,useEffect} from 'react';
import './index.scss';
import StartGame from '../StartGame'
import Board from '../Board'
import {checkWinner,AImove}  from '../AI'
import SelectPlayer from '../SelectPlayer'


const Main = () =>{
    const [Turn, setTurn] = useState(null);
    const [mode, setMode] = useState(null);
    const [AI, setAI] = useState(null);
    const [ScoreX, setScoreX] = useState(0)
    const [ScoreO, setScoreO] = useState(0)
    const [Winner, setWinner] = useState(null)
    const [ShowSquares, setShowSquares] = useState(true)
    const [WinningSquares, setWinningSquares] = useState(null)
    const [square, setSquare] = useState(Array(9).fill(null));


    const startGameButton = () => {
        setMode(true)
    }

    useEffect(() => {
        if (mode && AI == Turn) {
            // console.log(AImove(square, AI, AI == 'X' ? 'O' : 'X'));
            handleClick(AImove(square, AI, AI == 'X' ? 'O' : 'X'))
        }
        const winner = checkWinner(square)
        setWinner(winner?winner[0]:winner)
        setWinningSquares(winner ? winner[1] : winner)
        
    }, [square]);


    const countDown = (winner) => {
        setTimeout(() => {
            changeTurn()
            setShowSquares(false)
            setWinner(null)
        }, 5000);
    }

    useEffect(() => {
        if(Winner==='X')
        {
            setScoreX(ScoreX=>ScoreX+1)
        }
        else
        if(Winner==='O')
        {
            setScoreO(ScoreO =>ScoreO+1)
        }
        Winner!==null && countDown()
    }, [Winner])

    const handleClick=(i)=>{
        const squares = square.slice()
        if (squares[i] || Winner) {
            return;
        }
        squares[i] = Turn
        setSquare(squares) 
        changeTurn()
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

    const clikExit=()=>{
        setScoreO(0);
        setScoreX(0);
        setShowSquares(true);
        setWinner(null);
        setSquare(Array(9).fill(null));
        setTurn(null);
        setMode(null);
    }

    const playAgain=()=>{
        setSquare(Array(9).fill(null));
        setShowSquares(true)
    }

    return(
        <div className='gameFrame'>
           {
            mode===null?<StartGame startGameButton={startGameButton}/> : 
            Turn ? <Board clikExit={clikExit} playAgain={playAgain} ShowSquares={ShowSquares} mode={mode} Winner={Winner} Turn={Turn} squares={square} onClick={handleClick} xScore={ScoreX} oScore={ScoreO} WinningSquares={WinningSquares} />: 
            <SelectPlayer oClick={oPlayerSelect} xClick={xPlayerSelect}/>
           }
        </div>
    )
}


export default Main;