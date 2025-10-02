import { defineNewTitle, defineMetaTagsPage,useNewTitle } from '../../controllers/meta-tag-manager';
import { mountingPageElements } from '../../controllers/mounting-page';
import { mediaQueryForImages } from '../../handlers/media-query-in-js';
import { getStatistique, goToErrorPage, navigatorSearchParams } from '../../controllers/page-navigation';
import tattooUrl from '../assets/artatoo.jpg';
import tattooUrlMobile from '../assets/artatoo-mobile.jpg';
import bikeUrl from '../assets/action-bike1.jpg';
import bikeUrlMobile from '../assets/bikeMobile.jpg';
import heroPatron from '../assets/images/cuisto-S.jpg';
import heroPatronMobile from '../assets/images/cuisto-sx.jpg';
import heroApprenti from '../assets/images/chaire-S.jpg';
import heroApprentiMobile from '../assets/images/chaire-sx.jpg';
import { baseUrlApi } from '../js/plank';

export default class MaFiche extends HTMLElement {
  constructor () {
    super();
    const params = navigatorSearchParams('how','id','blank');
    const regex = /patron|apprenti/;
    let  noterr = regex.test(params.how)
    if (noterr = false) {
      goToErrorPage()
    } else {
      if (params.how === "patron") {
        defineNewTitle("Fiche individuelle Patron");
        const hTitle = useNewTitle();
        defineMetaTagsPage([
          { value: "og:title", content: "Fiche Individuelle Patron"},
          { value: "og:type", content: "Web site"},
          { value: "og:url", content: `https://apprentis-et-patrons.fr/ma-fiche/${params.how}/${params.id}/`},
          { value: "og:image", content: `${heroPatronMobile}`},
          { value: "og:description", content: "Fiche d'information individuelle concernant un employeur"}
        ],
        [
          { value: "twitter:card", content: "summary"},
          { value: "twitter:site", content: `https://apprentis-et-patrons.fr/ma-fiche/${params.how}/${params.id}/`},
          { value: "twitter:title", content: "Fiche Individuelle Patron"},
          { value: "twitter:image", content: `${heroPatronMobile}`},
          { value: "description", content: "Fiche d'information individuelle concernant un employeur"},
          { value: "twitter:creator", content: ""}
        ])
        mountingPageElements(this,
          `<my-header h1title="${hTitle}"></my-header>
          <main>
          <div class="hili">
            <history-link 
              class="li-nav"
              to-uri="/je-suis-apprenti"
              text="Je suis Apprenti"
            ></history-link>
          </div>
            <section class="main-content">
            <encart-pub
                imgId="artFichePat"
                site="https://www.instagram.com/artattoo28/?hl=fr"
              ></encart-pub>
              
              <article class="main-flow">
                <section>
                  <infos-patron idInfos="infosPatrons" id-user=${params.id}></infos-patron>
                </section>
                <section>
                  <details class="div-sup-btn">
                    <summary id="flash-text">C'est ma fiche</summary>
                    <fieldset>
                      <legend  class="li-nav">Je souhaite la supprimer</legend>
                      <suppr-fiche-btn id="exe" how="${params.how}" id-fiche="${params.id}"></suppr-fiche-btn>
                    </fieldset>
                  </details>
                </section>
              </article>
              
              <encart-pub
                imgId="devFichePat"
                site="https://monactiviteweb.fr"
              ></encart-pub>
              </section> 
          </main>
          <my-footer texte="Nos partenaires :"></my-footer>
          `
        )
        mediaQueryForImages(800, [
          {
            id: 'hero',
            small: heroPatronMobile,
            large: heroPatron,
            link: 'no',
            site: ''
          }
        ])
      } else {
        defineNewTitle("Fiche individuelle Apprenti");
        const hTitle = useNewTitle();
        defineMetaTagsPage([
          { value: "og:title", content: "Fiche Individuelle Apprenti"},
          { value: "og:type", content: "Web site"},
          { value: "og:url", content: `https://apprentis-et-patrons.fr/ma-fiche/${params.how}/${params.id}/`},
          { value: "og:image", content: `${heroPatronMobile}`},
          { value: "og:description", content: "Fiche d'information individuelle concernant un apprenti"}
        ],
        [
          { value: "twitter:card", content: "summary"},
          { value: "twitter:site", content: `https://apprentis-et-patrons.fr/ma-fiche/${params.how}/${params.id}/`},
          { value: "twitter:title", content: "Fiche Individuelle Apprenti"},
          { value: "twitter:image", content: `${heroPatronMobile}`},
          { value: "description", content: "Fiche d'information individuelle concernant un apprenti"},
          { value: "twitter:creator", content: ""}
        ])
        mountingPageElements(this,
          `<my-header h1title="${hTitle}"></my-header>
          <main>
          <div class="hili">
            <history-link 
              class="li-nav"
              to-uri="/je-suis-patron"
              text="Je suis patron"
            ></history-link>
          </div>
            <section class="main-content">
              <encart-pub
                imgId="sonoFicheApp"
                site="http://6x6sono.free.fr"
              ></encart-pub>
              <article class="main-flow">
                <section>
                  <infos-apprenti idInfos="infosApprentis" id-user=${params.id}></infos-apprenti>
                </section>
                <section>
                  <details class="div-sup-btn">
                    <summary id="flash-text">C'est ma fiche</summary>
                    <fieldset>
                      <legend  class="li-nav">Je souhaite la supprimer</legend>
                      <suppr-fiche-btn id="exe" how="${params.how}" id-fiche="${params.id}"></suppr-fiche-btn>
                    </fieldset>
                  </details>
                </section>
              </article>
              <encart-pub
                imgId="bikeFicheApp"
                site="https://www.instagram.com/actionbike28/?hl=fr"
              ></encart-pub>
            </section>
          </main>
          <my-footer texte="Nos partenaires :"></my-footer>
          `
        )
        mediaQueryForImages(800, [
          {
            id: 'hero',
            small: heroApprentiMobile,
            large: heroApprenti,
            link: 'no',
            site: ''
          }
        ]) 
      }  
    }
  }
  connectedCallback() {
    getStatistique();
  }
}
