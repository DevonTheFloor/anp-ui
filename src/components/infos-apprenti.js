import { dCrEl } from "../js/helpers/myDomHelper";
import { myGet } from '../js/helpers/myFetchHelper';
import { baseUrlApi } from "../js/plank";

export default class infosApprenti extends HTMLElement {

  static get observedAttributes() {
    return ['nom', 'prenom','adresse', 'telephone','cp', 'ville'];
  }
  constructor() {
    super();
    const id = this.getAttribute('id-user');
    this.id = id;
    //<p>Nom</p>
    this.idInfos = this.getAttribute('idInfos');
    const div = dCrEl('div');
    div.setAttribute('class','user-card');
    this.appendChild(div);

    const title = dCrEl('h3');
    title.setAttribute('class', 'ti-fiche');
    title.textContent = 'Fiche Apprenti';
    div.appendChild(title);

    const myNom = dCrEl('div');
    myNom.setAttribute('class', 'parag');
    div.appendChild(myNom);
    this.myNom = myNom;
    //<p>Prenom</p>
    const myPrenom = dCrEl('div');
    myPrenom.setAttribute('class', 'parag')
    div.appendChild(myPrenom);
    this.myPrenom = myPrenom;
    //<p>Branch</p>
    const myBranch = dCrEl('div');
    myBranch.setAttribute('class', 'parag');
    div.appendChild(myBranch);
    this.myBranch = myBranch;
    //p>presentation
    const pre = dCrEl('pre');
    div.appendChild(pre);
    const myPrez = dCrEl('div');
    myPrez.setAttribute('class', 'parag')
    pre.appendChild(myPrez);
    this.myPrez = myPrez;
    //<p>adresse</p>
    const myAdresse = dCrEl('div');
    myAdresse.setAttribute('class', 'parag')
    div.appendChild(myAdresse);
    this.myAdresse = myAdresse;
    //<p>telephone</p>
    const myTel = dCrEl('div');
    myTel.setAttribute('class', 'parag');
    div.appendChild(myTel);
    this.myTel = myTel;
    //<p>mail</p>
    const myMel = dCrEl('div');
    myTel.setAttribute('class', 'parag')
    div.appendChild(myMel);
    this.myMel = myMel;

   
  }
  connectedCallback() {
    myGet(`${baseUrlApi}/apprenti/apprenti/getone/${this.id}`)
    .then((resp) => {
      delete resp.mdp;
      const tel = insertSpace(resp.telephone);
      this.myNom.setAttribute('nom', resp.nom);
      this.myNom.innerHTML = '<p class="t-lbl"><i>Nom : </i></p><p>'+resp.nom+'</p>';
      this.myPrenom.setAttribute('prenom', resp.prenom);
      this.myPrenom.innerHTML = '<p class="t-lbl"><i>Prénom : </i></p><p>'+resp.prenom+'</p>';
      this.myPrez.setAttribute('presentation', resp.presentation);
      this.myPrez.innerHTML = '<p class="t-lbl"><i>Présentation : </i></p><p>'+resp.presentation+'</p>';
      this.myTel.setAttribute('telephone', resp.telephone);
      this.myBranch.innerHTML = '<p class="t-lbl"><i>Je recherche en : </i></p><p>'+resp.branche+'</p>';
      this.myTel.innerHTML = '<p class="t-lbl"><i>Téléphone : </i></p><p>'+tel+'</p>';
      this.myAdresse.setAttribute('adresse', resp.adresse);
      this.myAdresse.innerHTML = '<p class="t-lbl"><i>Adresse : </i></p><p>'+resp.adresse+'</p><p>'+resp.cp+' '+resp.ville+'</p>';
      this.myMel.setAttribute('ville', resp.email);
      this.myMel.innerHTML = '<p class="t-lbl"><i>e-mail : </i></p><p>'+resp.email+'</p>';

    })
  }
}

function insertSpace(str) {
  return str.match(/.{1,2}/g).join(" ");
}