import { onClick } from "../../dom/dom";

class CounterUI extends HTMLElement {
  static defaultClass = "counter";
  numberArray = [];
  number = 0;
  index = 0;

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

  setNumberArray(arr) {
    this.numberArray = arr;
    this.index = 0;
    this.number = this.numberArray[this.index];
    this.updateValue();
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
      if (this.number > 1) this.decNumber();
      else {
        if (this.numberArray[this.index + 1]) {
          this.setNumber(this.numberArray[++this.index]);
          this.updateHook();
        } else {
          // Ensure that finish callback runs only once
          if (!this.finish) {
            this.finishHook();
            this.finish = true;
          }
        }
      }
    });
  }
}

customElements.define("counter-ui", CounterUI);
