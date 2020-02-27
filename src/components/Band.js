import React, { Component } from 'react';

class Band extends Component {
  handleDelete = () => {
    this.props.deleteBand(this.props.band.id)
  }
  render() {
    return(
      <li>
        {this.props.band.name}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
};

export default Band;
