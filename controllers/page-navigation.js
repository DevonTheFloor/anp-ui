import { insertPageInApp } from './mounting-page.js';
import { mapping } from '../navigator-mapping.js';
import { dQySrAl } from '../src/js/helpers/myDomHelper.js';
import { baseUrlApi } from '../src/js/plank.js';


export function navigator() {
  const url = new URL(window.location.href),
    path = url.pathname,
    splitor = path.split('/'),
    page = `/${splitor[1]}`,
    pa = mapping.find(p => p.uri === page),
    customMetas = dQySrAl('meta.custom-meta');
  for (let meta of customMetas) {
    meta.remove();
  }
  if (pa === undefined) {
    goToErrorPage();
  } else {
    insertPageInApp(pa.page);
    window.scroll(0, 0);
  }
}
export function activatedNavigator() {
  setTimeout(() => {
    navigator();
  }, 3)
}
export function navigatorSearchParams(...paramsName) {
  const path = window.location.pathname,
    splitor = path.split('/'),
    params = splitor.splice(2);
  if (paramsName.length != params.length || paramsName.length == 0 || params.length == 0) {
  } else {
    const hparams = Object.assign(...paramsName.map((k, i) => ({ [k]: params[i] })));
    return hparams;
  }
}
export function backRootPage() {
  history.pushState({ page: 0 }, 'Index', '/');
  navigator()
}
export function goToErrorPage() {
  history.pushState({ page: 4 }, 'Erreur', '/not-found');
  navigator()
}

export function paramsLogger() {
  const url = new URL(window.location),
    page = url.pathname,
    splitIt = page.split('/');
  let tablo = [];
  for (let tab of splitIt) {
    if (tab != '') {
      tablo.push(tab);
    }
  }
  return tablo;
}

export function getStatistique() {
  const params = paramsLogger(),
    fullUrl = baseUrlApi + '/apprenti/statistique/',
    long = params.length,
    fd = new FormData;
  if (long === 0) {
    fd.append('page', 'Accueil');
    fd.append('inscrit', 'NC');
  } else
    if (long === 1) {
      fd.append('page', params[0]);
      fd.append('inscrit', 'NC')
    } else
      if (long === 3) {
        fd.append('page', params[0]);
        fd.append('qui',params[1]);
        fd.append('inscrit', params[2]);
      } else
        if (long === 4) {
          fd.append('page', params[0]);
          fd.append('qui', params[1]);
          fd.append('quoi',params[2]);
          fd.append('ou',params[3])
        }
        else {
        }
  let init = {
    method: 'POST',
    body: fd
  }
  fetch(fullUrl, init)
}