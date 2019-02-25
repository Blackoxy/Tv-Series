import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Tvseries from './components/Tv-Series';

class App extends Component {
  

  render() {
    return (
      <div className="App"> 
          <h1 className='App-intro'>TV Series List
      
          </h1>
          <Intro message="Here you can find all of your most loved series"/>
          <Tvseries />
      </div>
    );
  } 
}

export default App;
