import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home}/>
            <Route exact path={process.env.PUBLIC_URL + '/about'} component={About}/>
            <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
