import { imageList, changeBackground } from "./background/switcher";
import { nextLanguage, activateLanguage } from "./translation/switcher";
import { createModal } from "./ui/modal/modal";

import "./styles/main.scss";

const button = document.getElementById("btn");
const main = document.getElementById("main");
const settingsIcon = document.getElementById("settings-icon");

createModal("/src/settingsTemplate.html").then((modal) => {
  let open = false;
  settingsIcon.addEventListener("click", () => {
    if (!open) modal.show();
    else modal.hide();
    open = !open;
  });
});

activateLanguage();

let i = 0;
setInterval(() => {
  changeBackground(main, imageList[i]);
  if (i === imageList.length - 1) i = 0;
  else i++;
}, 5000);

button.addEventListener("click", () => {
  window.open("/about", "_self");
});
