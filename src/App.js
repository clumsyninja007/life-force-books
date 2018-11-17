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
import EnergyCultivation from './pages/energy-cultivation';
import Store from './pages/store';
import Calendar from './pages/calendar';
import SisterSites from './pages/sister-sites';

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
            <Navitem 
              text={
                  <div>
                    STORE&nbsp;<FontAwesomeIcon icon={faCaretDown} />
                  </div>
                }
              dropdown={
                <ul>
                  <Navitem text="The Secret of the Golden Flower a Kundalini Meditation Method" location="/store/the-secret-of-the-golden-flower-a-kundalini-meditation-method" />
                  <Navitem text="Deciphering the Golden Flower" location="/store/deciphering-the-golden-flower" />
                  <Navitem text="Kundalini Musings" location="/store/kundalini-musings" />
                  <Navitem text="The Biology of Consiousness" location="/store/the-biology-of-consciousness" />
                  <Navitem text="Seminal Retention and Higher Consciousness" location="/store/seminal-retention-and-higher-consciousness" />
                  <Navitem text="Female Kundalini" location="/store/female-kundalini" />
                  <Navitem text="The Backward-Flowing Method" location="/store/the-backward-flowing-method" />
                </ul>
              }
              location="/store" 
            />
            <Navitem
              text={
                <div>
                  SISTER SITES&nbsp;<FontAwesomeIcon icon={faCaretDown} />
                </div>
              }
              dropdown={
                <ul>
                  <Navitem text="Golden Flower Meditation" href="https://www.goldenflowermeditation.com" />
                  <Navitem text="Common Sense Kundalini" href="https://www.commonsensekundalini.com" />
                  <Navitem text="The Kundalini Consortium" href="https://www.kundaliniconsortium.com" />
                  <Navitem text="Editions Tilleul" href="https://www.editionstilleul.com" />
                </ul>
              }
              location="/sister-sites"
            />
            <Navitem text="CALENDAR" location="/calendar" />
            <Navitem
              text={
                <div>
                  ANNOUNCEMENTS&nbsp;<FontAwesomeIcon icon={faCaretDown} />
                </div>
              }
              dropdown={
                <ul>
                  <Navitem text="Huffington Post Review" href="https://www.huffingtonpost.com/peggy-payne/sex-energy-on-the-brain_b_6720844.html" />
                </ul>
              }
              location="/announcements" />
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
                render={(props) => <EnergyCultivation />}
              />
              <Route
                exact path="/store"
                render={(props) => <Store />}
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
                render={(props) => <SisterSites />}
              />
              <Route
                exact path="/calendar"
                render={(props) => <Calendar />}
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
