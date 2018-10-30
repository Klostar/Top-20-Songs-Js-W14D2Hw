import React from 'react';
import Song from './Song';
class SongList extends React.Component{

render(){

    const songNodes = this.props.entry.map((entry) =>{
      return(
        <Song
          key = {entry.id.attributes["im:id"]}
          song = {entry}>

        </Song>
      )
    })

    return(
      <div className='song-list'>

        <li>
          {songNodes}
        </li>

      </div>
    )
  }
}


export default SongList;
