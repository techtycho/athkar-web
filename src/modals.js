import { createModal } from "./ui/modal/modal";
import { Switcher } from "./ui/switcher/switcher";
import { bindSwitcher } from "./translation/switcherUI";

import { queryId, onClick } from "./dom/dom";

const main = queryId("main");
const settingsIcon = queryId("settings-icon");
const barsIcon = queryId("bars-icon");
const menuSettings = queryId("menu-settings");
const modalClose = queryId("modal-close");

const menuModal = queryId("menu-modal");
const settingsModal = queryId("settings-modal");

createModal(menuModal, (modal) => {
  modal.setShowOperation((e) => {
    e.style.right = "0";
  });

  modal.setHideOperation((e) => {
    e.style.right = "-65%";
  });

  modal.setClass("menu");
  modal.addToDOM();

  modal.setDarkFactor(0.6);
  modal.setDarkElement([main, settingsModal]);

  onClick(menuSettings, () => {
    modal.hide();
    modal.toggleVar = false;
  });

  onClick(barsIcon, () => {
    modal.toggle();

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });

    onClick(settingsModal, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });
});

createModal(settingsModal, (modal) => {
  modal.setShowOperation((e) => {
    if (document.body.clientWidth <= 600) {
      e.style.top = "9%";
    } else {
      e.style.transform = "scale(1)";
    }
  });

  modal.setHideOperation((e) => {
    if (document.body.clientWidth <= 600) {
      e.style.top = "-91%";
    } else {
      e.style.transform = "scale(0)";
    }
  });

  modal.setClass("modal settings");
  modal.hide();
  modal.addToDOM();
  modal.setDarkFactor(0.6);
  modal.setDarkElement([main]);

  onClick(modalClose, () => {
    modal.hide();
    modal.toggleVar = false;
  });

  onClick(menuSettings, () => {
    modal.toggle();

    const switcher = queryId("lang-switcher");
    bindSwitcher(new Switcher(switcher));

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });

  onClick(settingsIcon, () => {
    modal.toggle();

    const switcher = queryId("lang-switcher");
    bindSwitcher(new Switcher(switcher));

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });
});
