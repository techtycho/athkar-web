import { imageList, changeBackground } from "./background/switcher";
import { languages, changeLanguage } from "./translation/switcher";

import "./styles/main.scss";

changeLanguage(languages.english);

const button = document.getElementById("btn");
const main = document.getElementById("main");

let i = 0;
setInterval(() => {
  changeBackground(main, imageList[i]);
  if (i === imageList.length - 1) i = 0;
  else i++;
}, 5000);

button.addEventListener("click", () => {
  window.open("/about", "_self");
});
