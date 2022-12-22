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
      <div class="beacon"></div>
    `;
  }

  setProgress() {
    this.children[0].children[0].setProgressComponent(this.children[0]);
  }

  setData(data) {
    this.children[0].children[0].setNumber(data.repeat);

    if (data.isArray) {
      data.body.forEach((body) => {
        this.children[1].innerHTML += body;
        this.children[1].innerHTML += "<br /><br />";
      });
    } else this.children[1].textContent = data.body;
  }
}

customElements.define("athkar-ui", AthkarUI);
