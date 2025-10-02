import { TagInComponent } from "../../../controllers/TagInComponent";
import './encart-pub.scss';

export default class EncartPub extends HTMLElement {
  constructor () {
    super();
    const div = new TagInComponent('div',null,'pub-encart',this, this),
      imag = new TagInComponent('div',null,'image',div,this),
      site = this.getAttribute('site'),
      imgId = this.getAttribute('imgId');
    imag.id = imgId;
    div.addEventListener('click', ()=> {
      window.open(site);
    })
  }
}
