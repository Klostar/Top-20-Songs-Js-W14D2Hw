import React from 'react';


const Song = props => {
    return(
      <div className = 'song'>
        <ol>

        <h2>  {props.song['im:name']['label']}</h2>
        <p> {props.song['im:artist']['label']}</p>

      </ol>

      </div>

);
}

export default Song;
