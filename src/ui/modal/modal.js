import { getTemplate } from "../../file/template";
import { popOut, popOutReverse } from "./animations";
import "./component";

class Modal {
  element;
  triggerVar = false;

  setElement(element) {
    this.element = element;
  }

  show() {
    document.body.appendChild(this.element);
    popOut(this.element, 200);
  }

  hide() {
    popOutReverse(this.element, 200, (e) => {
      e.remove();
    });
  }

  trigger() {
    if (!this.triggerVar) this.show();
    else this.hide();
    this.triggerVar = !this.triggerVar;
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
