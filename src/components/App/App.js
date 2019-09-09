import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import MovieListPage from '../pages/MovieListPage/MovieListPage';
import DetailsPage from '../pages/DetailsPage/DetailsPage';
import EditPage from '../pages/EditPage/EditPage';

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
          <Route exact path="/details/:id" component={DetailsPage}/>
          <Route exact path="/edit/:id" component={EditPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
