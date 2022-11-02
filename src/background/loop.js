import { imageList, changeBackground } from "./switcher";

export function loopBackground(element, interval) {
  let i = 0;
  setInterval(() => {
    changeBackground(element, imageList[i]);
    i = i === imageList.length - 1 ? 0 : ++i;
  }, interval);
}
