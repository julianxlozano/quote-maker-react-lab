import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote,upvoteQuote,downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
         
                {this.props.quotes.quotes.map(quote=> <QuoteCard removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} key={quote.id}quote={quote}/>)}
           

            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed

const mapStateToProps = state => {
  return {
    quotes: state
  };
};

const mapDisptachToProps = dispatch =>{
  return {
    removeQuote: quoteId => dispatch(removeQuote(quoteId)),
    upvoteQuote: quoteId => dispatch(upvoteQuote(quoteId)),
    downvoteQuote: quoteId => dispatch(downvoteQuote(quoteId))
  }
}

export default connect(mapStateToProps,mapDisptachToProps)(Quotes);
