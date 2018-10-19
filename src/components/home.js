import React, { Component } from 'react';
import ImgBox from './imgBox';

import sgf from '../images/sgf-233x350_med.png'

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Kundalini Awakening and Meditation Books</h1>
        <p>Life Force Books celebrates authors investigating the scientific aspects of Kundalini~Life Force energy. Our mission is publishing Kundalini books, books on consciousness, meditation, mindfulness, enlightenment, and energy cultivation that feature reliable, authoritative techniques and experiences. We feature authors whose prime directive is questioning the major spiritual orthodoxies of the day and who are committed to research on topics such as: energy cultivation techniques, correct breathing techniques, mindfulness, meditation, and the relationship between sexual energy and higher consciousness. An active Kundalini puts you on the healthy path to overcoming addiction and expressing your artistic creativity. It is also a healing force, a warranty for a tired, aging body. Finally, because Kundalini helps you realize that death is only another state of consciousness, you are better prepared to face the transition to other states, including a reincarnated one.</p>
        <a href="https://bit.ly/vWXZQ" rel="noopener" target="_blank" className="sansLink">JJ Semple</a>
        <ImgBox image={sgf}/>
      </div>
    );
  }
}

export default Home;