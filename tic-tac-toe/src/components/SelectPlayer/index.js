import React from 'react';
import './index.scss'
import choose from '../../Resources/pictures/choose.png';


const SelectPlayer = ({oClick, xClick}) =>{
return(
    <div>
    <div className='chooseContainer'>
  <h1>Select 'X' or 'O'</h1>
    <button onClick={xClick} className='chooseButton'>Select X</button>
    <br/>
    <button onClick={oClick} className='chooseButton'>Select O</button>

    </div>
    <img src= {choose} alt="Choose" className='chooseRobot'/>
    </div>
)
}

export default SelectPlayer;