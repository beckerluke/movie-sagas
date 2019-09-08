import React, { Component } from 'react';
import '../../App/App.css';
import {TextField, Button} from '@material-ui/core/'; 

class EditPage extends Component {
  // Renders input field and textarea for user to edit the title and description for specific movie selected
  state = {
    editMovie: {
      title: '', 
      description: ''
    }
  }

  handleChange = (event, dataKey) => {
    // capture user input for both movie title and movie description
    const fieldValue = event.target.value;
    console.log(fieldValue);
    // set local state to user most up-to-date user input
    this.setState({
      editMovie: {
        ...this.state.editMovie,
        [dataKey]: fieldValue
      }
    })
    console.log(this.state.editMovie);
    
  }

  // handleClickSave = (event) => {
  //   this.props.dispatch('UPDATE_MOVIES')
  // }

  render() {
    console.log(this.props);
    
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
          <Button onClick={(event) => {this.props.history.push('/details/:id')}}>Cancel</Button>
      </div>
    );
  }
}

export default EditPage;