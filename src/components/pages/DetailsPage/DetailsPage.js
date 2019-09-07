import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import {withRouter} from 'react-router-dom'
import mapStateToProps from '../../modules/mapStateToProps';
import Button from '@material-ui/core/Button';

function DetailsPage(props) {
  // Renders the description and genres for specific movie selected
  console.log(props)

  // Filters array of movie data objects and returns new array of data of matching id as what's clicked
  const movieDetails = props.reduxState.movies.filter((movieItem, index) => {
    return movieItem.id == props.match.params.id

    })
    console.log(movieDetails);
    
    return (
      <div>
        <h2>Movie Details</h2>
       <Button>Back To List</Button>
       <Button>Edit</Button>

      </div>
    );
  
}

export default connect(mapStateToProps)(withRouter(DetailsPage));