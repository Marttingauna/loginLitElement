import { LitElement } from "lit";

/** Componente encargado de pedir datos a una API y devuelve los datos a su componente padre. */
export class GetData extends LitElement {
  static get properties() {
    return {
      url: { type: String },
      method: { type: String },
    };
  }

  //   constructor() {
  //     //Llamo a super para poder usar el estado global.
  //     super();
  //     this._getData();
  //   }

  /** CICLO DE VIDA DE COMPONENTE. Se ejecuta cuando el componente este inicializado */
  firstUpdated() {
    this._getData();
  }

  _sendData(data) {
    this.dispatchEvent(
      new CustomEvent("apiData", {
        detail: {
          data,
        },
        bubbles: true, //Indicamos que el evento puede 'subir' desde hijos a padres.
        composed: true,
      })
    );
  }

  _getData() {
    fetch(this.url, { method: this.method })
      .then((response) => {
        if (response.ok) return response.json();
        return Promise.reject(response);
      })
      .then((data) => {
        this._sendData(data);
      })
      .catch((error) => {
        console.warn("Al parecer algo fallo.. ", error);
      });
  }
}

customElements.define("get-data", GetData);
