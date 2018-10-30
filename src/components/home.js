import React, { Component } from 'react';
import ImgBox from './imgBox';
import Sidebar from './sidebar';

import sgf from '../images/sgf-233x350_med.png';
import km from '../images/kundalinifinal-fjm_low_res_med.jpeg';
import dgf from '../images/dgf-frontcover_med.jpeg';
import boc from '../images/boc-frontcover_med.jpeg';
import bfm from '../images/bfm-frontcover_med.jpeg';
import sem from '../images/sem-frontcover_med.jpeg';
import fek from '../images/fek-frontcover_med.jpeg';
import gop from '../images/gop-frontcover_med.jpeg';

import InnerLink from './innerLink';
import OuterLink from './outerLink';

function gcse() {
  return {__html: '<gcse:search></gcse:search><script async={true} src="https://cse.google.com/cse.js?cx=005039797103311972377:t62qmnqrx-i" type="text/javascript"></script>'};
}

class Home extends Component {
  render() {
    return (
      <Sidebar content={
        <div>
          <section>
            <header>
              <h1>Kundalini Awakening and Meditation Books</h1>
            </header>
            <div dangerouslySetInnerHTML={gcse()} />
            <p>Life Force Books celebrates authors investigating the scientific aspects 
              of <InnerLink content="Kundalini~Life Force energy" href="https://www.commonsensekundalini.com/science_spirituality/the-energy-continuum.html" />.
              Our mission is publishing <InnerLink content="Kundalini books" href="/store" />, books
              on consciousness, meditation, mindfulness, enlightenment, and energy cultivation
              that feature reliable, authoritative <InnerLink content="techniques and experiences" href="https://bit.ly/OS3FNY" />. We feature
              authors whose prime directive is questioning the major spiritual orthodoxies of
              the day and who are committed to research on topics such as: energy cultivation
              techniques, correct breathing techniques, mindfulness, meditation, and the
              relationship between <InnerLink content="sexual energy and higher consciousness" href="/store/seminal-retention-and-higher-consciousness" />. An active Kundalini
              puts you on the healthy path to overcoming addiction and expressing your artistic
              creativity. It is also a healing force, a warranty for a tired, aging body.
              Finally, because Kundalini helps you realize that death is only another state of
              consciousness, you are better prepared to face the transition to other states,
              including a reincarnated one.
            </p>
          </section>
          <section>
            <header>
              <h3>
                <InnerLink content="JJ Semple" href="https://bit.ly/vWXZQ" />
              </h3>
            </header>
            <ImgBox
              image={sgf}
              width="145px"
              height="224px"
              alt="The Secret of the Golden Flower: A Kundalini Mediation Method book cover"
              title={<InnerLink content="The Secret of the Golden Flower: A Kundalini Mediation Method" href="/store/the-secret-of-the-golden-flower-a-kundalini-meditation-method" />}
              body={<p>This is a guidebook to using <i>The Secret of the Golden Flower</i> (SGF) 
                    as a meditation method for activating kundalini. An authoritative
                    interpretation by someone, who, unlike Jung, Cleary, or Wilhelm, actually
                    used the method to activate kundalini. This book compares their translations
                    and commentaries with JJ Semple's empirical practice of the method.</p>}
            />
            <ImgBox
              image={km}
              width="145px"
              height="224px"
              alt="Kundalini Musings book cover"
              title={<InnerLink content="Kundalini Musings" href="/store/kundalini-musings" />}
              body={<p>More and more people now acknowledge kundalini as scientifically factual with
                    its own anatomical, physiological, and embryological actualities. Why? People
                    have realized that kundalini is a biological process, not a belief system. <b><i>Kundalini Musings</i></b> (Life Force Books, 2018)
                    is a compendium of kundalini knowledge
                    and experience, consisting of 82 essays written over the past seven years. Each
                    essay has been edited and updated to reflect a broad spectrum of kundalini research.</p>}
            />
            <ImgBox
              image={dgf}
              width="145px"
              height="224px"
              alt="Deciphering the Golden Flower One Secret at a Time book cover"
              title="Deciphering the Golden Flower One Secret at a Time"
              body={<p>Curiosity and circumstance often propel individuals beyond the confines of their upbringing,
                    dumping them into unfamiliar, unexpected life situations. Thus was JJ Semple transported into
                    a trial-and-error process of self-discovery that took him from the East Coast Brahman
                    establishment, to France, to a meeting with Gopi Krishna in India. What he found along the way
                    was Kundalini, the biological basis of science and religion.</p>}
            />
            <ImgBox
              image={boc}
              width="145px"
              height="224px"
              alt="The Biology of Consciousness book cover"
              title="The Biology of Consciousness: Case Studies in Kundalini"
              body={<p>In this book, JJ Semple presents a collection of living case studies on Kundalini, documenting
                    the many ways Kundalini is awakened, including sexual ecstasy, meditation, drugs, emotional crises,
                    eye-gazing, and Shaktipat. Kundalini is a biological actuality. It is neither a supernatural cult,
                    nor a religion, nor a sect. You can’t be "converted" to Kundalini any more than you can be converted
                    to a heart attack or an orgasm, or any other biological phenomenon.</p>}
            />
            <ImgBox
              image={bfm}
              width="145px"
              height="224px"
              alt="The Backward-Flowing Method book cover"
              title="The Backward-Flowing Method: The Secret of Life and Death"
              body={<p>Want to live a longer, healthier life? This book proposes specific exercises on the subject,
                    instructing readers in the backward-flowing method, a powerful meditation technique that can also
                    be used to control addiction. JJ Semple explains how the backward-flowing method, <strong>a system for safe
                    sexual sublimation,</strong> permanently activates Kundalini by stimulating neuroplastic activity in the brain.</p>}
            />
            <ImgBox
              image={sem}
              width="145px"
              height="224px"
              alt="Seminal Retention and Higher Consciousness book cover"
              title="Seminal Retention and Higher Consciousness: The Sexology of Kundalini"
              body={<p>First, there’s a limited amount of semen in the male body. Neither you, nor I, can change this; it’s
                    a biological fact. Second, although you can’t replenish what’s been lost, you can conserve what’s left.
                    Higher consciousness and sexual sublimation (diverting sexual energy to the brain) are inextricably linked.</p>}
            />
          </section>
          <section>
            <header>
                <h3>
                  <InnerLink content="Margaret Dempsey" href="/female-kundalini" />
                </h3>
            </header>
            <ImgBox
              image={fek}
              width="145px"
              height="224px"
              alt="Female Kundalini book cover"
              title="Female Kundalini"
              body={<p>In Margaret Dempsey’s case, years of Buddhist meditation, galvanized by a traumatic contact with an
                    attractive man, triggered the “uprising of Shakti.” Her honesty in not glamorizing her awakening attests
                    to its authenticity. The author’s real Self, to which Kundalini eventually brought her, is in evidence
                    from page one, as she describes her upbringing in Catholic Ireland, her days in a boarding school run by
                    nuns, her training as a nurse, and her escape to London, New York and India.</p>}
            />
          </section>
          <section>
          <header>
                <h3>
                  <OuterLink content="Gopi Krishna" href="https://bit.ly/9zbW4" />
                </h3>
            </header>
            <ImgBox
              image={gop}
              width="145px"
              height="224px"
              alt="Kundalini: The Evolutionary Energy in Man book cover"
              title={<OuterLink content="Kundalini: The Evolutionary Energy in Man" href="https://amzn.to/2C2xvhB" />}
              body={<p>JJ Semple met Gopi Krishna in 1977 on a visit to Kashmir, four years after his own Kundalini awakening.
                    After relating his Kundalini experience to Krishna, they talked about the effects of sexual activity on
                    kundalini energy, diet, the stress of work, travel, handling illness, and exercise. In his extraordinary
                    biographical account of his experience with the <strong>mysterious Kundalini Power,</strong> a book that is already a classic
                    in its field, Gopi Krishna wraps his insights on kundalini around a powerful personal narrative.</p>}
            />
          </section>
        </div>
        }
      />
    );
  }
}

export default Home;