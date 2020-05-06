import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getResults, deleteUrl } from '../../actions/resultsActions';
import Page from './page';

export class Results extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.getResults();
  }

  handleDelete (url) {
    const data = JSON.stringify({
      url: url
    });

    this.props.deleteUrl(data);
  }

  render () {

    const { results, server } = this.props;

    return (
        <Page 
          results={results}
          server={server}
          handleDelete={this.handleDelete}
        />
    );
  }
}

const mapStateToProps =  (state) => {
  return {
    results: state.results.urls,
    server: state.results.server
  }
}

export default connect(mapStateToProps, {getResults, deleteUrl})(Results);
