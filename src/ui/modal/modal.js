import { getTemplate } from "../../file/template";
import { popOut, popOutReverse } from "./animations";
import "./component";

class Modal {
  element;
  toggleVar = false;
  darkElement;
  darkFactor;
  className = "modal";
  animation = [popOut, popOutReverse];
  animationDuration = 200;

  setElement(element) {
    this.element = element;
  }

  setAnimation(animations, duration) {
    this.animation = animations;
    this.animationDuration = duration;
  }

  setClass(name) {
    this.element.className = name;
    this.className = name;
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
    this.animation[0](this.element, this.animationDuration);
  }

  hide() {
    main.style.filter = "brightness(1)";
    this.animation[1](this.element, this.animationDuration, (e) => {
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
