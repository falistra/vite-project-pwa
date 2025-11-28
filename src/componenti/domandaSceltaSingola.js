import './domandaSceltaSingola.css';
export const domandeSceltaSingola = (props, context) => {
  const { getState, setState } = context;   
  const domanda = props.domanda;
  return {  
    render: () => ({
      div: {
        className: 'domanda-scelta-singola',    
        children: [
          {
            div: {  
                className: 'prologo',
                innerHTML: domanda.prologo
            }
          },
        {
            div: {  
                className: 'testo',
                innerHTML: domanda.testo.replace(/_+/g, '<span id="risposta" class="blank-underline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
            }
          },
        {
            div: {
                className: 'scelte', 
                children : [
                  ...domanda.risposte.risposta.map((scelta, index) => 
                    ({  
                      button: {
                        className: 'scelta',
                        text:  scelta._,
                        onClick: () =>  {document.querySelector('#risposta').innerText = scelta._;} 
                      }
                    }) 
                  )
                ]   
            }
          }       
        ]
        }
  })
  }
}
