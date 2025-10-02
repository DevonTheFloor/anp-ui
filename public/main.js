import '../src/sass/main.scss';
import registrare from '../controllers/component-loader'
import { activatedNavigator, navigator } from '../controllers/page-navigation.js'

registrare()

navigator();

window.onpopstate = () => {
  activatedNavigator();
}