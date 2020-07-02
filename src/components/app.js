import React, { Component } from 'react';
import axios from 'axios'
import Unsplash from './unsplash';




export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }

    this.handleGetData = this.handleGetData.bind(this)
  }
  
  handleGetData() {
    fetch('https://api.unsplash.com/search/photos/?client_id=HN_kjPdQ-BoIKjcaX0ItpS0T0R4_CJb2C3ZycC6pWQI&query=flower', {method: 'GET'})
    .then(response => response.json())
    .then(data => this.setState({data: data.results[0].urls.small}))
    .catch(error => console.log(error))

    
    
  }



  render() {
   this.handleGetData()
    return (
      <div className='app'>
       <img src={this.state.data} />
      </div>
    );
  }
}
