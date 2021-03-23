import React from 'react';
import './SearchResults.css';

import TrackList from '../TrackList/TrackList.js';


class SearchResults extends React.Component{
  render(){
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList onAdd={this.props.onAdd}   isRemoval={this.props.isRemoval} tracks={this.props.searchResults}/>
      </div>
    );
  }
}


export default SearchResults;
