import { getTemplate } from "../../file/template";
import { popOut, popOutReverse } from "./animations";
import "./component";

class Modal {
  element;
  toggleVar = false;
  darkElement;
  darkFactor;

  setElement(element) {
    this.element = element;
  }

  setDarkElement(element) {
    this.darkElement = element;
  }

  setDarkFactor(n) {
    this.darkFactor = n;
  }

  show() {
    document.body.appendChild(this.element);
    this.darkElement.style.filter = `brightness(${this.darkFactor})`;
    popOut(this.element, 200);
  }

  hide() {
    main.style.filter = "brightness(1)";
    popOutReverse(this.element, 200, (e) => {
      e.remove();
    });
  }

  toggle() {
    if (!this.toggleVar) this.show();
    else this.hide();
    this.toggleVar = !this.toggleVar;
  }
}

export async function createModal(templatePath) {
  const modal = document.createElement("div", { is: "modal-ui" });
  const modalClass = new Modal();
  const template = await getTemplate(templatePath);

  modal.innerHTML = template;
  modalClass.setElement(modal);

  return modalClass;
}
