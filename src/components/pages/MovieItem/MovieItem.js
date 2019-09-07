import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import {withRouter} from 'react-router-dom'
import mapStateToProps from '../../modules/mapStateToProps';
import DetailsPage from '../DetailsPage/DetailsPage';

class MovieItem extends Component {
  
  // click event to take user to the details page 
  posterClick = (event) => {
    console.log(this.props.movieItem);
    
    this.props.history.push('/details/'+this.props.movieItem.id);
  }
  
  render() {
    console.log(this.props.movieItem);
    // movieItem is each object of movie data passed on props from MovieListPage
    const movieTitle = this.props.movieItem.title;
    const moviePoster = this.props.movieItem.poster;
    const movieDescription = this.props.movieItem.description;

    return (
      <div>
        <h2>{movieTitle}</h2>
          <div>
            <img onClick={this.posterClick} src={moviePoster} alt=""/>
            <p>{movieDescription}</p>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(MovieItem));