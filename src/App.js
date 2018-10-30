import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Navitem from './components/navitem';
import Header from './components/header';
import Footer from './components/footer';

import mainLogo from './images/lfb-apexbanner.jpg';

import Home from './components/home';
import LifeForceScience from './components/life-force-science';

const tagline = "It’s the day after your Kundalini awakening. Now what are you going to do?";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar navs={
          <ul>
            <Navitem text="HOME" location="/" />
            <Navitem text="LIFE FORCE SCIENCE" location="/life-force-science" />
            <Navitem text="ENERGY CULTIVATION" location="/energy-cultivation" />
            <Navitem text="STORE" location="/store" />
            <Navitem text="SISTER SITES" location="/sister-sites" />
            <Navitem text="CALENDAR" location="/calendar" />
            <Navitem text="ANNOUCNEMENTS" location="/annoucements" />
          </ul>
        } />
        <div className="content">
          <Header tagline={tagline} mainLogo={mainLogo} alt="Life Force Books Banner" />
          <div className="pageContent">
            <Switch>
              <Route
                exact path="/"
                render={(props) => <Home />}
              />
              <Route
                exact path="/life-force-science"
                render={(props) => <LifeForceScience />}
              />
              <Route
                exact path="/energy-cultivation"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/store"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/store/seminal-retention-and-higher-consciousness"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/store/the-secret-of-the-golden-flower-a-kundalini-meditation-method"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/sister-sites"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/calendar"
                render={(props) => <div>Blah</div>}
              />
              <Route
                exact path="/annoucements"
                render={(props) => <div>Blah</div>}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
