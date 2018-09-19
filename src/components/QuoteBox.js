import React, { Component } from 'react';
import Quote from './Quote';
import Author from './Author';

class QuoteBox extends Component {

  render(){
    return(
      <div id="quote-box">
        <Quote quote={this.props.quote} />
        <Author author={this.props.author} />
        <a id="new-quote" className="btn--blue" onClick={this.props.newQuote}>New Quote</a>
        <a id="tweet-quote" className="btn--blue" onClick={this.props.tweetQuote}><i className="fa fa-twitter"></i></a>
      </div>
    )
  }
}

export default QuoteBox;
