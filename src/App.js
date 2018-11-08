import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Navitem from './components/navitem/navitem';
import Header from './components/header/header';
import Footer from './components/footer/footer';

import mainLogo from './images/lfb-apexbanner.jpg';

import Home from './pages/home';
import LifeForceScience from './pages/life-force-science';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
            <Navitem text={<div>STORE&nbsp;<FontAwesomeIcon icon={faCaretDown} /></div>} location="/store" />
            <Navitem text="SISTER SITES" location="/sister-sites" />
            <Navitem text="CALENDAR" location="/calendar" />
            <Navitem text={<div>ANNOUNCEMENTS&nbsp;<FontAwesomeIcon icon={faCaretDown} /></div>} location="/announcements" />
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
