import { checkOverflow } from "../../utils";

class AthkarUI extends HTMLElement {
  static defaultClass = "athkar-view";
  counter = null;
  body = null;
  beacon = null;

  finishHook = () => {};

  constructor() {
    super();
  }

  connectedCallback() {
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

    this.counter = this.children[0];
    this.body = this.children[1];
    this.beacon = this.children[2];
  }

  setFinishHook(callback) {
    this.finishHook = callback;
    this.counter.children[0].setFinishHook(() => this.finishHook());
  }

  setProgress() {
    this.counter.children[0].setProgressComponent(this.counter);
  }

  setData(data) {
    this.setProgress();
    this.counter.children[0].setNumber(data.repeat);

    if (data.isArray) {
      data.body.forEach((body) => {
        this.body.innerHTML += body;
        this.body.innerHTML += "<br /><br />";
      });
    } else this.body.textContent = data.body;

    if (checkOverflow(this.body)) {
      this.beacon.style.borderBottomWidth = "1px";
    } else this.beacon.style.borderBottomWidth = "0";
  }
}

customElements.define("athkar-ui", AthkarUI);
