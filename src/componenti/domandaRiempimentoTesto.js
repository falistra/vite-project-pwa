import './domandaRiempimentoTesto.css';
export const domandaRiempimentoTesto = (props, context) => {
  const { getState, setState } = context;
  return {
    hooks: {
      onConnect: (context) => {
        // Called when component connects to DOM
        console.log('Component connected');
      },
      onMount: async (context_) => {
        setState('risposteInserite', [])
        context.juris.enhance('.slot-RT', ({ element, getState, setState }) => {
          return {
            onClick: () => {
              const rispostaSelezionata = getState('rispostaSelezionata');
              if (rispostaSelezionata) {
                const risposteInserite = new Set(getState('risposteInserite') || []);
                risposteInserite.delete(element.innerText);

                element.innerText = rispostaSelezionata._;
                if (element.getAttribute('data-ordine') === rispostaSelezionata.ordine) {
                  element.classList.add('corretta');
                  element.classList.remove('errata');
                } else {
                  element.classList.add('errata');
                  element.classList.remove('corretta');
                }
                setState('rispostaInserita', {
                  _: rispostaSelezionata._,
                  ordine: rispostaSelezionata.ordine
                });
                if (!risposteInserite.has(rispostaSelezionata._))
                  risposteInserite.add(rispostaSelezionata._);
                setState('risposteInserite', [...risposteInserite]);

                setState('rispostaSelezionata', null);

              }
            }
          };
        });
      },
      onUnmount: (context) => {
        // Called before component is removed from DOM
        console.log('Component unmounted');
        setState('risposteInserite', [])
        setState('rispostaSelezionata', null);
      }
    },
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
              innerHTML: () => getState('domandaCorrente').domandariempimentotesto.testo.replace(/(\_+)(\d+)(\_+)/g, `<span data-ordine=$2 class="blank-underline slot-RT">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
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
                    button: {
                      className: () => {
                        const rispostaSelezionata = getState('rispostaSelezionata');
                        if (rispostaSelezionata) {
                          if (rispostaSelezionata._ === scelta._) {
                            return 'scelta selezionata';

                          }
                        }
                        return 'scelta'
                      },
                      disabled: () => {
                        const risposteInserite = getState('risposteInserite') || [];
                        const r = risposteInserite.find(risposta => risposta === scelta._);
                        return r ? true : false;
                      },
                      text: scelta._,
                      onClick: () => {
                        // document.querySelector(`.slot-RT[data-ordine="${scelta.$.ordine}"]`).innerText = scelta._;
                        setState('rispostaSelezionata', {
                          _: scelta._,
                          ordine: scelta.$.ordine
                        });
                      }
                    }
                  })
                  )
                ]
              }
            }
          }
        ]
      }
    })
  }
};

export const enhanceRT = (app) => {

  app.enhance('.slot-RT', ({ element, getState, setState }) => {
    return {
      onClick: () => {
        const rispostaSelezionata = getState('rispostaSelezionata');
        if (rispostaSelezionata) {
          const risposteInserite = new Set(getState('risposteInserite') || []);
          risposteInserite.delete(element.innerText);

          element.innerText = rispostaSelezionata._;
          if (element.getAttribute('data-ordine') === rispostaSelezionata.ordine) {
            element.classList.add('corretta');
            element.classList.remove('errata');
          } else {
            element.classList.add('errata');
            element.classList.remove('corretta');
          }
          setState('rispostaInserita', {
            _: rispostaSelezionata._,
            ordine: rispostaSelezionata.ordine
          });
          if (!risposteInserite.has(rispostaSelezionata._))
            risposteInserite.add(rispostaSelezionata._);
          setState('risposteInserite', [...risposteInserite]);

          setState('rispostaSelezionata', null);

        }
      }
    };
  });
}

