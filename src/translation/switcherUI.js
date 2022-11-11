import { changeLanguage, languages, getCurrentLanguageIndex } from "./switcher";

export function bindSwitcher(switcher) {
  switcher.setOption(getCurrentLanguageIndex());
  switcher.addAction("lang-english", () => changeLanguage(languages.english));
  switcher.addAction("lang-arabic", () => changeLanguage(languages.arabic));
}
