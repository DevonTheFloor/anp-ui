// first import function
import { mountingPageElements } from '../../controllers/mounting-page';
import { mediaQueryForImages } from '../../handlers/media-query-in-js';
import * as txt from '../strings/apprentiPageText';
import { unlockSendButton } from '../js/modules/handle-elements-page';
import { defineNewTitle, defineMetaTagsPage } from '../../controllers/meta-tag-manager';
import heroUrl from '../assets/images/constructeuse-S.jpg';
import heroUrlMobile from '../assets/images/constructeuse-S.jpg';
import { getStatistique } from '../../controllers/page-navigation';
import { baseUrlApi } from '../js/plank';

export default class ApprentiPage extends HTMLElement {
  constructor () {
    super();
    defineNewTitle("Je suis Apprenti");
    defineMetaTagsPage([
      { value: "og:title", content: "Je Suis Un Apprenti"},
      { value: "og:type", content: "Web site"},
      { value: "og:url", content: `https://apprentis-et-patrons.fr/je-suis-apprenti`},
      { value: "og:image", content: `${heroUrlMobile}`},
      { value: "og:description", content: "Tu veux rentrer dans la vie active, et tu cherches un patron? C'est ici que ça se passe. Tu peux faire une recherche et aussi t'inscrire pour que les patrons puissent te trouver."}
    ],
    [
      { value: "twitter:card", content: "summary"},
      { value: "twitter:site", content: `https://apprentis-et-patrons.fr/je-suis-apprenti`},
      { value: "twitter:title", content: "Je Suis Un Apprenti"},
      { value: "twitter:image", content: `${heroUrlMobile}`},
      { value: "description", content: "Tu veux rentrer dans la vie active, et tu cherches un patron? C'est ici que ça se passe. Tu peux faire une recherche et aussi t'inscrire pour que les patrons puissent te trouver."},
      { value: "twitter:creator", content: ""}
    ])
    mountingPageElements(this,
      `<my-header 
          h1title="Je recherche un patron"
          h2title="Pour trouver un employeur, du CAP à la licence en alternance"
        >
        </my-header>
      <main>
        <qui-je-suis 
          link1="/"
          page1="Accueil"
          link2="/je-suis-patron"
          page2="Je suis patron">
        </qui-je-suis>        
        <section class="main-content">
        <encart-pub
          imgId="sonoApprent"
          site="http://66sono.free.fr"
        ></encart-pub>
          <article class="main-flow">
            <section>
              ${txt.commentFaire}
            </section>
            <section>
              <details>
                <summary id="flash-text">Pour créer ta fiche, clique ici pour dérouler le formulaire.<br> Tous les champs sont obligatoires. Verifie bien toutes les informations avant d'envoyer, il n'est pas possible de modifier (il faudra supprimer et recommencer).</summary>
                <fieldset>
                  <legend class="li-nav">Créer ta fiche apprenti</legend>
                  <my-inscript-form idForm="apprenti" how="apprenti"></my-inscript-form>
                </fieldset>
              </details>
            </section>
            <section>
              <fieldset>
                <legend class="li-nav">Trouver un patron</legend>
                <cherche-form qui="patron"></cherche-form>
              </fieldset>
            </section>
            <section id="goresult">
              <fieldset id="search-result-view">
                <legend class="li-nav">Resultats</legend>
              </fieldset>
            </section>
          </article>
          <encart-pub
            imgId="bikeApprent"
            site="https://www.instagram.com/actionbike28/?hl=fr"
          ></encart-pub>
          
        </section>
      </main>
      <my-footer texte="Nos Partenaires :" texte2="Plan du site"></my-footer>  
      `
      )
    unlockSendButton("exe", "errMsg");
  }
  connectedCallback() {
    getStatistique()
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
