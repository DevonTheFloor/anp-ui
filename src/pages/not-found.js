import { defineNewTitle, defineMetaTagsPage } from '../../controllers/meta-tag-manager';
import { mountingPageElements } from '../../controllers/mounting-page';
import { backRootPage, getStatistique } from '../../controllers/page-navigation';

export default class NotFound extends HTMLElement {
  constructor () {
    super();
    defineNewTitle("Page non trouvée");
    defineMetaTagsPage(
      [
      { value: "og:title", content: "Page non trouvée"},
      { value: "og:type", content: "Web site"},
      { value: "og:url", content: `https://apprentis-et-patrons.fr/not-found`},
      { value: "og:image", content: ""},
      { value: "og:description", content: "La page que vous cherchez n'existe pas"}
    ],
    [
      { value: "twitter:card", content: "summary"},
      { value: "twitter:site", content: `https://apprentis-et-patrons.fr/not-found`},
      { value: "twitter:title", content: "Page non trouvée"},
      { value: "twitter:image", content: ""},
      { value: "description", content: "La page que vous cherchez n'existe pas"},
      { value: "twitter:creator", content: ""}
    ])
    mountingPageElements(this,
    `<main>
        <section>
        </section>
    </main>
    `
    )
    setTimeout(()=> {
      backRootPage()
    },3000
    )
  }
  connectedCallback() {
    getStatistique
    Swal.fire({
      icon: 'error',
      title: 'Erreur 404',
      text: 'La page que vous cherchez n\'existe pas',
    })
  }
}
