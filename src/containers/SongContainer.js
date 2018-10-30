import React from 'react';


class SongContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      entry:[]
    }

  };
componentDidMount(){
  fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
  .then(response => response.json())
  .then(json => this.setState({entry: json}))

}

render(){
  return(
  <div>
    <h2>Top 20 Songs</h2>
    <SongList entry={this.state.entry} />
  </div>
    );
  }
}
export default SongContainer;
