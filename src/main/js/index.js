import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Results from './components/results';
import Form from './components/form';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Form } />
        <Route path="/all" component={ Results } />
      </Switch>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<Root/>, document.getElementById('root'));