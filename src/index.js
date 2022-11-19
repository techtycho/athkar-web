import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { queryId, onClick, openURL } from "./dom/dom";

import "./styles/main.scss";
import "./ui/switcher/component";
import "./modals";

const button = queryId("btn");
const main = queryId("main");

activateLanguage();
loopBackground(main, 5000);

onClick(button, () => openURL("/about"));

window.scrollTo(0, 1);
