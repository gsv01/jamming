import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js'

class Playlist extends React.Component{
  constructor(props){
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event){
    const rename = event.target.value;
    this.props.onNameChange(rename);
  }

  render(){
    return (
      <div className="Playlist">
        <input onChange={this.handleNameChange} value={this.props.playlistName}/>
        <TrackList onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} tracks={this.props.playlistTracks}/>
        <button onClick={this.props.onSave} className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}


export default Playlist;
