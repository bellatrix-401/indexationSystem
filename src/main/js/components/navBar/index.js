import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInstanceId } from '../../actions/appInfoActions';
import Page from './page';

class NavBar extends Component {

  componentDidMount() {
    this.props.getInstanceId();
  }

  render () {

    const { instanceId } = this.props.instanceId;

    return (
      <Page 
        instanceId={instanceId}
      />
    );
  }
}

const mapStateToProps =  (state) => {
  return {
    instanceId: state.appInfo.instanceId
  }
}

export default connect(mapStateToProps, { getInstanceId })(NavBar);
