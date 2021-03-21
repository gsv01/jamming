import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar.js'
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchResults : [
        {name: 'name1',artist: 'artist1',album: 'album1',id: 0},
        {name: 'name2',artist: 'artist2',album: 'album2',id: 1},
        {name: 'name3',artist: 'artist3',album: 'album3',id: 2}
      ],
      playlistName:'Gym Songs',
      playlistTracks: [
        {name: 'name4',artist: 'artist4',album: 'album4',id: 4},
        {name: 'name5',artist: 'artist5',album: 'album5',id: 5}
      ]
    };

    //Bind the function because it is modifying the states
    this.addTrack = this.addTrack.bind(this);
  }


  addTrack(track){
    // If flag is 0 means that we did not find the track
    // in Playlist and we are going to add it to the PlaylistTracks
    let currentId = track.id;
    let flag = 0;
    let foundLocation = 0;

    for( let i=0 ; i < this.state.playlistTracks.length ; i++){
      if( currentId === this.state.playlistTracks[i].id ){
        flag = 1;
        foundLocation = i;
        //Found
        break;
        //Exit loop
      }
    }

    if(!flag){ //If found
      let tempList = this.state.playlistTracks; //Make a copy
      tempList.push(this.state.searchResults[foundLocation]); //Add to copy
      this.state.PlaylistTracks = tempList; //Assign copy to state
    }


  }


  render(){
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar/>
          <div className="App-playlist">
            <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
    </div>
    );
  }
}


export default App;
