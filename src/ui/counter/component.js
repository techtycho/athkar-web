import { onClick } from "../../dom/dom";

class CounterUI extends HTMLElement {
  static defaultClass = "counter";
  number = 0;
  maxNumber = 0;
  progressComponent = null;

  // Callback Hooks
  finish = false; // Ensures that finish hook runs only once

  updateHook = () => {};
  finishHook = () => {};

  constructor() {
    super();

    this.className = CounterUI.defaultClass;
    this.addEventListeners();
    this.updateValue();
  }

  updateValue() {
    this.textContent = this.number;
  }

  setProgressComponent(e) {
    this.progressComponent = e;
    this.setProgress(0);
  }

  setProgress(deg) {
    this.progressComponent.style.background = `conic-gradient(#772e20 ${deg}deg, #986 0deg)`;
  }

  setUpdateHook(callback = () => {}) {
    this.callback = callback;
  }

  setFinishHook(callback = () => {}) {
    this.finishHook = callback;
    this.finish = false;
  }

  setNumber(n) {
    this.number = n;
    this.maxNumber = n;
    this.updateValue();
  }

  incNumber(n = 1) {
    this.number += n;
    this.updateValue();
  }

  decNumber(n = 1) {
    this.number -= n;
    this.updateValue();
  }

  addEventListeners() {
    onClick(this, () => {
      if (this.number > 1) {
        this.decNumber();
        this.setProgress(
          (100 / this.maxNumber) * (this.maxNumber - this.number) * 3.6
        );
      } else {
        this.setProgress(360);
        this.textContent = ".";
        this.style.paddingTop = "0";

        // Ensure that finish callback runs only once
        if (!this.finish) {
          this.finishHook();
          this.finish = true;
        }
      }
    });
  }
}

customElements.define("counter-ui", CounterUI);
