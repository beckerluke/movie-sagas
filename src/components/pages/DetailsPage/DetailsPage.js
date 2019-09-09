import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import {withRouter} from 'react-router-dom'
import mapStateToProps from '../../modules/mapStateToProps';
import Button from '@material-ui/core/Button';

function DetailsPage(props) {
  // Renders the description and genres for specific movie selected

  // Filters array of movie data objects and returns new array of data of matching id as what's clicked
  const movieDetails = props.reduxState.genres.filter((movieItem, index) => {
    return movieItem.movies_id == props.match.params.id;

  })

  // Gives you array of different genres associated with movie selected
  const movieGenresArray = movieDetails.map((genreItem, index) => {
    return <p key={index}>{genreItem.name}</p>
  })
    return (
      <div>
        <h2>Movie Details</h2>
       <Button onClick={(event) => {props.history.push('/')}}>Back To List</Button>
       <Button onClick={(event) => {props.history.push('/edit/'+props.match.params.id)}}>Edit</Button>
       <h3>{movieDetails[0].title}</h3>
       <p>{movieDetails[0].description}</p>
       <h4>Genres</h4>
       {movieGenresArray}

      </div>
    );
  
}

export default connect(mapStateToProps)(withRouter(DetailsPage));