class Button2 extends HTMLButtonElement {
  constructor() {
    // Always call super first in constructor
    super();
    console.log("Button2 constructor");
    // Element functionality written in here
  }

  connectedCallback() {
    console.log("Button2 connectedCallback");
  }
}

customElements.define("button-2", Button2, { extends: "button" });
