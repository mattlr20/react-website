import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'babel-polyfill';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/footer';

class App extends Component {
  

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
      <div>
          <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/about" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;