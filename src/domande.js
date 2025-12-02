import xml2js from 'xml2js';

const domandeXML = [
  `<domandariempimentotesto>
  <prologo>Drag and drop the correct option into each gap.</prologo>
  <testo>Traditional working men's clubs are ____1_____ across their South Wales Valleys stronghold. The private social clubs were first created in the 19th century ____2_____ industrial communities, providing recreation and education for working class men and their families.&lt;br&gt;&lt;br&gt;Clubs have commonly been affiliated with a ____3_____ industry, like the miners' institute, with the armed forces, like the Royal British Legion, or with political parties. But in England and Wales, the number of club certificates ñ licences granted by local authorities ñ has dropped 15% since 2008.&lt;br&gt;&lt;br&gt;Blaenau Gwent still had 43 members clubs holding club premises certificates in March 2016 - one of the highest rates ____4_____ head in England and Wales.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;Adapted from The Western Mail, 10 November 2016</testo>
  <risposte>
    <risposta ordine="">inside</risposta>
    <risposta ordine="">pro</risposta>
    <risposta ordine="">special</risposta>
    <risposta ordine="1">declining</risposta>
    <risposta ordine="4">per</risposta>
    <risposta ordine="2">within</risposta>
    <risposta ordine="">reducing</risposta>
    <risposta ordine="3">particular</risposta>
  </risposte>
</domandariempimentotesto>`,
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
`,
`<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.&lt;div&gt;&lt;br&gt;&lt;/div&gt;&lt;div&gt;&lt;br&gt;&lt;/div&gt;</prologo>
  <testo>In case of problems please contact your local _____ .</testo>
  <risposte>
    <risposta corretta="0">graduate</risposta>
    <risposta corretta="0">reward</risposta>
    <risposta corretta="0">environment</risposta>
    <risposta corretta="1">branch</risposta>
  </risposte>
</domandasceltasingola>`,
`<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.</prologo>
  <testo>Training our _____ is fundamental if we want to improve staff skills.</testo>
  <risposte>
    <risposta corretta="1">workforce</risposta>
    <risposta corretta="0">wholesaler</risposta>
    <risposta corretta="0">vacancy</risposta>
    <risposta corretta="0">joint venture</risposta>
  </risposte>
</domandasceltasingola>`,
`<domandasceltasingola>
  <prologo>Scegli la forma per completare la frase.&lt;div&gt;&lt;br&gt;&lt;/div&gt;</prologo>
  <testo>Students must do a 3-month work _____ as part of the course programme.</testo>
  <risposte>
    <risposta corretta="1">placement</risposta>
    <risposta corretta="0">bargain</risposta>
    <risposta corretta="0">outline</risposta>
    <risposta corretta="0">forecast</risposta>
  </risposte>
</domandasceltasingola>`
]

const domandeRT = [
  `
  <domandariempimentotesto>
  <prologo>Drag and drop the correct option into each gap.</prologo>
  <testo>Traditional working men's clubs are ____1_____ across their South Wales Valleys stronghold. The private social clubs were first created in the 19th century ____2_____ industrial communities, providing recreation and education for working class men and their families.&lt;br&gt;&lt;br&gt;Clubs have commonly been affiliated with a ____3_____ industry, like the miners' institute, with the armed forces, like the Royal British Legion, or with political parties. But in England and Wales, the number of club certificates ñ licences granted by local authorities ñ has dropped 15% since 2008.&lt;br&gt;&lt;br&gt;Blaenau Gwent still had 43 members clubs holding club premises certificates in March 2016 - one of the highest rates ____4_____ head in England and Wales.&lt;br&gt;&lt;br&gt;&lt;br&gt;&lt;br&gt;Adapted from The Western Mail, 10 November 2016</testo>
  <risposte>
    <risposta ordine="">inside</risposta>
    <risposta ordine="">pro</risposta>
    <risposta ordine="">special</risposta>
    <risposta ordine="1">declining</risposta>
    <risposta ordine="4">per</risposta>
    <risposta ordine="2">within</risposta>
    <risposta ordine="">reducing</risposta>
    <risposta ordine="3">particular</risposta>
  </risposte>
</domandariempimentotesto>`,
`<domandariempimentotesto>
  <prologo>Drag and drop the correct option into each gap.</prologo>
  <testo>Voters in Costa Mesa and Laguna Beach were poised to reject ballot measures Wednesday ____1_____ would have allowed medical marijuana businesses to set up ____2_____ in the two cities.&lt;br&gt;&lt;br&gt;Meanwhile, a separate measure that would allow manufacturing of medical marijuana products in Costa Mesa had a ____3_____ lead, according to county registrar data from Tuesday's election that was posted Wednesday evening.&lt;br&gt;&lt;br&gt;The City Council sponsored that item, Measure X, to allow businesses that research, test, process and manufacture medical marijuana products to open in an area north of South Coast Drive and west of Harbor Boulevard - ____4_____ they obtain permits from the city.&lt;br&gt;&lt;br&gt;&lt;br&gt;Adapted from The Los Angeles Times, 09 November 2016</testo>
  <risposte>
    <risposta ordine="2">shop</risposta>
    <risposta ordine="">given</risposta>
    <risposta ordine="">little</risposta>
    <risposta ordine="1">that</risposta>
    <risposta ordine="">selling</risposta>
    <risposta ordine="4">provided</risposta>
    <risposta ordine="">what</risposta>
    <risposta ordine="3">narrow</risposta>
  </risposte>
</domandariempimentotesto>`
]




const parser = new xml2js.Parser({ explicitArray: false, trim: true});

export const numeroDomande = domandeXML.length;

export const getDomanda = async (indiceDomanda) => {
    const domanda = domandeXML[indiceDomanda];
    return new Promise((resolve, reject) => {
        parser.parseString(domanda, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

