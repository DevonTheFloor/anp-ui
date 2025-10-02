import { dGEBId, gtEBCNa, gtEBTgNa, isAdHl } from '../helpers/myDomHelper';
import { myPost } from '../helpers/myFetchHelper';
import { baseUrlApi } from '../plank';
import { navigator } from '../../../controllers/page-navigation';
const baseUrl = 'http://localhost:3000';

export function createInit(rootId) {
  const root = dGEBId(rootId);
  const datas = gtEBCNa(root, 'fdata');
  let fd = new FormData();
  for (let data of datas) {
    fd.append(`${data.id}` , data.value);
  }
  const fdInit = { 
    method: 'POST',
    body: fd,
    mode: 'cors',
    cache: 'default' 
  }
  return fdInit;
}

function notFoundRetryDepartement(branche, departement, forWhom){
  let fd = new FormData();
  fd.append('branche', branche);
  fd.append('departement', departement);
  const chercheForm = gtEBTgNa(document, "cherche-form");
  forWhom = chercheForm[0].attributes[0].value;
  let urlSearch = '';
  if (forWhom === "patron") {
    urlSearch =`${baseUrlApi}/apprenti/patron/precount-patrons-retry/`;
  } else if ( forWhom === "apprenti"){
    urlSearch=`${baseUrlApi}/apprenti/apprenti/precount-apprentis-retry/`;
  } else {
    urlSearch === `${baseUrlApi}/apprenti/errorlink`;
  }
  myPost(urlSearch,{
    method: 'POST',
    body: fd,
    mode: 'cors',
    cache: 'default' 
  })
  .then((resp) => {
    if (resp.result === 0 ) {
      Swal.fire({
        icon: 'error',
        title: 'Désolé',
        text: "Il n'y a pas de résultats pour votre recherche acctuellement. N'hésitez pas à revenir plus tard",
      })
      
    }else {
      createBtnSeeResult(
        resp.result, 
        forWhom, 
        resp.branche, 
        resp.localisation);
    }
  })
}
export function patronsRenderTemplate (data) {
  return `
    <ol class="res-render">
      <li>${data.enseigne}</li>
      <li>${data.adresse}</li>
      <li>${data.ville}</li>
      <li class="btn-fiche">
        <history-link
          class="cf-fiche"
          to-uri="/ma-fiche/patron/${data._id}/"
          text="Voir La Fiche"
        ></history-link> 
      </li>
    </ol>`
}
export function apprentisRenderTemplate(data) {
  return `
    <ol class="res-render">
      <li>${data.nom}</li>
      <li>${data.adresse}</li>
      <li>${data.ville}</li>
      <li class="btn-fiche">
        <history-link
          class="cf-fiche"
          to-uri="/ma-fiche/apprenti/${data._id}/"
          text="Voir La Fiche"
        ></history-link>
      </li>
    </ol>`
}
function renderSearchResp(datas, forWhom) {
  const mount = dGEBId("search-result-view");
  if (forWhom ==="patron") {
    datas.forEach(data => {
      isAdHl(mount,
        'afterbegin',
        patronsRenderTemplate(data)
        )
    });
  } else {
    datas.forEach(data => {
      isAdHl(mount,
        'afterbegin',
        apprentisRenderTemplate(data)
        )
    });
  }
}
function swalInfoRetryDepartement(branche, departement) {
  Swal.fire({
    title: '<u>Désolé</u><br>',
    icon: 'info',
    html:
      `il n\'y a pas de resultat pour votre recherche.<br>Voulez essayer dans tout le département ${departement} ?`,
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Oui, svp!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>Non, merci.',
    cancelButtonAriaLabel: 'Thumbs down'
  })
  .then((choice) =>{
    if(choice.isConfirmed) {
      notFoundRetryDepartement(branche, departement)
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Désolé',
        text: "N'hésitez pas à revenir plus tard sur apprentis-et-patrons.fr",
      })
    }
  })
}
export function countingInscrits(searchUrl, whom) {
  const init = createInit('search-form');
  myPost(searchUrl, init)
  .then((resp)=>{
    if (resp.result === 0) {
      swalInfoRetryDepartement(resp.branche, resp.departement);
    } else {
      createBtnSeeResult(resp.result, whom, resp.branche, resp.localisation);
    }
  })
}
export function searchInscrits(searchUrl, rootId) {
  const init = createInit(rootId);
  myPost(searchUrl, init)
  .then((resp)=>{
    if (resp.result === 0) {
      swalInfoRetryDepartement(resp.branche, resp.departement);
    } else {
      renderSearchResp(resp);
    }
  })

}
function createBtnSeeResult(count, whom, branche, localisation) {
  let esse = count > 1 ? 's':'';
  let article = count > 1 ? 'les' : '';
  let where = !localisation.cp ? localisation.dep : localisation.cp;
  let direction = where.length === 2 ? 'dans le' : 'pour';
  const mount = document.getElementById( 'search-result-view'),
    btn = document.createElement('button');
    btn.setAttribute('class', 'action-btn');
  btn.innerHTML = `Voir ${article} <strong>${count}</strong> resultat${esse} ${direction} ${where}`;
  btn.addEventListener('click', ()=> {
    history.pushState({page: 5},'Recherche Patron',`/resultats-de-recherche/${whom}/${branche}/${where}`);
    navigator()
  })
  mount.innerHTML = '';
  mount.appendChild(btn);
}