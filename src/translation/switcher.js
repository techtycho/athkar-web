import { translatableList } from "./translatable";

import * as english from "./english";
import * as arabic from "./arabic";

export const languages = {
  arabic,
  english,
};

export function changeLanguage(language) {
  translatableList.forEach((translatable) => {
    const element = document.querySelector(translatable);
    element.textContent = language.translation[element.dataset.translate];
  });
}
