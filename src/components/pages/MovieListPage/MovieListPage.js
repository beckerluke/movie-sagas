import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import mapStateToProps from '../../modules/mapStateToProps';
import Grid from '@material-ui/core/Grid'
import {withRouter} from 'react-router-dom';
import MovieItem from '../MovieItem/MovieItem';

class MovieListPage extends Component {
  // Renders the entire list of movies and posters from Database
  
  componentDidMount() {
    // dispatch to SAGAS to initiate axios GET request and retrieve movies and genres data from db and store in reducers
    this.props.dispatch({type: 'GET_MOVIES'});
    this.props.dispatch({type: 'GET_GENRES'});
  }

  render() {
    console.log(this.props.reduxState.movies);
    console.log(this.props.reduxState.genres);
    
    // array of movie objects from database in movies reducer
    // const movieListArray = this.props.reduxState.movies.map((movieItem, index) => {
    //   return (
    //     <div key={index}>
    //     <h2>{movieItem.title}</h2>
    //       <div>
    //         <img onClick={this.posterClick} src={movieItem.poster}/>
    //         <p>{movieItem.description}</p>
    //       </div>
    //     </div>
    //   )
    // });

    // array of movie objects from database in movie reducer
    const movieListArray = this.props.reduxState.movies.map((movieItem, index) => {
      return (
      <Grid key={index} item>
        <MovieItem movieItem={movieItem}></MovieItem>
      </Grid>
      )});

    return (
      <div className="App">
        <h1>Movie List Page</h1>
       <div>
         <Grid container spacing={8}>
            {movieListArray}
        </Grid>
       </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(MovieListPage));
