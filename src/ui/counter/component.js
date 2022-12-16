import { onClick } from "../../dom/event";

class CounterUI extends HTMLElement {
  static defaultClass = "counter";
  numberArray = [];
  number = 0;
  index = 0;

  // Callback Hooks
  finishCallbackDone = false; // Ensures that finish callback runs only once
  callback = () => {};
  finishCallback = () => {};

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

  setCallback(callback = () => {}) {
    this.callback = callback;
  }

  setFinishCallback(callback = () => {}) {
    this.finishCallback = callback;
    this.finishCallbackDone = false;
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
          this.callback();
        } else {
          // Ensure that finish callback runs only once
          if (!this.finishCallbackDone) {
            this.finishCallback();
            this.finishCallbackDone = true;
          }
        }
      }
    });
  }
}

customElements.define("counter-ui", CounterUI);
