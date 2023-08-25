import React from 'react';
import './index.scss'
import ScoreCard from '../ScoreCard';


const board = ({ squares, onClick, Turn, AI, xScore, oScore, Winner, WinningSquares, ShowSquares, playAgain, clikExit}) =>{
    const renderSquare=(i)=>{
        const color = WinningSquares !== null && WinningSquares.indexOf(i) !== -1 ?'#39ff14':null
        return <button color={color} className='boardTileButton' onClick={() => { onClick(i) }}>
            {!squares[i] ? '.' : squares[i]}
            </button>
    }
return(
    <div className='boardContainer'>
            <h1>{Winner === 'd' ? "Draw" : Winner !== null && "Winner: " + Winner}</h1>
            {Winner === null && <ScoreCard Turn={Turn} xScore={xScore} oScore={oScore} />}
            <br/>
            
            {ShowSquares &&
                <div>
                    <div>
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                    </div>

                    <div>
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                    </div>

                    <div>
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}
                    </div>
                </div>
            }
            {!ShowSquares && 
                <div>
                    <button className= 'playAgainButton'onClick={playAgain}>Play Again</button>
                </div>
            }
        </div>
)
}

export default board;