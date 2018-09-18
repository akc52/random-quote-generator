import React, { Component } from 'react';
import Quote from './Quote';
import Author from './Author';

class QuoteBox extends Component {

  render(){
    return(
      <div id="quote-box">
        <Quote quote={this.props.quote} />
        <Author author={this.props.author} />
        <a id="new-quote" onClick={this.props.newQuote}>New Quote</a>
        <a id="tweet-quote" onClick={this.props.tweetQuote}>Tweet Quote</a>
      </div>
    )
  }
}

export default QuoteBox;
