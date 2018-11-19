import React, { Component } from 'react';

import InnerLink from '../components/innerLink';
import OuterLink from '../components/outerLink';

class Announcements extends Component {
  render() {
    return (
      <div>
        <section>
          <header>
            <h1>Announcements</h1>
          </header>
          <p>Announcing <InnerLink content="The Kundalini Consortium" href="https://www.kundaliniconsortium.org" />, a blog</p>
          <p>
            Featured contributors: <InnerLink content="JJ Semple" href="https://www.commonsensekundalini.com/my_kundalini_experience" />,
            Margaret Dempsey, Vivek Govekar, Mehru Danda, Paul Lyons, Tom Kinney, <OuterLink content="Laila del Monte" href="http://www.lailadelmonte.com" />:
          </p>
          <p>
            An evidence-based blog on human energy potential by a group of self-exploration devotees informed largely by their own experiences and
            the effect of their experiences on individual and collective consciousness. How and why kundalini, neuroplasticity, nirvikalpa, distance
            healing, mindfulness, meditation, near-death and out-of-body experience, and other energy cultivation techniques occur and how they
            influence evolution, creativity, and DNA. The tie-in between human biology and enlightenment.
          </p>
          <p>
            Launched at the end of November 2012, <InnerLink content="The Kundalini Consortium" href="https://www.kundaliniconsortium.org" /> has
            already earned more than 953,194 page views.
          </p>
          <p><strong>Announcing <InnerLink content="Editions Tilleul" href="https://www.editionstilleul.com" />, a Life Force Books imprint</strong></p>
          <p>
            Biographies of the almost famous, featuring David Egee’s new memoir, <OuterLink content={<strong><em>Wake Up Running</em></strong>} href="https://bit.ly/EgeeDavid" />.
          </p>
          <p>
            You believe people can learn and profit from your experience. If that’s the case, why not publish a memoir, an autobiographical account
            of your life, the obstacles and challenges you’ve met and overcome, the high and low points of your life.
          </p>
        </section>
        <section>
          <header><p><strong>Books by JJ Semple</strong></p></header>
          <p>
            <ul style={{listStyle:"none",marginLeft:"-24px"}}>
              <li>
                <OuterLink 
                  content={<b>Deciphering the Golden Flower One Secret at a Time</b>}
                  href="https://www.amazon.com/dp/0979533112?tag=lifforboo-20&camp=14573&creative=327641&linkCode=as1&creativeASIN=0979533112&adid=0YZWRW3ZBQ9Z9C6GWC6E&&ref-refURL=http%3A%2F%2Fwww.lifeforcebooks.com%2Flife-force-books-store%2Fbooks%2Freviews_for_jj_semple.html"
                /> (2007)
              </li>
              <li>
                <OuterLink 
                  content={<b>The Backward-Flowing Method: The Secret of Life and Death</b>}
                  href="https://www.amazon.com/dp/0979533120?tag=lifforboo-20&camp=213381&creative=390973&linkCode=as4&creativeASIN=0979533120&adid=06P112MDRBN7BZS9VW7G&&ref-refURL=http%3A%2F%2Fwww.lifeforcebooks.com%2Flife-force-books-store%2Fbooks%2Fnew_book_by_jj_semple.html"
                /> (2008)
              </li>
              <li>
                <OuterLink 
                  content={<b>The Biology of Consciousness: Case Studies in Kundalini</b>}
                  href="https://amzn.to/1j0CGiw"
                /> (2014)
              </li>
              <li>
                <OuterLink 
                  content={<b>Seminal Retention and Higher Consciousness: The Sexology of Kundalini</b>}
                  href="https://bit.ly/RetentionBook"
                /> (2015)
              </li>
              <li>
                <OuterLink 
                  content={<b>Kundalini Musings</b>}
                  href="https://amzn.to/2GYLNOO"
                /> (2018)
              </li>
              <li>
                <OuterLink 
                  content={<b>https://amzn.to/2MxR85X</b>}
                  href="https://bit.ly/RetentionBook"
                /> (2018)
              </li>
            </ul>
          </p>
        </section>
        <section>
        <header><p><strong>Classic Life Force Science Books</strong></p></header>
          <p>
            <ul style={{listStyle:"none",marginLeft:"-24px"}}>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Secret of the Golden Flower</i>}
                  href="https://bit.ly/WilhelmSGF"
                /> – Richard Wilhelm translation
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Complete Works of Gopi Krishna</i>}
                  href="https://amzn.to/1Wm2QOF"
                />
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Universe in a Single Atom</i>}
                  href="https://amzn.to/23EZsgZ"
                /> – The Dalai Lama
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Fourth Way</i>}
                  href="https://amzn.to/1T99Lam"
                /> – PD Ouspensky
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Secrets of Chinese Meditation</i>}
                  href="https://amzn.to/1Wm0wqG"
                /> – Charles Luk
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Future of the Body</i>}
                  href="https://amzn.to/1Wm0KhE"
                /> – Michael Murphy
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>Cosmic Consciousness</i>}
                  href="https://amzn.to/24IFCUz"
                /> – Richard Bucke
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Life of Milarepa</i>}
                  href="https://amzn.to/1WnsUcL"
                /> – Tsangnyon Heruka and Donald S. Lopez
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Tibetan Book of The Dead</i>}
                  href="https://amzn.to/21T7T8Y"
                /> – Lobsang P. Lhalungpa translation – W. Evans-Wentz
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The Mahabharata: A Modern Rendering</i>}
                  href="https://amzn.to/1Npy3h2"
                /> – Ramesh Menon
                </b>
              </li>
              <li>
                <b>
                <OuterLink 
                  content={<i>The I-Ching</i>}
                  href="https://amzn.to/1UQ8gQG"
                />
                </b>
              </li>
            </ul>
          </p>
        </section>
        <section>
          <header><p><strong>Downloads</strong></p></header>
          <p><InnerLink content="Kundalini/Raw Foods Connection" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/kundaliniraw_foods_connecti.pdf" /></p>
        </section>
        <section>
          <header><p><strong><em>Reviews of Deciphering the Golden Flower One Secret at a Time</em></strong></p></header>
          <p>
            <ul>
              <li>
                <InnerLink content="Araminta Matthews review" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/araminta_matthews_book_revi.pdf" />
              </li>
              <li>
                <InnerLink content="Dennis Littrell review" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/dennis_littrell_review.pdf" />
              </li>
              <li>
                <InnerLink content="Sentient Times review" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/sentient_times_review.pdf" />
              </li>
            </ul>
          </p>
          <p>
            <ul style={{listStyle:"none",marginLeft:"-24px"}}>
            <li>
                <InnerLink content="Times of India (Speaking Tree Sunday supplement) interview with JJ Semple" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/110918-TOI-tearsheet.pdf" />
              </li>
              <li>
                <InnerLink content="JJ Semple Author Q&A" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/author_qa.pdf" />
              </li>
              <li>
                <InnerLink content="Backward Flowing Method Book description" href="https://www.lifeforcebooks.com/wp-content/uploads/2018/09/bfm_book_description.pdf" />
              </li>
            </ul>
          </p>
        </section>
      </div>
    );
  }
}

export default Announcements;