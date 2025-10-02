import { dCrEl } from "../../js/helpers/myDomHelper";
import HistoryLink from "../../../components/history-link";
import style from './my-footer.scss';


export default class MyFooter extends HTMLElement {
  constructor() {
    super();
    const links = [
      { site: "ArtTattoo28", url: "https://www.instagram.com/artattoo28/?hl=fr", target: "_blank"},
      { site: "6x6 SoNo", url: "http://66sono.free.fr", target: "_blank" },
      { site: "Mon Activité Web", url: "https://monactiviteweb.fr", target: "_blank" },
      { site: "Action Bike", url: "https://www.instagram.com/actionbike28/?hl=fr", target: "_blank" }
    ]
    const intra = [
      { site: "CGV", url: "/cgv" },
      { site: "Mentions Légales", url: "/mentions-legales" },
      { site: "Confidentialité", url: "/confidentialite" }
    ]
    const footer = dCrEl('footer');
    this.appendChild(footer);

    const nav1 = dCrEl('nav');
    footer.appendChild(nav1);

    const p = dCrEl('p');
    let texte = this.getAttribute('texte');
    p.textContent = texte;
    nav1.appendChild(p);

    const p2 = dCrEl('p');
    let texte2 = this.getAttribute('texte2');
    p2.textContent = texte2;
    nav1.appendChild(p2);


    const ol1 = dCrEl('ol');
    p.appendChild(ol1);
    links.forEach(link => {
      this.liACreatefn(ol1, link.site, link.url, link.target)
    })

    const ol2 = dCrEl('ol');
    p2.appendChild(ol2);
    intra.forEach(link => {
      this.liACreatefnIntra(ol2, link.site, link.url)
    })
  }
  liACreatefnIntra(olMount, site, url) {
    const li = dCrEl('li');
    olMount.appendChild(li);
    //<a></a>1
    const a = dCrEl('history-link')
    a.setAttribute('to-uri', url);
    a.setAttribute('text', site);
    li.appendChild(a);
  }
  liACreatefn(olMount, site, url, target) {
    const li = dCrEl('li');
    olMount.appendChild(li);
    //<a></a>1
    const a = dCrEl('a')
    a.setAttribute('href', url);
    a.setAttribute('target', target)
    a.textContent = site;
    li.appendChild(a);
  }
}