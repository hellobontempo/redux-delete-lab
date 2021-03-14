import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props.band.id)
    return(
     <li key={this.props.band.id}>{this.props.band.name} <button onClick={ () => this.props.delete(this.props.band.id) } >DELETE</button> </li>
    );
  }
};

export default Band;
