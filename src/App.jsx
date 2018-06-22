import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import 'babel-polyfill';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/CustomNavbar';
import Footer from './components/Foot';
import Gallery from './components/Gallery';

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
            {routes.map((route,key) => (
            <Route key={route.path} path={route.path} render={() => 
              <Gallery settings={routes[key]} />}
            />
            ))}
            <Redirect to="/" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

const routes = [
  {
    path: '/babies',
    heading: 'Babies',
    info: 'Babies Portraits!',
    imgPath: 'babies',
    meta: {
      title: 'Babies and Newborn Photography Hollister, NC | KoAnn Photography',
      description: 'Babies and Newborn Photography in Hollister, NC.'
    }
  },
  {
    path: '/engagement',
    heading: 'Engagement',
    info: 'Engagement Portraits!',
    imgPath: 'engagement',
    meta: {
      title: 'Engagement Photography Hollister, NC | KoAnn Photography',
      description: 'Engagement Photography in Hollister, NC.'
    }
  },
  {
    path: '/graduates',
    heading: 'Graduates',
    info: 'Graduate Portraits!',
    imgPath: 'graduates',
    meta: {
      title: 'Graduates and Seniors Photography Hollister, NC | KoAnn Photography',
      description: 'Graduates and Seniors Photography in Hollister, NC.'
    }
  },
  {
    path: '/bellies',
    heading: 'Bellies',
    info: 'Bellies Portraits!',
    imgPath: 'bellies',
    meta: {
      title: 'Bellies Photography Hollister, NC | KoAnn Photography',
      description: 'Bellies Photography in Hollister, NC.'
    }
  },
  {
    path: '/families',
    heading: 'Families',
    info: 'Family Portraits!',
    imgPath: 'families',
    meta: {
      title: 'Family Photography Hollister, NC | KoAnn Photography',
      description: 'Family Photography in Hollister, NC.'
    }
  }
]
export default App;