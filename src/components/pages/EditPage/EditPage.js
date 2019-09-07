import React, { Component } from 'react';
import '../../App/App.css';
import TextField from '@material-ui/core/TextField';

class EditPage extends Component {
  // Renders input field and textarea for user to edit the title and description for specific movie selected
  render() {
    return (
      <div className="App">
        <p>Edit Movie</p>
        <form>
          <TextField type="text" placeholder="Movie Title"/>
          <TextField rows={3} placeholder="Description"/>
        </form>
      </div>
    );
  }
}

export default EditPage;