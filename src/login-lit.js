import { LitElement, html, css } from "lit";

export class LoginLit extends LitElement {
  static get styles() {
    return css`
      .login-container {
        position: relative;
        height: 250px;
        border-radius: 20px;
        padding: 20px;
        width: 230px;
        background-color: #313741;
      }
      input {
        border-radius: 15px;
        border: none;
      }
      input[type="email"],
      input[type="password"],
      input[type="text"] {
        width: 85%;

        height: 35px;
        padding: 0 0 0 30px;
        background: #2a2f39;
        margin: 5px;
        color: #fff;
      }
      input[type="submit"] {
        position: absolute;
        bottom: -10px;
        left: 60px;
        height: 45px;
        width: 150px;
        background-color: #0171ff;

        color: #fff;
        cursor: pointer;
      }
      .input-field {
        position: relative;
      }
      i {
        position: absolute;
        color: #fff;
        left: 15px;
        top: 14px;
      }
      i:nth-child(4) {
        left: 200px;
        cursor: pointer;
      }
      h4 {
        color: #ffffff;
      }
    `;

    let togglePassword = document.querySelector("#togglePassword");
    const password = document.querySelector("#password");
    togglePassword.addEventListener("click", function () {
      // toggle the type attribute
      const type = password.getAttribute("type");
      "password" ? "text" : "password";
    });
    password.setAttribute("type", type);
    // toggle the icon
    this.classList.toggle("fa-eye-slash");
  }
  render() {
    return html`
      <div class="login-container">
        <h4>Formulario de ingreso LitElement</h4>
        <div class="input-field">
          <input class="" placeholder="email" type="email" id="email" />
          <br />
          <i class="fa fa-user"></i>
        </div>
        <div class="input-field">
          <input placeholder="password" type="password" id="password" />
          <br />
        </div>
        <input type="submit" value="Ingresar" @click="${this._login}" />
      </div>
    `;
  }

  _login() {
    const email = this.shadowRoot.querySelector("#email").value;
    const pass = this.shadowRoot.querySelector("#password").value;

    if (!!email && !!pass) {
      this.dispatchEvent(
        new CustomEvent("signin", {
          detail: { login: true },
          bubbles: true,
          composed: true,
        })
      );
    }
  }
}

customElements.define("login-lit", LoginLit);
