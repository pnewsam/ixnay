import { LitElement, css, html } from "lit";

import { customElement, property } from "lit/decorators.js";

@customElement("ix-navbar")
class Navbar extends LitElement {
  render() {
    return html` <div><slot></slot></div> `;
  }

  static styles = css`
    :host {
      border: 1px solid red;
      width: 100%;
      height: 100px;
    }
    :host div {
      border: 1px solid red;
      width: 100%;
      height: 100px;
    }
  `;
}
