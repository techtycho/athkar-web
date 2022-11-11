import { getTemplate } from "../../file/template";
import { popOut, popOutReverse } from "./animations";
import "./component";

const main = document.getElementById("main");

class Modal {
  element;
  toggleVar = false;

  setElement(element) {
    this.element = element;
  }

  show() {
    document.body.appendChild(this.element);
    main.style.filter = "brightness(0.6)";
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
