import React, { Component } from 'react';

import InnerLink from '../components/innerLink';
import OuterLink from '../components/outerLink';

class Store extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h1>Life Force Books Store</h1>
          </header>
            <p>
              <b>Achieving higher states of consciousness</b> requires practice, patience,
              and knowledge. One of the surest ways of ascertaining whether energy cultivation
              techniques — the tools for jump-starting consciousness — are for you is by reading
              the accounts and absorbing first-hand reference materials of those who have used
              techniques such as, Diaphragmatic Deep Breathing, <InnerLink content="Golden Flower Meditation" href="https://bit.ly/OS3FNY" />
              , <InnerLink content="energy cultivation" href="/energy-cultivation" />, and
              the <InnerLink content="backward-flowing method" href="/store/the-backward-flowing-method" />.
              Our books and other media provide a valuable, first-hand resource for those seeking
              life-changing <InnerLink content="metaphysical experiences" href="/store/deciphering-the-golden-flower" />.
            </p>
            <p>
              <b>When you select a book</b> from the Life Force Books store, you will be directed
              to <OuterLink content="Amazon.com" href="https://amzn.to/2N9Vsrr" />. Purchase in
              complete confidence. Life Force Books are processed directly by these retailers,
              where purchases are always safe and secure.
            </p>
            <p>
              Last, but not least, old-fashioned though the concept may seem, we encourage you to
              visit <OuterLink content={<b>your local bookseller</b>} href="https://www.indiebound.org/indie-bookstore-finder" /> where
              Life Force Books titles may be ordered and/or purchased.
            </p>
            <div style={{paddingTop:"56.25%",position:"relative"}}>
              <iframe
                src="https://player.vimeo.com/video/289345525"
                style={{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}
                frameBorder="0"
                allowFullScreen
                title="JJ Semple's Books">
              </iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js"></script>
        </section>
        <section>
          <header>
            <h2>The Purpose of Life Force Books</h2>
          </header>
          <p>
            <b>Life Force Books</b> demystifies energy cultivation phenomena such as kundalini,
            higher consciousness, and metaphysical experience. Books by JJ Semple contain living
            narratives of his Kundalini experience: the practices and techniques he used to awaken
            it, how he lives with it, and how its creative energy manifests itself in art, music,
            writing, film production, and everyday life.
          </p>
          <p>
            “My books describe the <InnerLink content={<b>Kundalini awakening</b>} href="/store/deciphering-the-golden-flower" /> process,”
            says JJ Semple, “They explain how Kundalini is not only a source of energy available to all human beings,
            but also a providential inevitability. <strong><em>Deciphering the Golden Flower One Secret at a Time</em></strong> is
            a memoir of my Kundalini experience in easy-to-understand, non-technical language; it also explains the Karmic
            logic behind my experience, how “self-realization begins at birth; it is the journey as much as it is the destination.”
            If you’ve ever experienced feelings that “there’s something out there,” you’ll love his masterful account of spiritual awakening.
          </p>
          <p>
            <InnerLink content="Books" href="/store/female-kundalini" /> by Margaret Dempsey feature an inspiring memoir of spiritual
            exploration and the travels and sacrifices that inspired her journey.
          </p>
          <p>
            “I believe that my experience can prepare others for the kinds of challenges they might encounter in activating Kundalini.”
            The author’s real Self, to which Kundalini eventually brought her, is in evidence from page one, as she describes her
            upbringing in Catholic Ireland, her days in a boarding school run by nuns, her training as a nurse, and her escape to London,
            New York and India.
          </p>
        </section>
      </div>
    );
  }
}

export default Store;