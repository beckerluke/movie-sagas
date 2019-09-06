import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import MovieListPage from '../MovieListPage/MovieListPage';
import DetailsPage from '../DetailsPage/DetailsPage';
import EditPage from '../EditPage/EditPage';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>MOVIE WORLD</h1>
        </header>
        <Router>
          <Route exact path="/" component={MovieListPage}/>
          <Route exact path="/details" component={DetailsPage}/>
          <Route exact path="/edit" component={EditPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
