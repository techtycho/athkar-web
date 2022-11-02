export function popOut(element, duration, afterFun = () => {}) {
  element.animate(
    [
      {
        transform: "scale(0)",
        easing: "ease",
      },
      {
        transform: "scale(1)",
        easing: "ease",
      },
    ],
    duration
  );
  setTimeout(() => {
    element.style.transform = "scale(1)";
    afterFun(element);
  }, duration - 50);
}

export function popOutReverse(element, duration, afterFun = () => {}) {
  element.animate(
    [
      {
        transform: "scale(1)",
        easing: "ease",
      },
      {
        transform: "scale(0)",
        easing: "ease",
      },
    ],
    duration
  );
  setTimeout(() => {
    element.style.transform = "scale(0)";
    afterFun(element);
  }, duration - 50);
}
