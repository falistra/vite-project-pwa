// import './style.css'
import { initPWA } from './pwa.js'
import { Juris } from 'juris'

import { getDomanda } from './domande.js';
const domanda = await getDomanda();
console.log(domanda);
import { domandeSceltaSingola } from './componenti/domandaSceltaSingola.js';

const juris = new Juris({
  components: {
    domandeSceltaSingola
  },
  layout: { domandeSceltaSingola: { domanda} }
});
juris.render('#app');


const app = document.querySelector('#app')
initPWA(app)
