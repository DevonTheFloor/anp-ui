import { dCrEl, dGEBId } from '../../../js/helpers/myDomHelper';
import style from './my-input.scss';

export default class MyInput extends HTMLElement {
  constructor () {
    super();

    const label = dCrEl('label');
    this.appendChild(label);
    const labelTxt = this.getAttribute('labelTxt');
    label.textContent = labelTxt;
    const labId = this.getAttribute('labId');
    label.id = labId;
    const myInput = dCrEl('input');
    let inpId = this.getAttribute('inpId');
    myInput.id = inpId;
    myInput.name = inpId;
    myInput.setAttribute('class','fdata');
    let type = this.getAttribute('type');
    myInput.type = type;
    let pattern = this.getAttribute('pattern');
    myInput.pattern = pattern;
    let inpPhr = this.getAttribute('inpPhr');
    if (inpPhr === null) {
      myInput.placeholder = ""
    } else {
      myInput.placeholder = inpPhr;
    }
    let info = this.getAttribute('info');
    if (info === null) {
      myInput.title = ""
    } else {
      myInput.title = info;
    }
    label.appendChild(myInput);
    const spanError = dCrEl('span');
    const idTagMesg = `err${inpId}`;
    spanError.id = idTagMesg;
    spanError.setAttribute('class','errMsg');
    label.append(spanError);
    const regex = new RegExp(pattern);
    this.verifyField(inpId, idTagMesg, regex, 'Champ invalide');
    
  }


  verifyField (idCible,idTagMessage, myRegex, messageError) {
    let cible = dGEBId(idCible);
    let tagMessage = dGEBId(idTagMessage);
    cible.addEventListener('focus', function () {
      let cv = cible.value;
      tagMessage.innerHTML = '';
      if (cv === ''){
        tagMessage.innerHTML = '';
      } else {
        tagMessage.innerHTML = '';
      }
    })
    cible.addEventListener('blur', function () {
      let cvb = cible.value;
      let verif  = myRegex.test(cvb);
      if (cvb === ''){
        tagMessage.innerHTML = 'Ce champs est obligatoire, merci.';
      } else {
        if (verif === false) {
          tagMessage.innerHTML = messageError;
          return false;
        } else {
          return true;
        }
      }
    });
  };
}

  


