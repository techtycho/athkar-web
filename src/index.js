import { loopBackground } from "./background/loop";
import {
  activateLanguage,
  changeLanguage,
  languages,
  getCurrentLanguageIndex,
} from "./translation/switcher";
import { queryId, onClick, openURL } from "./dom/dom";

import { Switcher } from "./ui/switcher/switcher";
import { createModal } from "./ui/modal/modal";
import "./ui/switcher/component";

import "./styles/main.scss";

const button = queryId("btn");
const main = queryId("main");
const settingsIcon = queryId("settings-icon");

activateLanguage();
loopBackground(main, 5000);

createModal("/src/settingsTemplate.html").then((modal) => {
  modal.setDarkFactor(0.6);
  modal.setDarkElement(main);

  onClick(settingsIcon, () => {
    modal.toggle();
    activateLanguage();

    const langSwitcher = new Switcher(queryId("lang-switcher"));
    langSwitcher.setOption(getCurrentLanguageIndex());

    langSwitcher.addAction("lang-english", () =>
      changeLanguage(languages.english)
    );

    langSwitcher.addAction("lang-arabic", () =>
      changeLanguage(languages.arabic)
    );

    onClick(main, () => {
      modal.hide();
      modal.toggleVar = false;
    });
  });
});

onClick(button, () => openURL("/about"));
