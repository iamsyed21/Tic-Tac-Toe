import React from 'react'
import './index.scss';

function ScoreCard({Turn,xScore,oScore}) {
    return (
        <div>
            <button className='outerSpan'>
            <button className='scoreTiles'>'X' = {xScore}</button>
            </button>
            <button className='outerSpan'>
            <button className='scoreTiles'>'O' = {oScore}</button>
            </button>
        </div>
    )
}

export default ScoreCard;