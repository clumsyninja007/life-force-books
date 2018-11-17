import React, { Component } from 'react';

import InnerLink from '../components/innerLink';
import OuterLink from '../components/outerLink';

import Image from '../components/image/image';
import Wires from '../images/Wires-SS.jpg';

class SisterSites extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h1>Sister Sites</h1>
          </header>
          <p>
            <InnerLink content={<b>Golden Flower Meditation</b>} href="https://www.goldenflowermeditation.com" /> –
            There are many types of awakening experiences. Kundalini meditation and Kundalini Yoga are two. Golden
            Flower Kundalini Meditation method stimulates life force energy at the base of the spine. Kundalini meditation
            channels sexual energy to the brain to effect a release of <InnerLink content="life force energy" href="/energy-cultivation" />.
          </p>
          <p>
            <InnerLink content={<b>Common Sense Kundalini</b>} href="https://www.commonsensekundalini.com" /> – Questions
            you should be asking about Kundalini. Why do I want to activate Kundalini? How would Kundalini change my life?
            What does a kundalini awakening experience feel like? Is meditation the only way to awaken Kundalini? We can help
            you unravel the mystery with our kundalini awakening resources.
          </p>
          <p>
            <InnerLink content={<b>The Kundalini Consortium</b>} href="https://www.kundaliniconsortium.org" /> – Dedicated to the
            scientific exploration of awakening experience and human energy potential, such as kundalini, Nirvikalpa, neuroplasticity,
            energy and distance healing. How and why these biological phenomena function, their effect on the individual, and on individual
            and collective consciousness.
          </p>
          <p>
            <InnerLink content={<b>Editions Tilleul</b>} href="https://www.editionstilleul.com" /> – Features biographies of the almost famous.
          </p>
          <Image
            image={Wires}
            caption="Technology and Nature can Coexist"
          />
        </section>
        <section style={{textAlign:"center"}}>
          <p><b><em>Seminal Retention and Higher Consciousness</em> eBook</b></p>
          <p>
            <strong>Pay Only $3.99; Save $2.00</strong>
            <br />
            <OuterLink content="IBookstore" href="https://bit.ly/KundaliniSexology" />
            <br />
            <OuterLink content="Barnes & Noble Nook" href="https://www.barnesandnoble.com/w/seminal-retention-and-higher-consciousness-jj-semple/1120799371?ean=2940046412864" />
            <br />
            <OuterLink content="KOBO books" href="https://store.kobobooks.com/en-US/ebook/seminal-retention-and-higher-consciousness-the-sexology-of-kundalini" />
            <br />
            <OuterLink content="Amazon Kindle" href="https://store.kobobooks.com/en-US/ebook/seminal-retention-and-higher-consciousness-the-sexology-of-kundalini" />
          </p>
        </section>
      </div>
    );
  }
}

export default SisterSites;