import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import {withRouter} from 'react-router-dom'
import mapStateToProps from '../../modules/mapStateToProps';

class DetailsPage extends Component {
  // Renders the description and genres for specific movie selected
  
  render() {

    return (
      <div>
        <h2>Movie Details</h2>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(DetailsPage));