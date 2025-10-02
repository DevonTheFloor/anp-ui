import { dCrEl } from "../js/helpers/myDomHelper";
import { myGet } from '../js/helpers/myFetchHelper';
import { baseUrlApi } from '../js/plank';

export default class infosPatron extends HTMLElement {
  static get observedAttributes() {
    return ['enseigne', 'raiso','adresse', 'telephone','cp', 'ville'];
  }
  constructor() {
    super();
    //<p>enseigne</p>
    this.idInfos = this.getAttribute('idInfos');
    this.idUser = this.getAttribute('id-user');
    const div = dCrEl('div');
    div.setAttribute('class', 'user-card');
    this.appendChild(div);

    const title = dCrEl('h3');
    title.setAttribute('class', 'ti-fiche');
    title.textContent = 'Fiche Patron';
    div.appendChild(title);

    const myEnseigne = dCrEl('div');
    myEnseigne.setAttribute('class', 'parag');
    div.appendChild(myEnseigne);
    this.myEnseigne = myEnseigne;
    //<p>raiso</p>
    const myRaiso = dCrEl('div');
    myRaiso.setAttribute('class', 'parag')
    div.appendChild(myRaiso);
    this.myRaiso = myRaiso;
    //<p>adresse</p>
    const myAdresse = dCrEl('div');
    myAdresse.setAttribute('class', 'parag')
    div.appendChild(myAdresse);
    this.myAdresse = myAdresse;
    //<p>telephone</p>
    const myTel = dCrEl('div');
    myTel.setAttribute('class', 'parag')
    div.appendChild(myTel);
    this.myTel = myTel;
    //<p>presentation</p>
    const myPrez = dCrEl('div');
    div.appendChild(myPrez);
    myPrez.setAttribute('class', 'parag');
    this.myPrez = myPrez;
    const pre = dCrEl('pre');
    div.appendChild(pre);
    this.pre = pre;
    
    //<p>mail</p>
    const myMail = dCrEl('p');
    div.appendChild(myMail);
    this.myMail = myMail;
    //<img>
    const myTof = dCrEl('img');
    myTof.setAttribute('class', 'pic-user');
    div.appendChild(myTof);
    this.myTof = myTof;
        
  }
  connectedCallback() {
    myGet(`${baseUrlApi}/apprenti/patron/getone/${this.idUser}`)
    .then((resp) => {
      delete resp.mdp;
      const tel = insertSpace(resp.telephone);
      this.myEnseigne.setAttribute('enseigne', resp.enseigne);
      this.myEnseigne.innerHTML = '<p class="t-lbl"><i>Enseigne : </i></p><p>'+resp.enseigne;+'</p>';
      this.myRaiso.setAttribute('raiso', resp.raiso);
      this.myRaiso.innerHTML = '<p class="t-lbl"><i>Raison Sociale : </i></p><p></p>'+resp.raiso+'<br>';
      this.myTel.setAttribute('telephone', resp.telephone);
      this.myTel.innerHTML = '<p class="t-lbl"><i>Téléphone : </i><p>'+tel+'</p>';
      this.myAdresse.setAttribute('adresse', resp.adresse);
      this.myAdresse.innerHTML = '<p class="t-lbl"><i>Adresse : </i><p>'+resp.adresse+'</p><p>'+resp.cp+' '+resp.ville+'</p>';
      this.myPrez.setAttribute('presentation', 'Présentation');
      this.myPrez.innerHTML = '<p class="t-lbl"><i>Présentation : </i>';
      this.pre.innerHTML = resp.presentation;
      this.myMail.setAttribute('email', resp.email);
      this.myMail.innerHTML = '<p class="t-lbl"><i>e-mail : </i></p><p>'+resp.email+'</p>';
      this.myTof.setAttribute('src', resp.photos[0]);
      this.myTof.setAttribute('alt', 'Photo non disponible');
    })
  }
}

function insertSpace(str) {
  return str.match(/.{1,2}/g).join(" ");
}