class ModalUI extends HTMLDivElement {
  constructor() {
    super();
    this.className = "modal";
  }
}

window.customElements.define("modal-ui", ModalUI, { extends: "div" });
