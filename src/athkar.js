import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { queryId, query, createElement } from "./dom/dom";

import "./styles/main.scss";
import "./ui/switcher/component";
import "./modals";
import { onClick } from "./dom/event";

const main = queryId("main");
activateLanguage();
loopBackground(main, 5000);
