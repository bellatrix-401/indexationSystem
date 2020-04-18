import React, { Component } from 'react';
import axios from 'axios';
import Page from './page';
import { localhostURL } from '../../config';

function check (data) {
  return axios.post(localhostURL+'/check', data, {
    headers: {
      'content-Type': 'application/json'
    }})
      .then(response => response.data.state)
      .catch(e => console.log('nada bro'))
}

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      word: '',
      url: ''
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onChangeText (e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit (e) {
    e.preventDefault();

    const data = JSON.stringify(this.state);

    check(data)
      .then(res => alert('The URL has been'+res))
  }

  render () {
    return (
      <Page 
        onChangeText={this.onChangeText}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default (Form);