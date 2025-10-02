import * as departement from './liste-departement.js';
import { dGEBId, isAdHl } from '../helpers/myDomHelper.js';

/**
 * Retourne le html des options du selecteur de région.
 * @returns {HTMLObjectElement} 
 */
 export function creatRegionOption () {
  return `<option>---</option>
          <option value="Auvergne-Rhône-Alpes">Auvergne-Rhône-Alpes</option>
          <option value="Bourgogne-Franche-Comté">Bourgogne-Franche-Comté</option>
          <option value="Bretagne">Bretagne</option>
          <option value="Centre-Val de Loire">Centre-Val de Loire</option>
          <option value="Corse">Corse</option>
          <option value="Grand Est">Grand Est</option>
          <option value="Hauts-de-France">Hauts-de-France</option>
          <option value="Ile-de-France">Ile-de-France</option>
          <option value="Normandie">Normandie</option>
          <option value="Nouvelle-Aquitaine">Nouvelle-Aquitaine</option>
          <option value="Occitanie">Occitanie</option>
          <option value="Pays de la Loire">Pays de la Loire</option>
          <option value="PACA">Provence-Alpes-Côte d’Azur</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Martinique">Martinique</option>
          <option value="Guyane">Guyane</option>
          <option value="La Réunion">La Réunion</option>
          <option value="Mayotte">Mayotte</option>`         
  };

/**
 * Fonction de montage de la liste des départements dans la région.
 */
export function mountDepartementSelect () {
    const select = dGEBId('select');
    const deptList = select.value;
    const mount = dGEBId('mountDeptList');
    switch(deptList) {
      case 'Auvergne-Rhône-Alpes':
        mount.innerHTML = '';
        isAdHl(mount,'afterbegin', departement.auvergneRhoneAlpes());
      break;
      case 'Bourgogne-Franche-Comté':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.bourgogneFrancheComte ());
      break;
      case 'Bretagne':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.bretagne ());
      break;
      case 'Centre-Val de Loire':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.centreValdeLoire ());
      break;
      case 'Corse':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.corse ());
      break;
      case 'Grand Est':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.grandEst ());
      break;
      case 'Hauts-de-France':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.hautsDeFrance ());
      break;
      case 'Ile-de-France':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.ileDeFrance ());
      break;
      case 'Normandie':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.normandie ());
      break;
      case 'Nouvelle-Aquitaine':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.nouvelleAquitaine ());
      break;
      case 'Occitanie':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.occitanie ());
      break;
      case 'Pays de la Loire':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.paysDeLaLoire ());
      break;
      case 'PACA':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.paca ());
      break;
      case 'Guadeloupe':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.guadeloupe());
      break;
      case 'Martinique':
        mount.innerHTML = ''
        isAdHl(mount, 'afterbegin', departement.martinique());
      break;
      case 'Guyane':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.guyane());
      break;
      case 'La Réunion':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.laReunion());
      break;
      case 'Mayotte':
        mount.innerHTML = '';
        isAdHl(mount, 'afterbegin', departement.mayotte());
      break;
      default:
      console.error('Out of Dept');
      break;
    }
  }
