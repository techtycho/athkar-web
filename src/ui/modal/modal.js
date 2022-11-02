import { getTemplate } from "../../file/template";
import "./component";

class Modal {
  element;

  setElement(element) {
    this.element = element;
  }

  show() {
    document.body.appendChild(this.element);
    this.element.animate(
      [
        {
          transform: "scale(0)",
          easing: "ease",
        },
        {
          transform: "scale(1)",
          easing: "ease",
        },
      ],
      200
    );
    setTimeout(() => {
      this.element.style.transform = "scale(1)";
    }, 150);
  }

  hide() {
    this.element.animate(
      [
        {
          transform: "scale(1)",
          easing: "ease",
        },
        {
          transform: "scale(0)",
          easing: "ease",
        },
      ],
      200
    );
    setTimeout(() => {
      this.element.style.transform = "scale(0)";
      this.element.remove();
    }, 150);
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
