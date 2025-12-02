import './domandaRiempimentoTesto.css';
//import { sanitizeHTML } from '../common.js';
export const domandaRiempimentoTesto = (props, context) => {
  const { getState, setState } = context;
  const indiceDomanda = getState('indiceDomanda', 0);
  return {
    render: () => ({
      div: {
        className: 'domanda-riempimento-testo',
        children: [
          {
            div: {
              className: 'prologo',
              innerHTML: () => getState('domandaCorrente').domandariempimentotesto.prologo
            }
          },
          {
            div: {
              className: 'testo',
              innerHTML: () => getState('domandaCorrente').domandariempimentotesto.testo.replace(/(\_+)(\d+)(\_+)/g, `<span id="risposta" class="blank-underline slot-RT">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
            }
          },
          {
            div: {
              className: 'scelte',
              children: () => { 
                const domanda = getState('domandaCorrente');
                return [
                ...domanda.domandariempimentotesto.risposte.risposta.map((scelta, index) =>
                ({
                  div: {
                    className: () => 'scelta',
                    text: scelta._,
                    draggable: true,
                    onDragStart: (event) => {
                      event.dataTransfer.setData('text/plain', scelta._);
                  }
                }})
                )
              ] }
            }
          }
        ]
      }
    })
  }
};

export const enhanceRT = (app) => {
  const spans = document.querySelectorAll('span.slot-RT')
  spans.forEach(span => {
    span.addEventListener('dragenter', (event) => {
      event.preventDefault();
    });

    span.addEventListener('dragleave', (event) => {
      event.preventDefault();   
    });       
    span.addEventListener('dragover', (event) => {
      event.preventDefault();   
    });   
    span.addEventListener('drop', (event) => {
      event.preventDefault(); 
      const data = event.dataTransfer.getData('text/plain');    
      span.innerText = data;
      // const domanda = app.getState('domandaCorrente');
      // const rispostaSelezionata = domanda.domandariempimentotesto.risposte.risposta.find(r => r._ === data);
      // app.setState('rispostaSelezionata', { 
      //   _: data,
      //   corretta: rispostaSelezionata.$.ordine  === '1' ? true : false
      //   });
    });
  });

  // app.enhance('.slot-RT', ({ element, getState, setState }) => {
  //   return {
  //     ondragenter: (event) => {
  //       event.preventDefault();
  //     }, 
  //     ondragleave: (event) => {
  //       event.preventDefault();   
  //     },
  //     ondragover: (event) => {
  //       event.preventDefault();   
  //     }, 
  //     ondrop: (event) => {
  //       event.preventDefault(); 
  //       const data = event.dataTransfer.getData('text/plain');  
  //       element.innerText = data;
  //       const domanda = getState('domandaCorrente');
  //       const rispostaSelezionata = domanda.domandariempimentotesto.risposte.risposta.find(r => r._ === data);
  //       setState('rispostaSelezionata', { 
  //         _: data,
  //         corretta: rispostaSelezionata.$.ordine  === '1' ? true : false
  //         });
  //     }   
  //   };
  // }); 
}
    
