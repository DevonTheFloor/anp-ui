import { dCrEl } from '../../js/helpers/myDomHelper.js';
import styles from './my-header.scss';

// Create a class for the element
export default class MyHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
    // Create a shadow root
    //const shadow = this.attachShadow({mode: 'open'});
    const myheader = dCrEl('header');
    myheader.setAttribute('class','parallaxe');
    this.appendChild(myheader);
      //creat <h1></h1>
      const h1 = dCrEl('h1');
      myheader.id ="header-id"
      myheader.appendChild(h1);
      let h1title= this.getAttribute('h1title');
      h1.textContent = h1title;      
      myheader.appendChild(h1);
      const h2 = dCrEl('h2');
      let h2title = this.getAttribute('h2title');
      h2.textContent = h2title;
      myheader.appendChild(h2);
      const img = dCrEl('img');
      /*let source = this.getAttribute('source');
      img.setAttribute('src', source);*/
      img.id ="hero";
      myheader.appendChild(img);
    
    }
  }

