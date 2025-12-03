import './domandaSceltaSingola.css';
export const domandaSceltaSingola = (props, context) => {
  const { getState, setState } = context;
  return {
    render: () => ({
      div: {
        className: 'domanda-scelta-singola',
        children: [
          {
            div: {
              className: 'prologo',
              innerHTML: () => getState('domandaCorrente').domandasceltasingola.prologo
            }
          },
          {
            div: {
              className: 'testo',
              innerHTML: () => getState('domandaCorrente').domandasceltasingola.testo.replace(/_+/g, '<span id="risposta" class="blank-underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
            }
          },
          {
            div: {
              className: 'scelte',
              children: () => { 
                const domanda = getState('domandaCorrente');
                return [
                ...domanda.domandasceltasingola.risposte.risposta.map((scelta, index) =>
                ({
                  button: {
                    className: () => {
                      const rispostaSelezionata = getState('rispostaSelezionata');
                      if (rispostaSelezionata) {
                        if (rispostaSelezionata._ === scelta._) {
                          return 'scelta' + (rispostaSelezionata.corretta ? ' corretta' : ' errata');
                        } 
                      }
                      return 'scelta'
                      },
                    text: scelta._,
                    onClick: () => {
                      document.querySelector('#risposta').innerText = scelta._;
                      setState('rispostaSelezionata', { 
                        _: scelta._,
                        corretta: scelta.$.corretta === '1' ? true : false
                        });
                    }
                  }
                })
                )
              ] }
            }
          }
        ]
      }
    })
  }
};
