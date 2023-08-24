import React from 'react'

function ScoreCard({Turn,xScore,oScore}) {
    return (
        <div>
            <button width={'100px'} height={'100px'}>X</button>
            {/* {Turn === 'X' && <Score>&#8594;</Score>} */}
            <span turn={Turn} check='X'>{xScore}</span>
            <button width={'100px'} height={'100px'}>O</button>
            {/* {Turn === 'O' && <Score>&#8594;</Score>} */}
            <span turn={Turn} check='O'>{oScore}</span>
        </div>
    )
}

export default ScoreCard;