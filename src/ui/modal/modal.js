class Modal {
  element;
  toggleVar = false;
  darkElement = [];
  darkFactor;
  className = "modal";

  showOperation = () => {
    this.element.style.display = "block";
  };

  hideOperation = () => {
    this.element.style.display = "none";
  };

  setElement(element) {
    this.element = element;
  }

  setClass(name) {
    this.element.className = name;
    this.className = name;
  }

  setDarkElement(elements) {
    this.darkElement = elements;
  }

  setDarkFactor(n) {
    this.darkFactor = n;
  }

  addToDOM(show = false) {
    document.body.appendChild(this.element);
    if (show) this.show();
    else this.hide();
  }

  removeFromDOM() {
    this.element.remove();
  }

  show() {
    this.darkElement.forEach((el) => {
      el.style.filter = `brightness(${this.darkFactor})`;
    });
    this.showOperation(this.element);
  }

  hide() {
    this.darkElement.forEach((el) => {
      el.style.filter = "brightness(1)";
    });
    this.hideOperation(this.element);
  }

  setShowOperation(func) {
    this.showOperation = func;
  }

  setHideOperation(func) {
    this.hideOperation = func;
  }

  toggle() {
    if (!this.toggleVar) this.show();
    else this.hide();
    this.toggleVar = !this.toggleVar;
  }
}

export async function createModal(modal, func) {
  const modalClass = new Modal();
  modalClass.setElement(modal);
  func(modalClass);
}
