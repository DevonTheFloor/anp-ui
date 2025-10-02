//function
import { defineNewTitle, defineMetaTagsPage } from '../../controllers/meta-tag-manager.js';
import { mountingPageElements } from '../../controllers/mounting-page.js';
import { mediaQueryForImages } from '../../handlers/media-query-in-js.js';
//text
import * as txt from '../strings/condidenceText';
//image
import heroUrl from '../assets/images/cuisto-S.jpg';
import heroUrlMobile from '../assets/images/cuisto-sx.jpg'
import sonoUrl from '../assets/6x6sono.jpeg';
import devUrl from '../assets/maw.jpg';
import sixUrlMobile from '../assets/6x6sonoMobile.png';
import devUrlMobile from '../assets/maw-mobile.jpg';
import { getStatistique } from '../../controllers/page-navigation.js';

export default class RgpdPage extends HTMLElement {
  constructor () {
    super();
      defineNewTitle("Confidentialité");
      defineMetaTagsPage([
        { value: "og:title", content: "Confidentialité"},
        {value: "og:type", content: "web site"},
        { value: "og:url", content: "https://apprentis-et-patrons.fr/confidentialite/"},
        { value: "og:image", content: `${heroUrlMobile}`},
        { value: "og:description", content: "Ici nous ne collectons pas vos données."}
      ],[
        {value: "twitter:card", content: "summary"},
        {value: "twitter:site", content: "https://apprentis-et-patrons.fr/confidentialite/"},
        { value: "twitter:title", content: "Confidentialté"},
        { value: "description", content: "Ici nous ne collectons pas vos données."},
        { value: "twitter:creator", content: ""},
        { value: "twitter:image", content: `${heroUrl}`}
      ])
      mountingPageElements(this,
        `<my-header h1title="Confidentialité"></my-header>
        <main>
          <div class="hili">
            <history-link 
              class="li-nav"
              to-uri="/"
              text="Accueil"
            ></history-link>
          </div>
          <section class="main-content">
            <encart-pub
              imgId="sonoRgpd"
              site="http://6x6sono.free.fr"
            ></encart-pub>
            <article class="main-flow">
              <section>
                ${txt.rgpd}
              </section>
            </article>
            <encart-pub
              imgId="devRgdp"
              site="https://monactiviteweb.fr"
            ></encart-pub>
            </section> 
        </main>
        `
      )
  }
  connectedCallback() {
    getStatistique();
    mediaQueryForImages(800, [
      {
        id: 'hero',
        small: heroUrlMobile,
        large: heroUrl,
        link: 'no',
        site: ''
      },
      {
        id: '66sono',
        small: sixUrlMobile,
        large: sonoUrl,
        link: 'yes',
        site: 'http://66sono.free.fr'
      },
      {
        id: 'goDev',
        small: devUrlMobile,
        large: devUrl,
        linl: 'yes',
        site: 'https://monactiviteweb.fr'
      }
    ])
  }
}
