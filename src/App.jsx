import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'babel-polyfill';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/Foot';
//import Gallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* <Route path="/:gallery" component={Gallery} /> */}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;