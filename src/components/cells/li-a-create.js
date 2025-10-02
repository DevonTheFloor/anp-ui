import { dCrEl } from "../../js/helpers/myDomHelper";

export default class LiACreate extends HTMLElement{
  constructor() {
    super();
    //<li></li>
    const li = dCrEl('li');
    this.appendChild(li);
    //ol.appendChild(li1);
    //<a></a>1
    const a = dCrEl('a')
    let url = this.getAttribute('url')
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    let site = this.getAttribute('site');
    a.textContent = site;
    li.appendChild(a);
  }
    
}