import React from 'react';


const Song = props => {
    return(
      <div className = 'song'>
        <h2>  {props.song['im:name']['label']}</h2>

      </div>

);
}

export default Song;
