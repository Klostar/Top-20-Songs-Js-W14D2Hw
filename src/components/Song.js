import React from 'react';


const Song = props => {
    return(
      <div className = 'song'>

      <li>
    <h2>{props.song['im:name']['label']}</h2>
        <p> {props.song['im:artist']['label']}</p>

      </li>
      </div>

);
}

export default Song;
