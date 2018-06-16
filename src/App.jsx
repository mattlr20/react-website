import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'babel-polyfill';

import Home from './components/Home';
import About from './components/About';
// import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/footer';

class App extends Component {
  

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={(props) => (<About />)} />
            {/* <Route exact path="/contact" render={(props) => (<Contact />)} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;