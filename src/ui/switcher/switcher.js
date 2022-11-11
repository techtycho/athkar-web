import { onClick } from "../../dom/event";

export class Switcher {
  element;

  constructor(element) {
    this.element = element;
  }

  setOption(optIndex) {
    this.element.select(optIndex);
  }

  addAction(dataId, action) {
    for (let element of this.element.children) {
      if (element.dataset.option === dataId) {
        onClick(element, action);
      }
    }
  }
}
