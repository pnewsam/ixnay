import { LitElement, css, html } from "lit";

import { customElement, property } from "lit/decorators.js";

@customElement("i-badge")
class Badge extends LitElement {
  constructor() {
    super();
    this.variant = "success";
  }

  static properties = {
    variant: {
      type: String,
    },
  };

  static styles = css`
    :host {
      background-color: var(--primary);
      border-radius: 4px;
      color: var(--white);
      display: inline-flex;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    }
    :host([variant="info"]) {
      background-color: var(--info);
    }
    :host([variant="warning"]) {
      background-color: var(--warning);
    }
    :host([variant="success"]) {
      background-color: var(--success);
    }
    :host([variant="danger"]) {
      background-color: var(--danger);
    }
    slot {
    }
  `;

  render() {
    return html` <div><slot></slot></div> `;
  }
}
