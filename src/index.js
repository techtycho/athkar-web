import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { bindSwitcher } from "./translation/switcherUI";
import { queryId, onClick, openURL } from "./dom/dom";

import { Switcher } from "./ui/switcher/switcher";
import { createModal } from "./ui/modal/modal";
import { slide, slideReverse } from "./ui/modal/animations";

import "./ui/switcher/component";
import "./styles/main.scss";

const button = queryId("btn");
const main = queryId("main");
const settingsIcon = queryId("settings-icon");
const barsIcon = queryId("bars-icon");

activateLanguage();
loopBackground(main, 5000);

createModal("/src/menuTemplate.html").then((modal) => {
  modal.setDarkFactor(0.6);
  modal.setDarkElement(main);
  modal.setClass("menu");
  modal.setAnimation([slide, slideReverse], 200);

  onClick(barsIcon, () => {
    modal.toggle();
    activateLanguage();

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });
});

createModal("/src/settingsTemplate.html").then((modal) => {
  modal.setDarkFactor(0.6);
  modal.setDarkElement(main);

  onClick(settingsIcon, () => {
    modal.toggle();
    activateLanguage();

    const switcher = queryId("lang-switcher");
    bindSwitcher(new Switcher(switcher));

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });
});

onClick(button, () => openURL("/about"));
