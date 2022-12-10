import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { queryId, query } from "./dom/dom";

import "./styles/main.scss";
import "./ui/switcher/component";
import "./modals";

const main = queryId("main");
const panel = query(".panel");

activateLanguage();
loopBackground(main, 5000);

fetch("/api/athkar/morning.json")
  .then((res) => res.json())
  .then((data) => {
    const sel = data[0];
    if (sel.isArray) {
      sel.body.forEach((t) => {
        const elem = document.createElement("div");
        elem.textContent = t;
        elem.style.marginTop = "25px";
        elem.style.fontFamily = "Amiri, serif";
        elem.style.fontSize = "1.5rem";
        elem.style.textAlign = "center";
        elem.style.border = "1px solid #fff";
        elem.style.padding = "10px";
        panel.appendChild(elem);
      });
    } else {
      const elem = document.createElement("div");
      elem.textContent = sel.body;
      elem.style.marginTop = "25px";
      elem.style.fontFamily = "Amiri, serif";
      elem.style.fontSize = "1.5rem";
      elem.style.textAlign = "center";
      elem.style.border = "1px solid #fff";
      elem.style.padding = "10px";
      panel.appendChild(elem);
    }

    const elem = document.createElement("div");
    elem.textContent = sel.repeat;
    elem.style.marginTop = "50px";
    elem.style.border = "1px solid #fff";
    elem.style.borderRadius = "50%";
    elem.style.textAlign = "center";
    elem.style.display = "flex";
    elem.style.justifyContent = "center";
    elem.style.alignItems = "center";
    elem.style.width = "50px";
    elem.style.height = "50px";
    panel.appendChild(elem);
  });
