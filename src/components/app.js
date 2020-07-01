import React, { Component } from 'react';
import axios from 'axios'


export default class App extends Component {
  constructor() {
    super();

    this.getSearchFoto = this.getSearchFoto.bind(this)
  }
  getSearchFoto () {
    axios.get('https://api.unsplash.com/search/photos/?client_id=HN_kjPdQ-BoIKjcaX0ItpS0T0R4_CJb2C3ZycC6pWQI&query=america')
  .then(response => {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  
  render() {
    this.getSearchFoto();
    return (
      <div className='app'>
        
      </div>
    );
  }
}
