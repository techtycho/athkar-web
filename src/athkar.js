import { loopBackground } from "./background/loop";
import { activateLanguage } from "./translation/switcher";
import { queryId, query, createElement } from "./dom/dom";

import "./styles/main.scss";
import "./ui/switcher/component";
import "./modals";
import { onClick } from "./dom/event";

const main = queryId("main");
const panel = query(".panel");

const athkarBox = createElement("div", {
  className: "thikr",
  textContent: "...",
  append: panel,
});

const counter = createElement("div", {
  className: "thikr-counter",
  textContent: "0",
  append: panel,
});

activateLanguage();
loopBackground(main, 5000);

fetch("/api/athkar/morning.json")
  .then((res) => res.json())
  .then((data) => {
    const arr = [];
    function render(i) {
      const d = data[i];
      athkarBox.style.display = "block";

      arr.forEach((a) => {
        a.remove();
      });

      if (d.isArray) {
        athkarBox.style.display = "none";
        d.body.forEach((b, j) => {
          arr.push(
            createElement("div", {
              className: "thikr",
              textContent: b,
              append: panel,
              before: counter,
            })
          );
        });
      } else athkarBox.textContent = d.body;

      counter.textContent = d.repeat;
      j = data[i].repeat;
    }

    let i = 0;
    let j = data[i].repeat;
    render(i, data);

    onClick(counter, () => {
      if (j !== 1) {
        counter.textContent = --j;
      } else render(++i, data);
    });
  });
