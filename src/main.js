import './main.css'
import { initPWA } from './pwa.js'
import { Juris } from 'juris'

import { getDomanda, numeroDomande } from './domande.js';
const domanda = await getDomanda(0); // get the first question at start-up
import { domandeSceltaSingola } from './componenti/domandaSceltaSingola.js';

const juris = new Juris({
  states: {
    rispostaSelezionata: null,
    domandaCorrente: domanda,
    indiceDomanda: null
  },
  services: {
    getDomanda() {
      const indiceDomanda = juris.getState('indiceDomanda',0) ;
      juris.setState('indiceDomanda', (indiceDomanda + 1) % numeroDomande);
      return getDomanda(juris.getState('indiceDomanda'));
    } 
  },

  components: {
    domandeSceltaSingola,
    altraDomanda: (props, { setState, services }) => ({
      button: {
        className: 'altra-domanda',
        text: 'Altra domanda',
        onClick: async () => {
          const nuovaDomanda = await services.getDomanda();
          setState('rispostaSelezionata', null);
          setState('domandaCorrente', nuovaDomanda);
        }
      }
    })
  },
  layout: {
    div: {
      children: () => [{
        domandeSceltaSingola: { domanda }
      }, {
        altraDomanda: {}
      }]
    }
  }
});
juris.render('#app');


const app = document.querySelector('#app')
initPWA(app)
