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

function gcse() {
  return {__html: "<gcse:search></gcse:search>"};
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
            <p>Life Force Books celebrates authors investigating the scientific aspects of
              Kundalini~Life Force energy. Our mission is publishing Kundalini books, books
              on consciousness, meditation, mindfulness, enlightenment, and energy cultivation
              that feature reliable, authoritative techniques and experiences. We feature
              authors whose prime directive is questioning the major spiritual orthodoxies of
              the day and who are committed to research on topics such as: energy cultivation
              techniques, correct breathing techniques, mindfulness, meditation, and the
              relationship between sexual energy and higher consciousness. An active Kundalini
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
                <a href="https://bit.ly/vWXZQ" rel="noopener noreferrer" target="_blank">
                  JJ Semple
                </a>
              </h3>
            </header>
            <ImgBox
              image={sgf}
              width="145"
              height="224"
              alt="The Secret of the Golden Flower: A Kundalini Mediation Method book cover"
              title="The Secret of the Golden Flower: A Kundalini Mediation Method"
              body="This is a guidebook to using The Secret of the Golden Flower (SGF) 
                    as a meditation method for activating kundalini. An authoritative
                    interpretation by someone, who, unlike Jung, Cleary, or Wilhelm, actually
                    used the method to activate kundalini. This book compares their translations
                    and commentaries with JJ Semple's empirical practice of the method."
            />
            <ImgBox
              image={km}
              width="145"
              height="224"
              alt="Kundalini Musings book cover"
              title="Kundalini Musings"
              body="More and more people now acknowledge kundalini as scientifically factual with
                    its own anatomical, physiological, and embryological actualities. Why? People
                    have realized that kundalini is a biological process, not a belief system.
                    Kundalini Musings (Life Force Books, 2018) is a compendium of kundalini knowledge
                    and experience, consisting of 82 essays written over the past seven years. Each
                    essay has been edited and updated to reflect a broad spectrum of kundalini research."
            />
            <ImgBox
              image={dgf}
              width="145"
              height="224"
              alt="Deciphering the Golden Flower One Secret at a Time book cover"
              title="Deciphering the Golden Flower One Secret at a Time"
              body="Curiosity and circumstance often propel individuals beyond the confines of their upbringing,
                    dumping them into unfamiliar, unexpected life situations. Thus was JJ Semple transported into
                    a trial-and-error process of self-discovery that took him from the East Coast Brahman
                    establishment, to France, to a meeting with Gopi Krishna in India. What he found along the way
                    was Kundalini, the biological basis of science and religion."
            />
            <ImgBox
              image={boc}
              width="145"
              height="224"
              alt="The Biology of Consciousness book cover"
              title="The Biology of Consciousness: Case Studies in Kundalini"
              body='In this book, JJ Semple presents a collection of living case studies on Kundalini, documenting
                    the many ways Kundalini is awakened, including sexual ecstasy, meditation, drugs, emotional crises,
                    eye-gazing, and Shaktipat. Kundalini is a biological actuality. It is neither a supernatural cult,
                    nor a religion, nor a sect. You can’t be "converted" to Kundalini any more than you can be converted
                    to a heart attack or an orgasm, or any other biological phenomenon.'
            />
            <ImgBox
              image={bfm}
              width="145"
              height="224"
              alt="The Backward-Flowing Method book cover"
              title="The Backward-Flowing Method: The Secret of Life and Death"
              body='Want to live a longer, healthier life? This book proposes specific exercises on the subject,
                    instructing readers in the backward-flowing method, a powerful meditation technique that can also
                    be used to control addiction. JJ Semple explains how the backward-flowing method, a system for safe
                    sexual sublimation, permanently activates Kundalini by stimulating neuroplastic activity in the brain.'
            />
            <ImgBox
              image={sem}
              width="145"
              height="224"
              alt="Seminal Retention and Higher Consciousness book cover"
              title="Seminal Retention and Higher Consciousness: The Sexology of Kundalini"
              body='First, there’s a limited amount of semen in the male body. Neither you, nor I, can change this; it’s
                    a biological fact. Second, although you can’t replenish what’s been lost, you can conserve what’s left.
                    Higher consciousness and sexual sublimation (diverting sexual energy to the brain) are inextricably linked.'
            />
          </section>
          <section>
            <header>
                <h3>
                  <a
                    href="/female-kundalini"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Margaret Dempsey
                  </a>
                </h3>
            </header>
            <ImgBox
              image={fek}
              width="145"
              height="224"
              alt="Female Kundalini book cover"
              title="Female Kundalini"
              body='In Margaret Dempsey’s case, years of Buddhist meditation, galvanized by a traumatic contact with an
                    attractive man, triggered the “uprising of Shakti.” Her honesty in not glamorizing her awakening attests
                    to its authenticity. The author’s real Self, to which Kundalini eventually brought her, is in evidence
                    from page one, as she describes her upbringing in Catholic Ireland, her days in a boarding school run by
                    nuns, her training as a nurse, and her escape to London, New York and India.'
            />
          </section>
          <section>
          <header>
                <h3>
                  <a
                    href="https://bit.ly/9zbW4"
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    Gopi Krishna
                  </a>
                </h3>
            </header>
            <ImgBox
              image={gop}
              width="145"
              height="224"
              alt="Kundalini: The Evolutionary Energy in Man book cover"
              title="Kundalini: The Evolutionary Energy in Man"
              body='JJ Semple met Gopi Krishna in 1977 on a visit to Kashmir, four years after his own Kundalini awakening.
                    After relating his Kundalini experience to Krishna, they talked about the effects of sexual activity on
                    kundalini energy, diet, the stress of work, travel, handling illness, and exercise. In his extraordinary
                    biographical account of his experience with the mysterious Kundalini Power, a book that is already a classic
                    in its field, Gopi Krishna wraps his insights on kundalini around a powerful personal narrative.'
            />
          </section>
        </div>
        }
      />
    );
  }
}

export default Home;