import { defineMetaTagsPage, defineNewTitle } from "../../controllers/meta-tag-manager";
import { mountingPageElements } from "../../controllers/mounting-page";
import { mediaQueryForImages } from "../../handlers/media-query-in-js";
import heroUrl from '../assets/images/guitare-S.jpg';
import heroUrlMobile from '../assets/images/guitare-sx.jpg';
import { getStatistique, navigatorSearchParams } from "../../controllers/page-navigation";


export default class ResultsPage extends HTMLElement {
  constructor() {
    super();
    const qui = navigatorSearchParams('qui','ou','pourquoi').qui;
    defineNewTitle('Resultats de recherche');
    defineMetaTagsPage([
      { value: "og:title", content: "Resultats de recherche"},
      {value: "og:type", content: "web site"},
      { value: "og:url", content: "https://apprentis-et-patrons.fr"},
      { value: "og:image", content: `${heroUrlMobile}`},
      { value: "og:description", content: `Résultats de votre recherche de ${qui} sur apprentis-et-patrons.fr.`}
    ],[
      {value: "twitter:card", content: "summary"},
      {value: "twitter:site", content: "apprentis-et-patrons.fr"},
      { value: "twitter:title", content: "Apprentis & Patrons"},
      { value: "description", content: `Résultats de votre recherche de ${qui} sur apprentis-et-patrons.fr.`},
      { value: "twitter:creator", content: ""},
      { value: "twitter:image", content: `${heroUrlMobile}`}
    ]);
    const article = qui === 'patron' ? 'de' : "d'";
    mountingPageElements(
      this,
      `<my-header 
        h1title="Listing ${article} ${qui}s"
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
            imgId="sonoResult"
            site="https://6x6sono-event.fr"
          ></encart-pub>
          <section class="main-flow">
            <print-results></print-results>
          </section>
          <div class="pub-encart">
            <img id="goDev">
          </div>
          <encart-pub
            imgId="devResult"
            site="https://monactiviteweb.fr"
          ></encart-pub>
        </section>
      </main>
      <my-footer texte="Nos partenaires : " texte2="Plan du site"></my-footer>
      `
    )
  }
  connectedCallback () {
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
