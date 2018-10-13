import React, { Component } from 'react';
import Main from './main'
import routes from '../routes'
import 'normalize.css'

class App extends Component {
  render() {
    return (
      <div>
        <Main routes={routes} />
      </div>
    );
  }
}

export default App;
