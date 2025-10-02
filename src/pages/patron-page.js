import { mountingPageElements } from '../../controllers/mounting-page';
import { mediaQueryForImages } from '../../handlers/media-query-in-js';
import * as txt from '../strings/patronPageTxt';
import { unlockSendButton } from '../js/modules/handle-elements-page';
import { defineNewTitle, defineMetaTagsPage } from '../../controllers/meta-tag-manager';
import heroUrl from '../assets/images/mecano-S.jpg';
import heroUrlMobile from '../assets/images/mecano-sx.jpg';
import { getStatistique } from '../../controllers/page-navigation';

export default class PatronPage extends HTMLElement {
  constructor () {
    super();
    defineNewTitle('Je suis Employeur');
    defineMetaTagsPage([
      { value: "og:title", content: "Je Suis Un Patron"},
      { value: "og:type", content: "Web site"},
      { value: "og:url", content: `https://apprentis-et-patrons.fr/je-suis-patron/`},
      { value: "og:image", content: `${heroUrlMobile}`},
      { value: "og:description", content: "Cher employeur, sur cette page vous pourrez vous inscrire et rechercher un apprenti"}
    ],
    [
      { value: "twitter:card", content: "summary"},
      { value: "twitter:site", content: `https://apprentis-et-patrons.fr/je-suis-patron/`},
      { value: "twitter:title", content: "Je Suis Un Patron"},
      { value: "twitter:image", content: `${heroUrlMobile}`},
      { value: "description", content: "Cher employeur, sur cette page vous pourrez vous inscrire et rechercher un apprenti"},
      { value: "twitter:creator", content: ""}
    ])
    mountingPageElements(this,
      `<my-header 
        h1title="Je cherche un apprenti"
        h2title="Pour trouver un apprenti motivé et desireux d'apprendre mon métier"
      >
      </my-header>
      <main>
        <qui-je-suis 
          link1="/"
          page1="Accueil"
          link2="/je-suis-apprenti"
          page2="Je suis apprenti"
          >
        </qui-je-suis>        
        <section class="main-content">    
          <encart-pub
            imgId="artPat"
            site="https://www.instagram.com/artattoo28/?hl=fr"
          ></encart-pub>
          <article class="main-flow">
            <section>
              ${txt.intro}
            </section>
            <section>
              <details>
                <summary id="flash-text">Pour créer votre fiche employeur, cliquez ici pour dérouler le formulaire.<br> Tous les champs sont obligatoires sauf la photo, même si vivement recommandée, c'est plus sympa et ça aide à localiser votre établissement.</summary>
                <fieldset>
                  <legend class="li-nav">Renseignements</legend>
                 <my-inscript-form idForm="inscr-patron" how="patron" counter="4"></my-inscript-form>
                </fieldset>
              </details>  
            </section>
            <section>
              <fieldset>
                <legend class="li-nav">Trouver un apprenti</legend>
                <cherche-form qui="apprenti"></cherche-form>
              </fieldset>
            </section>
            <section>
              <fieldset id="search-result-view">
                <legend class="li-nav">Resultats</legend>
              </fieldset>
            </section>
          </article>
          <encart-pub
            imgId="devPat"
            site="https://monactiviteweb.fr"
          ></encart-pub>
        </section>
      </main>
      <my-footer texte="Nos partenaires : " texte2="Plan du site"></my-footer>
      `
      )
      unlockSendButton('exe', 'errMsg');
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
