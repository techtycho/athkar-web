import { translatableList } from "./translatable";
import { alignableList } from "./align";
import {
  getStorage,
  processStorage,
  saveStorage,
} from "../storage/localStorage";

import * as english from "./english";
import * as arabic from "./arabic";

export const languages = {
  english,
  arabic,
};

const languageList = [english, arabic];

const languagesRaw = {
  english: "english",
  arabic: "arabic",
};

export function activateLanguage() {
  const defaultLanguage = getCurrentLanguage();
  changeLanguage(languages[defaultLanguage]);
}

export function getCurrentLanguage() {
  return processStorage("default_language", languagesRaw.english);
}

export function getCurrentLanguageIndex() {
  const current = processStorage("default_language", languagesRaw.english);
  return languageList.indexOf(languages[current]);
}

export function changeLanguage(language) {
  translatableList.forEach((translatable) => {
    const element = document.querySelector(`[data-translate=${translatable}]`);
    if (element)
      element.textContent = language.translation[element.dataset.translate];
  });

  alignableList.forEach((alignable) => {
    const element = document.querySelector(
      `[data-translate-align=${alignable}]`
    );
    if (element) element.style.textAlign = language.alignment;
  });

  saveStorage("default_language", languagesRaw[language.rawName]);
}

export function nextLanguage() {
  const currentLanguageRaw = getStorage("default_language");
  let i = languageList.indexOf(languages[currentLanguageRaw]);
  if (i === languageList.length - 1) i = 0;
  else i++;
  changeLanguage(languageList[i]);
}
