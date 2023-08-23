import React from 'react';
import './index.scss'


const SelectPlayer = ({oClick, xClick}) =>{
return(
    <div>
    Select X or O!
    <br/>
    <button onClick={xClick}>Select X</button>
    <br/>
    <button onClick={oClick}>Select O</button>
    </div>
)
}

export default SelectPlayer;