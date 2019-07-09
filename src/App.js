import React, { Component } from 'react';
import InputSearch from './components/inputSearch';
import StarSearch from './components/starSearch';
import Movies from './components/movies';
import AddMovie from './components/addMovies';
class App extends Component {
  render() { 
    return ( 
      <div>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <InputSearch/>
        <StarSearch/>
      </div>
      <Movies/>
      <AddMovie/>
    </div>
    );
  }
}
 
export default App;