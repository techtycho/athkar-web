import { onClick } from "./../../dom/event";

class SwitcherUI extends HTMLElement {
  static defaultClass = "switcher";
  selectedOption = 0;

  constructor() {
    super();

    this.className = SwitcherUI.defaultClass;
    this.select(this.selectedOption);
    this.addEventListeners();
  }

  addEventListeners() {
    for (let i = 0; i < this.children.length; i++) {
      const element = this.children[i];

      onClick(element, () => {
        this.clearSelected();
        this.select(i);
      });
    }
  }

  clearSelected() {
    for (let i = 0; i < this.children.length; i++) {
      const element = this.children[i];
      element.classList.remove("selected");
    }
  }

  select(index) {
    this.clearSelected();
    this.selectedOption = index;
    this.children[index].classList.add("selected");
  }
}

customElements.define("switcher-ui", SwitcherUI);
