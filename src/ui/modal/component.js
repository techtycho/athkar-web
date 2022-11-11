class ModalUI extends HTMLDivElement {
  static defaultClass = "modal";

  constructor() {
    super();
    this.className = ModalUI.defaultClass;
  }
}

window.customElements.define("modal-ui", ModalUI, { extends: "div" });
