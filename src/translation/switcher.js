import { translatableList } from "./translatable";
import {
  getStorage,
  processStorage,
  saveStorage,
} from "../storage/localStorage";

import * as english from "./english";
import * as arabic from "./arabic";

export const languages = {
  arabic,
  english,
};

const languageList = [arabic, english];

const languagesRaw = {
  arabic: "arabic",
  english: "english",
};

export function activateLanguage() {
  const defaultLanguage = processStorage(
    "default_language",
    languagesRaw.english
  );
  changeLanguage(languages[defaultLanguage]);
}

export function changeLanguage(language) {
  translatableList.forEach((translatable) => {
    const element = document.querySelector(translatable);
    element.textContent = language.translation[element.dataset.translate];
    saveStorage("default_language", languagesRaw[language.rawName]);
  });
}

export function nextLanguage() {
  const currentLanguageRaw = getStorage("default_language");
  let i = languageList.indexOf(languages[currentLanguageRaw]);
  if (i === languageList.length - 1) i = 0;
  else i++;
  changeLanguage(languageList[i]);
}
