import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import mapStateToProps from '../../modules/mapStateToProps';
import Grid from '@material-ui/core/Grid'

class MovieListPage extends Component {
  // Renders the entire list of movies and posters from Database
  
  componentDidMount() {
    this.props.dispatch({type: 'GET_MOVIES'});
  }
  render() {
    console.log(this.props.reduxState.movies);
    // array of movie objects from database in movies reducer
    const movieListArray = this.props.reduxState.movies.map((movieItem, index) => {
      return (
        <div key={index}>
        <h2>{movieItem.title}</h2>
          <div>
            <img src={movieItem.poster}/>
            <p>{movieItem.description}</p>
          </div>
        </div>
      )
    });

    return (
      <div className="App">
        <h1>Movie List Page</h1>
       <div>
       {movieListArray}
       </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(MovieListPage);
