import { backRootPage } from "../../controllers/page-navigation";
import { dCrEl } from "../js/helpers/myDomHelper";
import { baseUrlApi } from "../js/plank";

export default class SupprFicheBtn extends HTMLElement {
  constructor() {
    super();

    //supp
    this.id = this.getAttribute('suppr-fiche-btn');
    const button = dCrEl('button'),
      idFiche = this.getAttribute('id-fiche'),
      how = this.getAttribute('how');
    button.id = "supprimer";
    button.setAttribute('class','action-btn');
    button.textContent = "Supprimer ma fiche";
    this.appendChild(button);
    let deleteUrl = '';
    if (how === "patron") {
      deleteUrl = `${baseUrlApi}/apprenti/patron/deleteone`;
    } else if (how === "apprenti") {
      deleteUrl = `${baseUrlApi}/apprenti/apprenti/deleteone`;
    } else {
      deleteUrl = `${baseUrlApi}/apprenti/errorlink`;
    }
    //methods
    button.addEventListener('click', function(){
      
      Swal.fire({
        title: "Entrez le mot de passe qui a servit à la création de cette fiche, merci.",
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Effacer',
        showLoaderOnConfirm: true,
        footer: `<a href="/reinitialisation-mot-de-passe/${how}/${idFiche}">Mot de passe oublié ?</a>`,
        preConfirm: (mdp) => {

          return fetch(`${deleteUrl}/${idFiche}/${mdp}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `désolé, il y a eu un problème`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value.wait) {
            
            Swal.fire({
              title: `${result.value.message}`
            })
          } else {
            setTimeout(()=>{
              backRootPage()
          },2500);
          Swal.fire({
            title: `${result.value.message}`
          })
          }
        }
      })
    });
  }
}