import { navigator } from "../../../controllers/page-navigation";
import { dCrEl, dGEBId, isAdHl, gtEBCNa } from "../../js/helpers/myDomHelper";
import { myPost } from '../../js/helpers/myFetchHelper';
import { corregdep } from '../../js/modules/corres-reg-dep';
import  './my-inscript-form.scss';
import { baseUrlApi } from '../../js/plank';

export default class MyInscriptForm extends HTMLElement {

  constructor () {
    super();
    this.idForm = this.getAttribute('idForm');
    const myForm = dCrEl('form'),
      how = this.getAttribute('how');
    myForm.id = this.idForm;
    myForm.enctype = 'multipart/form-data';
    this.appendChild(myForm);
    let urlInscription ='';
    if(how == 'patron') {
      urlInscription = `${baseUrlApi}/apprenti/patron/postone`
      isAdHl(
        myForm,
        'afterbegin',
        `<my-input labelTxt="Enseigne : " inpId="enseigne" type="text" pattern="^[\\w\\s]{3,30}$" inpClass="fdata"></my-input>
        <label> Branche :
          <select id="branche" class="fdata">
          <option>---</option>
          <option value="agriculture">Agriculture</option>
          <option value="batiment">Bâtiment</option>
          <option value="boucherie">Boucherie</option>
          <option value="boulangerie">Boulangerie</option>
          <option vlaue="charcuterie">Charcuterie</option>
          <option value="cuisinier">Cuisinier</option>
          <option value="hcr">Hotellerie/Restauration</option>
          <option value="mecanique">Mécanique</option>
          <option value="patisserie" >Patisserie</option>
          <option value="vente">Vente</option>
          </select>
        </label>
        <my-input labelTxt="Raison Sociale : " inpId="raiso" type="text" pattern="(^[\\w\\s]{3,30}$)" inpClass="fdata"></my-input>
        <div class="prez">
          <label> Presentation : 
            <textarea id="presentation" placeholder="Presentez-vous brièvement, présentez le poste, le regime de travail et décrivez le profil que vous recherchez" class="fdata" rows="8"></textarea>
          </label>
        </div>
        <my-input labelTxt="Téléphone : " inpId="telephone" type="tel" pattern="(^[0-9]{10}$)" inpPhr="0978541236" inpClass="fdata"></my-input>
        <my-input labelTxt="Adresse : " inpId="adresse" type="text" pattern="(^[\\w\\s]{1,90}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="Code Postal : " inpId="cp" type="number" pattern="(^[0-9]{4,5}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="Ville : " inpId="ville" type="text" pattern="(^[\\w\\s]{1,30}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="E-mail : " inpId="email" type="text" pattern="(^([a-zA-Z0-9_\\-\.]+)@((\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$)" inpPhr="moi@mail.fr" inpClass="fdata"></my-input>
        <input type="file" id="photo" name="photo" class="fdata">
        <p>Choisissez un mot de passe,notez le, il vous sera demandé pour effacer votre annonce. Il doit contenir 15 caractères au minimum, au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère special. L'espace est autorisé</p>
        <my-input labelTxt="Mot de passe : " inpId="mdp" type="text" pattern="(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{15,}$)" info="15 caractères au minimum, au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère special. L'espace est autorisé" inpClass="fdata"></my-input>
        <button id="exe" type="submit" class="send-form action-btn">S'inscrire et trouver plein d'apprentis!</button>
        `
      )
    } else {
      urlInscription =`${baseUrlApi}/apprenti/apprenti/postone`
      isAdHl(
        myForm,
        'afterbegin',
        `<my-input labelTxt="Nom : " inpId="nom" type="text" pattern="(^[\\w\\s]{2,30}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="Prènom : "  inpId="prenom" type="text" pattern="(^[\\w\\s]{2,30}$)" inpClass="fdata"></my-input>
        <label>Branche :
          <select id="branche" class="fdata">
          <option>---</option>
          <option value="agriculture">Agriculture</option>
          <option value="batiment">Bâtiment</option>
          <option value="boucherie">Boucherie</option>
          <option value="boulangerie">Boulangerie</option>
          <option vlaue="charcuterie">Charcuterie</option>
          <option value="cuisinier">Cuisinier</option>
          <option value="hcr">Hotellerie/Restauration</option>
          <option value="mecanique">Mécanique</option>
          <option value="patisserie" >Patisserie</option>
          <option value="vente">Vente</option>
          </select>
        </label>
        <div class="prez">
          <label> Présentation : 
            <textarea id="presentation" placeholder="Presente toi brièvement, ton âge, ton parcours scolaire, si tu es motorisé..." class="fdata" rows="8"></textarea>
          </label>
        </div>
        <my-input labelTxt="Téléphone : " inpId="telephone" type="tel" pattern="(^[0-9]{10}$)" inpPhr="0978541236" inpClass="fdata"></my-input>
        <my-input labelTxt="Adresse : " inpId="adresse" type="text" pattern="(^[\\w\\s]{1,90}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="Code Postal : " inpId="cp" type="number" pattern="(^[0-9]{4,5}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="Ville : " inpId="ville" type="text" pattern="(^[\\w\\s]{1,30}$)" inpClass="fdata"></my-input>
        <my-input labelTxt="E-mail : " inpId="email" type="text" pattern="@" inpPhr="moi@mail.fr" inpClass="fdata"></my-input>
        <p>Choisis un mot de passe,note le, il te le sera demandé pour effacer ta fiche. Il doit contenir 15 caractères au minimum, au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère special. L'espace est autorisé</p>
        <my-input labelTxt="Mot de passe : " inpId="mdp" type="text" pattern="(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\\w\\s]).{15,}$)" info="15 caractères au minimum, au moins une lettre majuscule, une lettre minuscule, un chiffre, un caractère special. L'espace est autorisé" inpClass="fdata"></my-input>
        <button id="exe" type="submit" class="send-form action-btn">Inscrit toi et trouves ton patron !</button>
        `
      )

    }
    const exe = dGEBId('exe');
    exe.onclick = getAllInputs;
    exe.disabled = true;

    function getAllInputs(e){
      e.preventDefault();
      const attValue  = document.getElementsByTagName('my-inscript-form'),
        forWhom = attValue[0].attributes[1].value,
        validated = gtEBCNa(document, 'errMsg');
      let fd = new FormData()
      let p = dGEBId(myForm.id);
      let allValues = gtEBCNa(p, 'fdata');
      try {
        let photo = dGEBId('photo');
        if (photo.files) {
          fd.append('photo', photo.files[0]);
        }
      } catch {
      }
      //cp
      let cpv = document.getElementById('cp').value;
      let departement;
      if (cpv[0] === "9") {
        departement = cpv[0]+cpv[1]+cpv[2]
      } else {
        departement = cpv[0]+cpv[1];
      }
      const region = corregdep[departement];
      
      for (let att of allValues) {
        fd.append(`${att.getAttribute('id')}` , att.value);
      }
      fd.append('departement', departement);
      fd.append('region', region);
      const myFd = JSON.stringify(fd);
      const initPost = { 
        method: 'POST',
        body: fd,
        mode: 'cors',
        cache: 'default' 
      }
      myPost(urlInscription, initPost)
      .then((resp)=>{
        setTimeout(()=>{
          history.pushState({page: 4},'Fiche Individuelle',`/ma-fiche/${forWhom}/${resp.fiche}/`)
          navigator();
        },
          3000
        )
        Swal.fire({
          icon: 'success',
          title: 'Bonjour '+resp.inscrit,
          text: `${resp.message}`
        });
      })
    }
  }
}

