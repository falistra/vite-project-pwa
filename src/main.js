import './main.css'
import { initPWA } from './pwa.js'
import { DOMEnhancer } from 'juris/juris-enhance';
import { Juris } from 'juris/juris';

import { getDomanda, numeroDomande } from './domande.js';
const domanda = await getDomanda(0); // get the first question at start-up
import { domandaSceltaSingola } from './componenti/domandaSceltaSingola.js';
import { domandaRiempimentoTesto } from './componenti/domandaRiempimentoTesto.js';


import xml2js from 'xml2js';
const juris = new Juris({
 features : { enhance : DOMEnhancer },
  states: {
    rispostaSelezionata: null,
    domandaCorrente: domanda,
    indiceDomanda: 0
  },
  services: {
    getDomanda() {
      const indiceDomanda = juris.getState('indiceDomanda', 0);
      juris.setState('indiceDomanda', (indiceDomanda + 1) % numeroDomande);
      return getDomanda(juris.getState('indiceDomanda'));
    }
  },

  components: {
    domandaSceltaSingola,
    domandaRiempimentoTesto,
    Domanda: (props, { getState }) => {
      return {
        render: () => {
          const domandaCorrente = getState('domandaCorrente');
          if ('domandasceltasingola' in domandaCorrente) {
            return {
              domandaSceltaSingola: {}
            }
          }
          else if ('domandariempimentotesto' in domandaCorrente) {
            return {
              domandaRiempimentoTesto: {}
            }
          }
          else {
            return {
              div: {
                text: 'Tipo di domanda non supportato.'
              }
            }
          }
        }
      }
    },

    altraDomanda: (props, { setState, services }) => ({
      button: {
        className: 'altra-domanda',
        text: 'Altra domanda',
        onClick: async () => {
          const nuovaDomanda = await services.getDomanda();
          setState('domandaCorrente', nuovaDomanda);
        }
      }
    })
  },
  layout: {
    div: {
      children: () => [{
        Domanda: {}
      }, {
        altraDomanda: {}
      }]
    }
  }
});
juris.render('#app');


const app = document.querySelector('#app')
initPWA(app)