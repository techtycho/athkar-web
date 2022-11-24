export const alignable = {
  modalLang: "",
  menuAthkar: "",
  menuHadith: "",
  menuAbout: "",
  menuSettings: "",
};

export const alignableList = [];

for (const key in alignable) {
  alignable[key] = key;
  alignableList.push(alignable[key]);
}
