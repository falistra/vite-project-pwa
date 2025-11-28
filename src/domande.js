import xml2js from 'xml2js';

const domandeXML = [
    `<domandasceltasingola>
  <prologo>&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Scegli la forma per completare la frase.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;</prologo>
  <testo>The _____&amp;nbsp;date is indicated on each individual packet.</testo>
  <risposte>
    <risposta corretta="0">commitment</risposta>
    <risposta corretta="0">breakthrough</risposta>
    <risposta corretta="0">retail</risposta>
    <risposta corretta="1">expiry</risposta>
  </risposte>
</domandasceltasingola>
    `,
    `<domandasceltasingola>
  <prologo>&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;Scegli la forma per completare la frase.&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;</prologo>
  <testo>The _____&amp;nbsp;date is indicated on each individual packet.</testo>
  <risposte>
    <risposta corretta="0">commitment</risposta>
    <risposta corretta="0">breakthrough</risposta>
    <risposta corretta="0">retail</risposta>
    <risposta corretta="1">expiry</risposta>
  </risposte>
</domandasceltasingola>
    `,
    `<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.</prologo>
  <testo>Staff are _____ that there are no coffee machines in the offices.</testo>
  <risposte>
    <risposta corretta="1">complaining </risposta>
    <risposta corretta="0">waiting on hold</risposta>
    <risposta corretta="0">earning</risposta>
    <risposta corretta="0">resigning</risposta>
  </risposte>
</domandasceltasingola>
    `,
    `<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.</prologo>
  <testo>Our professional team can _____ you on making new installations.</testo>
  <risposte>
    <risposta corretta="1">advise</risposta>
    <risposta corretta="0">tailor</risposta>
    <risposta corretta="0">charge</risposta>
    <risposta corretta="0">qualify</risposta>
  </risposte>
</domandasceltasingola>
`,
`<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.&lt;div&gt;&lt;br&gt;&lt;/div&gt;</prologo>
  <testo>Our sales _____ for the Christmas period predicts an increase in sales of 15%.</testo>
  <risposte>
    <risposta corretta="0">issue</risposta>
    <risposta corretta="1">forecast</risposta>
    <risposta corretta="0">delivery</risposta>
    <risposta corretta="0">attitude</risposta>
  </risposte>
</domandasceltasingola> 
` 
]

const parser = new xml2js.Parser({ explicitArray: false, trim: true});

export const getDomanda = async () => {
    const domanda = domandeXML[Math.floor(Math.random() * domandeXML.length)];
    return new Promise((resolve, reject) => {
        parser.parseString(domanda, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result.domandasceltasingola);
            }
        });
    });
}

