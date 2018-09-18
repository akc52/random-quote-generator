import React, { Component } from 'react';

class Author extends Component {
  render(){
    return(
      <div id="author">{this.props.author}</div>
    )
  }
}

export default Author;
