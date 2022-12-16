import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { queryId } from "./dom/dom";

import "./styles/main.scss";
import "./ui/counter/component";
import "./ui/switcher/component";

import "./athkarView";
import "./modals";

const main = queryId("main");

activateLanguage();
loopBackground(main, 5000);
