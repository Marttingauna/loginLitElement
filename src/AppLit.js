// import { LitElement, html, css } from "lit";

// const logo = new URL("../assets/open-wc-logo.svg", import.meta.url).href;

// export class AppLit extends LitElement {
//   static get properties() {
//     return {
//       title: { type: String },
//     };
//   }

//   static get styles() {
//     return css`
//       :host {
//         min-height: 100vh;
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-content: flex-start;
//         font-size: calc(10px + 2vmin);
//         color: #1a2b42;
//         max-width: 960px;
//         margin: 0 auto;
//         text-align: center;
//         background-color: var(--app-lit-background-color);
//       }

//       main {
//         flex-grow: 1;
//       }

//       .logo {
//         margin-top: 36px;
//         animation: app-logo-spin infinite 20s linear;
//       }

//       @keyframes app-logo-spin {
//         from {
//           transform: rotate(0deg);
//         }
//         to {
//           transform: rotate(360deg);
//         }
//       }

//       .app-footer {
//         font-size: calc(12px + 0.5vmin);
//         align-items: center;
//       }

//       .app-footer a {
//         margin-left: 5px;
//       }
//     `;
//   }

//   constructor() {
//     super();
//     this.title = "My app";
//   }

//   render() {
//     return html`
//       <main>
//         <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
//         <h1>${this.title}</h1>

//         <p>Edit <code>src/AppLit.js</code> and save to reload.</p>
//         <a
//           class="app-link"
//           href="https://open-wc.org/guides/developing-components/code-examples/"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Code examples
//         </a>
//       </main>

//       <p class="app-footer">
//         🚽 Made with love by
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           href="https://github.com/open-wc"
//           >open-wc</a
//         >.
//       </p>
//     `;
//   }
// }

import { LitElement, html, css } from "lit";
import "./login-lit";

export class AppLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      login-lit {
        margin-top:50px;
      }
      :host {
         min-height: 100vh;
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: flex-start;
         font-size: calc(10px + 2vmin);
         max-width: 960px;
         margin: 0 auto;
         text-align: center;
         background-color: var(--app-lit-background-color);
       }
      .app-footer {
         font-size: calc(12px + 0.5vmin);
         align-items: center;
         margin-top:50px;
       
       .app-footer a {
         margin-left: 5px;
       }
    `;
  }
  constructor() {
    super();
    this.title = "My app";
  }
  render() {
    return html`
      ${this.login
        ? html`<h1>Welcome to QwertPy!!</h1>`
        : html` <login-lit @signin="${this._hiddenLogin}"></login-lit> `}
      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Marttingauna"
          >martin gauna</a
        >.
      </p>
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}
