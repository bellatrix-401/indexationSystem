import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findResults, deleteUrl } from '../../actions/resultsActions';
import Page from './page';

class Results extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.findResults();
  }

  handleDelete (url) {
    const data = JSON.stringify({
      url: url
    });

    this.props.deleteUrl(data);
    this.props.findResults();
  }

  render () {

    const { results } = this.props;

    return (
      <Page 
        results={results}
        handleDelete={this.handleDelete}
      />
    );
  }
}

const mapStateToProps =  (state) => {
  return {
    results: state.results.urls
  }
}

export default connect(mapStateToProps, {findResults, deleteUrl})(Results);
