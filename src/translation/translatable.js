export const translatable = {
  athkarNavItem: "",
  hadithNavItem: "",
  aboutNavItem: "",
  beginBtn: "",
  modalHeader: "",
  modalLang: "",
  modalLangEnglish: "",
  modalLangArabic: "",
  menuAthkar: "",
  menuHadith: "",
  menuAbout: "",
  menuSettings: "",
  aboutGeneralHeader: "",
  aboutGeneralPara: "",
  aboutTechHeader: "",
  aboutTechPara: "",
};

export const translatableList = [];

for (const key in translatable) {
  translatable[key] = key;
  translatableList.push(translatable[key]);
}
