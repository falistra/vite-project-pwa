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
        const idDomanda = getState('indiceDomanda');
        context.juris.enhance(`#testo-domanda-RT-${idDomanda}`, ({ element, getState }) => {
          element.innerHTML = getState('domandaCorrente').domandariempimentotesto.testo.replace(/(\_+)(\d+)(\_+)/g, `<span data-id=${getState('indiceDomanda')} data-ordine=$2 class="blank-underline slot-RT">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
        });
        context.juris.enhance(`.slot-RT[data-id="${idDomanda}"]`, ({ element, getState, setState }) => {
          // element.innerHTML = getState('domandaCorrente').domandariempimentotesto.testo.replace(/(\_+)(\d+)(\_+)/g, `<span data-id=${getState('indiceDomanda')} data-ordine=$2 class="blank-underline slot-RT">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
          return {
            onClick: () => {
              const rispostaSelezionata = getState('rispostaSelezionataRT');
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

                // setState('rispostaSelezionataRT', null);

              }
            }
          };
        });
      },
      onUnmount: (context) => {
        // Called before component is removed from DOM
        console.log('Component unmounted');
        setState('risposteInserite', [])
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
              id: `testo-domanda-RT-${getState('indiceDomanda')}`,
              className: 'testo',
              // innerHTML: () => getState('domandaCorrente').domandariempimentotesto.testo.replace(/(\_+)(\d+)(\_+)/g, `<span data-id=${getState('indiceDomanda')} data-ordine=$2 class="blank-underline slot-RT">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>`)
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
                        const rispostaSelezionata = getState('rispostaSelezionataRT');
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
                        console.log('Scelta cliccata:', scelta._);
                        setState('rispostaSelezionataRT', {
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
