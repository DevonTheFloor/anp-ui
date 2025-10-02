import { mountingPageElements } from "../../controllers/mounting-page";
import { baseUrlApi } from "../js/plank";
import heroUrl from '../assets/images/guitare-S.jpg';
import heroUrlMobile from '../assets/images/guitare-sx.jpg'
import { defineNewTitle } from "../../controllers/meta-tag-manager";
//import { mediaQueryForImages } from "../../handlers/media-query-in-js";
import { dCrEl, dGEBId } from "../js/helpers/myDomHelper";
import { navigatorSearchParams, paramsLogger } from "../../controllers/page-navigation";
import { myGet } from '../js/helpers/myFetchHelper';


export default class ResetPassword extends HTMLElement {
  constructor() {
    super();
    const page = /* html */ `
      <my-header 
        h1title="Nouveau mot de passe"
      >
      </my-header>
      <div id="reset-form">
        <p>Merci renseigner votre adresse mail, nous vous enverrons un mot de passe temporaire valable dix minutes pour vous permettre d'effacer votre fiche.</p>
        <label>E Mail</label>
        <input type="text" id="mail" name="mail" class="tags" placeholder="moua@fai.fr">
        <button id="send" class="tags action-btn">Demander un autre mot de passe</button>
        
      </div>
      <my-footer></my-footer>
    `
    defineNewTitle("Nouveau mot de passe");
    mountingPageElements(this,
      page
    )
  }
  connectedCallback () {
    mediaQueryForImages(800, [
      {
        id: 'hero',
        small: heroUrlMobile,
        large: heroUrl,
        link: 'no',
        site: ''
      }
    ])
    const params = paramsLogger(),
      mail = dGEBId('mail'),
      qui = params[1],
      id = params[2];
    const btn = dGEBId('send');
    btn.addEventListener('click', ()=> {
      const email = mail.value;
      resetPassWord(`${baseUrlApi}/apprenti/pass-gen/send-new-pass/${qui}/${id}/${email}`);
    })
  }
}


function resetPassWord ( url) {
  myGet(url)
  .then((resp)=> {
    const app = dGEBId('reset-form');
    printMsgFromApi(app, resp.message);
    setTimeout(()=> {
      history.back();
    }, 3500)
  })
}

function printMsgFromApi (mount, message) {
  const rep = dCrEl('p');
  rep.innerHTML = message;
  rep.style.color = 'blue';
  rep.style.fontWeight = 'bolder';
  mount.innerHTML = '';
  mount.appendChild(rep)
}