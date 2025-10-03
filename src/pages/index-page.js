import { mountingPageElements } from '../../controllers/mounting-page';
import { defineMetaTagsPage, defineNewTitle } from '../../controllers/meta-tag-manager';
import { mediaQueryForImages } from '../../handlers/media-query-in-js';
import heroUrl from '../assets/images/guitare-S.jpg';
import heroUrlMobile from '../assets/images/guitare-sx.jpg'
import { getStatistique } from '../../controllers/page-navigation';
import { baseUrlApi } from '../js/plank';

// Create a class for the element
export default class IndexPage extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    defineNewTitle("Apprentis & Patrons");
    defineMetaTagsPage([
      { value: "og:title", content: "Apprentis & Patrons"},
      {value: "og:type", content: "web site"},
      { value: "og:url", content: "https://apprentis-et-patrons.fr"},
      { value: "og:image", content: `${heroUrlMobile}`},
      { value: "og:description", content: "Ici vous trouverez un maitre d'apprentissage ou un apprenti à former."}
    ],[
      {value: "twitter:card", content: "summary"},
      {value: "twitter:site", content: "apprentis-et-patrons.fr"},
      { value: "twitter:title", content: "Apprentis & Patrons"},
      { value: "description", content: "Ici vous trouverez un maitre d'apprentissage ou un apprenti à former."},
      { value: "twitter:creator", content: ""},
      { value: "twitter:image", content: `${heroUrl}`}
    ])
    mountingPageElements(this, 
      `<my-header 
        h1title="Apprentis et patrons"
        h2title="Le site de mise en relation des employeur et des apprentis"
      >
      </my-header>
        <main>
          <qui-je-suis
            link1="/je-suis-apprenti"
            page1="Je suis apprenti"
            link2="/je-suis-patron"
            page2="Je suis patron">
          </qui-je-suis>
          <my-nav-menu></my-nav-menu>
          <section class="main-content">
            <encart-pub
              imgId="sonoIndex"
              site="https://6x6sono-event.fr"
            ></encart-pub>
            <section class="main-flow">
              <article-presentation></article-presentation>
            </section>
            <encart-pub
              imgId="devIndex"
              site="https://monactiviteweb.fr"
            ></encart-pub>
          </section>
        </main>
        <my-footer texte="Nos partenaires : " texte2="Plan du site"></my-footer>
        `);
        
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
      }
    ])
  }
}