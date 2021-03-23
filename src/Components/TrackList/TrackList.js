import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

class TrackList extends React.Component{
  render(){
    return (
      <div className="TrackList">
          {/*}<!-- You will add a map method that renders a set of Track components  -->*/}
          {
            this.props.tracks.map(
              (track) => {
                return <Track onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} track={track} key={track.id}/>
              }
            )
          }
      </div>
    );
  }
}


export default TrackList;
