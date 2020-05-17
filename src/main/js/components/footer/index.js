import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppVersion } from '../../actions/appInfoActions';
import Page from './page';

class Footer extends Component {

  componentDidMount() {
    this.props.getAppVersion();
  }

  render () {

    const { version } = this.props.version;

    return (
      <Page 
        version={version}
      />
    );
  }
}

const mapStateToProps =  (state) => {
  return {
    version: state.appInfo.version
  }
}

export default connect(mapStateToProps, { getAppVersion })(Footer);
