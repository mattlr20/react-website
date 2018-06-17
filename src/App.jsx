import React, { Component } from 'react';
import { Router, IndexRoute, Route } from 'react-router';
import 'babel-polyfill';

import HomeTest from './components/HomeTest';
import About from './components/About';
// import Contact from './components/Contact';
// import Navbar from './components/CustomNavbar';
// import Footer from './components/footer';

class App extends Component {
  

  render() {
    return (
      <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeTest} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
    );
  }
}

export default App;