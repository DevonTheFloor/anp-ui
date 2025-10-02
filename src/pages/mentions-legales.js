import { defineNewTitle } from "../../controllers/meta-tag-manager";
import { mountingPageElements } from "../../controllers/mounting-page";
import hero from '../../src/assets/images/guitare-S.jpg';
import { dGEBId } from "../js/helpers/myDomHelper";

export default class MentionsLegales extends HTMLElement {
  constructor() {
    super();
    defineNewTitle('Mentions Légales');
    mountingPageElements(this,
      `
      <my-header
        h1title="Mentions Légales"
      ></my-header>
      <div class="hili">
            <history-link 
              class="li-nav"
              to-uri="/"
              text="Accueil"
            ></history-link>
          </div>
      <main>
        <h3><u>Editeur</u></h3>
        <p><strong><i>Apprentis & Patrons </i></strong> est un service édité par </p>
        <h4><i>Chertan Communication</i></h4>
        <h5><a href="https://chertancommunication.fr" target="_blank">https://chertancommunication.fr</a></h5> 
        <p>Nom commercial de l'entreprise individuelle : Gonthier Thierry - 900 844 987 RCS</p>
        <h4><u>Contact</u></h4>
        <p>E-mail: contact@chertancommunication.fr - tel: 06 52 61 08 07</p>
        <h3><u>Hébergeur</u></h3>
        <p>Ce service est hebergé par <strong>OVH Cloud</strong></p>
        <h5><a href="https://www.ovhcloud.com/fr/" target="_blank">https://www.ovhcloud.com/fr/</a></h5>
        <p>Siège social : 2 rue Kellermann - 59100 Roubaix - France</p>
      </main>
      `
      )
    dGEBId('hero').src = hero; 
  }
  connectedCallabck() {

  }
}
