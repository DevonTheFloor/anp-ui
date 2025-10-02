import { dCrEl } from '../../js/helpers/myDomHelper.js';
import style from './qui-nav.scss';
import HistoryLink from '../../../components/history-link.js';


export default class QuiJeSuisNav extends HTMLElement {
  constructor() {
    super();
    //const shadow = this.attachShadow({mode: 'open'});
        //<nav></nav>
    const quiNav = dCrEl('nav');
    quiNav.id = 'qui-nav' ;
    this.appendChild(quiNav);
        //<ol></ol>
      const ol = dCrEl('ol');
      ol.setAttribute('class', 'listol');
      quiNav.appendChild(ol);
        //<li></li>
        const li1 = dCrEl('li');
        ol.appendChild(li1);
          //<a></a>1
          const a1 = dCrEl('history-link'),
            page1 = this.getAttribute('page1'),
            link1 = this.getAttribute('link1');
          a1.setAttribute('class','li-nav');
          a1.setAttribute('text', page1 );
          a1.setAttribute('to-uri', link1)
          li1.appendChild(a1);
  
          //<li>2</li>
          const li2 = dCrEl('li');
          ol.appendChild(li2);
            //<a></a>1
            const a2 = dCrEl('history-link'),
              page2 = this.getAttribute('page2'),
              link2 = this.getAttribute('link2');
          a2.setAttribute('class','li-nav');
          a2.setAttribute('text', page2 );
          a2.setAttribute('to-uri', link2);
          li2.appendChild(a2);
  
  }
}