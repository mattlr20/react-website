import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Weddings from './components/Weddings';
import Portraits from './components/Portraits';
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
            <Route path="/contact" component={Contact} />
            <Route path="/Weddings" component={Weddings} />
            <Route path="/portraits" component={Portraits} />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;