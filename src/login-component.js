import { LitElement, html, css, property } from "lit-element";
import stylesScss from './login-componentStyle';
import { renderPage } from './main.js';

export class Login extends LitElement {
  @property({ type: String }) mensaje = '';
  @property({ type: String }) username = '';
  @property({ type: String }) password = '';
  @property({ type: Boolean }) recordar = false;

  ingresarLogin() {
    if (this.username === '') {
      this.mensaje = 'Atención... campo username vacío.';
      return false;
    }

    if (this.password === '') {
      this.mensaje = 'Atención... campo password vacío.';
      return false;
    } else {
      this.mensaje = '';
    }
  }

  recordarCambio(event) {
    this.recordar = event.target.checked;
  }

  static get styles() {
    return [stylesScss];
  }

  render() {
    return html`
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx"
        crossorigin="anonymous"
      />

      <div id="container"
        class="d-flex flex-column align-items-center justify-content-center vh-100"
        style="background: linear-gradient(to right, #77B3D9, #656B8C);"
      >
        <div
          id="form"
          class="p-5 rounded-5 text-secondary shadow form"
          style="width: 25rem"
        >
          <div class="d-flex justify-content-center">
            <div class="image-container">
            </div>
          </div>
          <div class="input-group mt-4">
            <div class="input-group-text">
              <img
                src="/img/username-icon.svg"
                alt="username-icon"
                style="height: 1rem"
              />
            </div>
            <input
              class="form-control"
              type="text"
              placeholder="Username"
              @input="${(e) => this.username = e.target.value}"
            />
          </div>
          <div class="input-group mt-4">
            <div class="input-group-text">
              <img
                src="/img/password-icon.svg"
                alt="password-icon"
                style="height: 1rem"
              />
            </div>
            <input
              class="form-control"
              type="password"
              placeholder="Password"
              @input="${(e) => this.password = e.target.value}"
            />
          </div>
          <div class="d-flex justify-content-around mt-5">
            <div class="d-flex align-items-center text-black gap-1">
              <input
                class="form-check-input"
                type="checkbox"
                ?checked="${this.recordar}"
                @input="${this.recordarCambio}"
              />
              <div class="pt-1" style="font-size: 0.9rem">Recuérdame</div>
            </div>
            <div class="pt-1">
              <a
                href="#"
                class="text-decoration-none text-black fw-semibold fst-italic"
                style="font-size: 0.9rem"
                >Recuperar contraseña?</a
              >
            </div>
          </div>
        </div>
        <div
          class="btn btn-info text-white -100 mt-3 fw-semibold shadow-sm"
          style="width: 18rem; height: 2.5rem;"
        >
          <button @click="${this.ingresarLogin}">Login</button>
        </div>
      </div>
    `;
  }
}

customElements.define('login-component', Login);
