import { navigatorSearchParams } from "../../../controllers/page-navigation";
import { myPost } from "../../js/helpers/myFetchHelper";
import { baseUrlApi } from "../../js/plank";
import { patronsRenderTemplate, apprentisRenderTemplate } from "../../js/modules/query-methods";
import './print-results.scss';

export default class PrintResults extends HTMLElement {
  constructor() {
    super();
    const params = navigatorSearchParams('who','branche','where'),
      fetchUrl = `${baseUrlApi}/apprenti/${params.who}/search-result/${params.branche}/${params.where}`,
      div = document.createElement('div');
    div.id = 'mount-list-result';
    div.setAttribute('class','ol-list');
    this.appendChild(div);

    this.fetchUrl = fetchUrl;
    this.branche = params.branche;
    this.localisation = params.where;
    this.who = params.who;
    this.div = div;
  }
  connectedCallback () {
    const fd = new FormData();
    fd.append('branche',this.branche);
    fd.append('localisation', this.localisation);
    const init = {
      method: 'POST',
      body: fd,

    }
    myPost(this.fetchUrl, init)
    .then((r)=> {
      if (this.who === 'patron') {
        r.forEach(data => {
          this.div.insertAdjacentHTML('afterbegin',patronsRenderTemplate(data));
        })
      } else {
        r.forEach(data => {
          this.div.insertAdjacentHTML('afterbegin',apprentisRenderTemplate(data));
        })
      }
 
    })
  }
}