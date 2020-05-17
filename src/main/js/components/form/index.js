import React, { Component } from 'react';
import axios from 'axios';
import Page from './page';
import { localhostUrl } from '../../config/paths';
import { regExpUrl } from '../../constants';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      word: '',
      url: '',
      waiting: false,
      validUrl: true
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateUrl = this.validateUrl.bind(this);
  }

  onChangeText (e) {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  }

  validateUrl () {
    const regexUrl = new RegExp(regExpUrl);

    this.setState({
      validUrl: regexUrl.test(this.state.url)
    });
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
    const { 
      word, 
      url, 
      waiting, 
      validUrl 
    } = this.state;

    return (
      <Page 
        onChangeText={this.onChangeText}
        handleSubmit={this.handleSubmit}
        validateUrl={this.validateUrl}
        word={word}
        url={url}
        waiting={waiting}
        validUrl={validUrl}
      />
    );
  }
}

function check (data) {
  return axios.post(localhostUrl+'/check', data, {
    headers: {
      'content-Type': 'application/json'
    }})
      .then(response => response.data.state)
      .catch(e => console.log(e))
}

export default Form;