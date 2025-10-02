import { dGEBId, isAdHl } from '../../js/helpers/myDomHelper.js'
import * as txt from '../../strings/indexText.js';
import style from './article-presentation.scss';
import illu1Url from '../../assets/images/chaire-sx.jpg';
import illu2Url from '../../assets/images/cuisto-sx.jpg';


export default class ArticlePresentation extends HTMLElement {
  constructor() {
    super();
    isAdHl(this,
      'afterbegin',
      `<article>
        ${txt.presentation}
        <div class="illustration">
          <div class="build">
            <p class="illustration__text">Je cherche un patron avec le formulaire "Trouver un patron"</p>
          </div>
          <div class="build">
            <img id="chpatron"
          </div>
        </div>
       </article>
       <article>
        ${txt.fonctionnement}
       </article>
       <div class="illustration">
          <div class="build">
            <p class="illustration__text">Je crée ma fiche employeur pour que les apprentis me trouvent.</p>
          </div>
          <div class="build">
            <img id="chapprent">
          </div>
        </div>`
    )
    const illu1 = dGEBId('chpatron');
    illu1.src = illu1Url ;
    const illu2 = dGEBId('chapprent');
    illu2.src = illu2Url;
  }
}