import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../../App/App.css';
import {TextField, Button} from '@material-ui/core/'; 
import mapStateToProps from '../../modules/mapStateToProps';
import {withRouter} from 'react-router-dom';

class EditPage extends Component {
  // Renders input field and textarea for user to edit the title and description for specific movie selected
  state = {
    editMovie: {
      id: this.props.match.params.id,
      title: '', 
      description: ''
    }
  }

  handleChange = (event, dataKey) => {
    // capture user input for both movie title and movie description
    const fieldValue = event.target.value;
    
    // set local state to user most up-to-date user input
    this.setState({
      editMovie: {
        ...this.state.editMovie,
        [dataKey]: fieldValue
      }
    })
  }

  handleClickSave = (event) => {
    this.props.dispatch({type: 'UPDATE_MOVIES', payload: this.state.editMovie});
    this.props.history.push('/details/'+this.props.match.params.id);
  }

  render() {

    return (
      <div className="App">
        <h2>Edit Movie</h2>
          <TextField onChange={(event) => {this.handleChange(event, 'title')}}
          className="Edit-description-field"
          type="text"
          placeholder="Movie Title"
          variant="outlined"
          />
          <br/>
          <TextField onChange={(event) => {this.handleChange(event, 'description')}} 
          className="Edit-description-field"
          rows={3} margin="normal" 
          variant="outlined" 
          placeholder="Description"
          />
          <br/>
          <Button onClick={this.handleClickSave}>Save</Button>
          <Button onClick={(event) => {this.props.history.push('/details/'+this.props.match.params.id)}}>Cancel</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(withRouter(EditPage));