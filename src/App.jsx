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
            {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              render={(props) => <Gallery 
                {...props} 
                heading={route.heading} 
                info={route.info} 
                imgSrc={route.imgSrc} 
                metaTitle={route.meta.title} 
                metaDescription={route.meta.description} 
              />}
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
    imgSrc: 'babies',
    meta: {
      title: 'Babies & Newborn Photography Hollister, NC | KoAnn Photography',
      description: 'Babies & Newborn Photography in Hollister, NC, Halifax County and Nash County.'
    }
  },
  {
    path: '/engagement',
    heading: 'Engagement',
    info: 'Engagement Portraits!',
    imgSrc: 'engagement',
    meta: {
      title: 'Engagement Photography Hollister, NC | KoAnn Photography',
      description: 'Engagement Photography in Hollister, NC, Halifax County and Nash County.'
    }
  },
  {
    path: '/graduates',
    heading: 'Graduates',
    info: 'Graduate Portraits!',
    imgSrc: 'graduates',
    meta: {
      title: 'Graduates and Seniors Photography Hollister, NC | KoAnn Photography',
      description: 'Graduates and Seniors Photography in Hollister, NC, Halifax County and Nash County.'
    }
  }
]
export default App;