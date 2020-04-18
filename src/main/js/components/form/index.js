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
      url: '',
      waiting: false
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

    this.setState({ waiting: true });

    const data = JSON.stringify({
      word: this.state.word, 
      url: this.state.url
    });

    check(data)
      .then(res => {
        alert('The URL has been '+res.toUpperCase());
        this.setState({ 
          word: '',
          url: '',
          waiting: false 
        });
      })
  }

  render () {
    const { word } = this.state;
    const { url } = this.state;
    const { waiting } = this.state;

    return (
      <Page 
        onChangeText={this.onChangeText}
        handleSubmit={this.handleSubmit}
        word={word}
        url={url}
        waiting={waiting}
      />
    );
  }
}

export default (Form);