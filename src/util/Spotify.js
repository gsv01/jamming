import React from 'react';




class Spotify extends React.Component{
  constructor(props){
    super(props);
  }

  let userAccessToken = '';


  getAccessToken(){
    if(userAccessToken!==''){ //if it is already set
      return userAccessToken;
    }



  }

  render(){
    return (

    );
  }
}



export default Spotify;
