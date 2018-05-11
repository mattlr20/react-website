import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;