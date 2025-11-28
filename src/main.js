import './style.css'
import javascriptLogo from './javascript.svg'
import appLogo from '/favicon.svg'
import { setupCounter } from './counter.js'
import { initPWA } from './pwa.js'
import { Juris } from 'juris'

// const app = document.querySelector('#app')
// app.innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${appLogo}" class="logo" alt="vite-project-pwa logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>vite-project-pwa</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
//   <div
//     id="pwa-toast"
//     role="alert"
//     aria-labelledby="toast-message"
//   >
//     <div class="message">
//       <span id="toast-message"></span>
//     </div>
//     <div class="buttons">
//       <button id="pwa-refresh" type="button">
//         Reload
//       </button>
//       <button id="pwa-close" type="button">
//         Close
//       </button>
//     </div>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))

const Counter = (props, context) => {
 const { getState, setState } = context;
 return {
   render: () => ({
    button: {
     id: Math.random().toString(36).substring(2, 15),
     className: 'btn btn-primary',
     text: () => `Clicked ${getState('counter')} times`,
     onclick: () => setState('counter', getState('counter') + 1)
    }
   })
  };
};
const juris = new Juris({
  components: {
    Counter
  },
  layout: { Counter: {} }
});
juris.render('#app');


const app = document.querySelector('#app')
initPWA(app)
