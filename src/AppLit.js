import { LitElement, html, css } from "lit";
import "./login-lit";
import "./components/GetData";

export class AppLit extends LitElement {
  static get properties() {
    return {
      login: { type: Boolean },
      billboard: { type: Array },
    };
  }

  static get styles() {
    return css`
      login-lit {
        padding-top: 10%;
        min-height: calc(100vh - 10%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }
      .container {
        display: block;
        border-radius: 10px;
        display: inline-flex;
        height: max-content;
        width: 300px;
        margin: 1rem;
        position: relative;
        text-align: center;
        background-color: #424242;
        color: #ffffff;
      }
      .container img {
        width: 100%;
      }
      get-data {
        display: none;
      }
    `;
  }
  constructor() {
    super();
    this.title = "My app";
    this.addEventListener("apiData", (event) => {
      this._dataFormat(event.detail.data);
    });
  }

  _dataFormat(data) {
    let movies = [];
    data["results"].forEach((movie) => {
      movies.push({
        id: movie.id,
        img: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
        name: movie.original_title,
        description: movie.overview,
        release_date: movie.release_date,
      });
    });
    this.billboard = movies;
    // console.log("Peliculas formateadas: ", movies);
  }
  render() {
    return html`
      <get-data
        url="https://api.themoviedb.org/3/movie/popular?api_key=19dedc791dc255982eaf84be8a93012a&language=en-US&page=1"
        method="GET"
      ></get-data>
      ${this.login
        ? html`
            <h2>Bienvenido usuario!</h2>
            ${this.moviesTemplate}
          `
        : html` <login-lit @signin="${this._hiddenLogin}"></login-lit> `}
    `;
  }

  get moviesTemplate() {
    return html`
      ${this.billboard.map(
        ({ id, img, name, description, release_date }) =>
          html`
            <div class="container">
              <div class="card">
                <div class="card-content">
                  <h2>${name}</h2>
                  <img src=" ${img}" />
                  <b> ${release_date} </b>
                  <p>${description}</p>
                </div>
              </div>
            </div>
          `
      )}
    `;
  }

  _hiddenLogin() {
    this.login = true;
  }
}
