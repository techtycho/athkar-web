class AthkarUI extends HTMLElement {
  static defaultClass = "athkar-view";

  constructor() {
    super();

    this.className = AthkarUI.defaultClass;
    this.renderHTML();
  }

  renderHTML() {
    this.innerHTML = `
      <div class="counter-progress">
        <counter-ui class="counter"></counter-ui>
      </div>
      <p class="athkar-body"></p>
    `;
  }

  setProgress() {
    this.children[0].children[0].setProgressComponent(this.children[0]);
  }

  setRepeatCount(n) {
    this.children[0].children[0].setNumber(n);
  }

  setBodyText(t) {
    this.children[1].textContent = t;
  }
}

customElements.define("athkar-ui", AthkarUI);
