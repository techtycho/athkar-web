import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { createModal } from "./ui/modal/modal";

import { queryId } from "./dom/selector";
import { openURL } from "./dom/url";
import { onClick } from "./dom/event";

import "./styles/main.scss";

const button = queryId("btn");
const main = queryId("main");
const settingsIcon = queryId("settings-icon");

activateLanguage();
loopBackground(main, 5000);

createModal("/src/settingsTemplate.html").then((modal) => {
  onClick(settingsIcon, () => {
    modal.trigger();
  });
});

onClick(button, () => openURL("/about"));
