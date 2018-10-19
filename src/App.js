import React, { Component } from 'react';
import './styles/App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Navitem from './components/navitem';
import Header from './components/header';

import mainLogo from './images/lfb-apexbanner.jpg';

import Home from './components/home'

const tagline = "It’s the day after your Kundalini awakening. Now what are you going to do?";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar navs={
          <ul>
            <Navitem text="HOME" location="/" />
            <Navitem text="TEST" location="/test" />
          </ul>
        } />
        <div className="content">
          <Header tagline={tagline} mainLogo={mainLogo} />
          <div className="grid">
            <div className="col-sm"></div>
            <div className="col-md">
              <Switch>
                <Route
                  exact path="/"
                  render={(props) => <Home />}
                />
                <Route
                  exact path="/test"
                  render={(props) => <div>Blah</div>}
                />
              </Switch>
            </div>
            <div className="col-sm"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
