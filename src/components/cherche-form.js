import { dCrEl, gtEBTgNa, isAdHl } from "../js/helpers/myDomHelper";
import { countingInscrits } from "../js/modules/query-methods";
import { baseUrlApi } from "../js/plank";
export default class ChercheForm extends HTMLElement {


  constructor (qui) {
    super();

    const myForm = dCrEl('form');
    myForm.id = "search-form";
    qui = myForm.getAttribute('qui');
    this.appendChild(myForm);
    // select metier
    const label0 = dCrEl('label');  
    label0.textContent = 'Branche : ';
    myForm.appendChild(label0);
    const select0 = dCrEl('select');
    select0.id = 'branche';
    select0.setAttribute('class', 'fdata');
    label0.appendChild(select0);
    isAdHl(select0, 'afterbegin',this.metierCategorie());
    label0.appendChild(select0);
    
    //select ville
    const label = dCrEl('label');
    label.textContent = 'Code Postal : ';
    label.setAttribute('class','localisation');
    myForm.appendChild(label);
    const input = dCrEl('input');
    input.id = "cp";
    input.setAttribute('type','number');
    input.setAttribute('min','0');
    input.setAttribute('max','97999');
    input.setAttribute('class', 'fdata');
    input.placeholder = "Code postal de la ville";
    label.appendChild(input);
    //br
    const br = dCrEl('br');
    myForm.appendChild(br);
    //button send
    const button = dCrEl('button');
    button.id = "search-btn";
    button.type = "send";
    button.setAttribute('class','action-btn');
    button.textContent = "Chercher";
    myForm.appendChild(button);
   
    button.addEventListener('click', function(e){

      e.preventDefault();
      if (select0 === '---' || (input.value.length < 5 || input.value.length > 5 )) {
        problemWithForm();
      } else
       {
        const attQui = gtEBTgNa(document, 'cherche-form');
        const qui = attQui[0].attributes[0].value;
        let searchUrl ='';
        if (qui === "patron") {
          searchUrl = `${baseUrlApi}/apprenti/patron/precount-patrons`;
        } else if (qui === "apprenti"){
          searchUrl =`${baseUrlApi}/apprenti/apprenti/precount-apprentis`;
        } else {
          searchUrl =`${baseUrlApi}/apprenti/errorlink`;
        }
        countingInscrits(searchUrl,qui);
      }
      
    })
    function problemWithForm() {
      Swal.fire({
        icon: 'error',
        title: 'Oupss...;',
        text: 'Le formulaire est mal renseigné.',
      })
    }
  }
  
  metierCategorie() {
    return `<option>---</option>
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
`
  }
}