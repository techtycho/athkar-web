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

export function slide(element, duration, afterFun = () => {}) {
  element.animate(
    [
      {
        right: "-70%",
      },
      {
        right: "0",
      },
    ],
    duration
  );
  setTimeout(() => {
    element.style.right = "0";
    afterFun(element);
  }, duration - 50);
}

export function slideReverse(element, duration, afterFun = () => {}) {
  element.animate(
    [
      {
        right: "0",
      },
      {
        right: "-70%",
      },
    ],
    duration
  );
  setTimeout(() => {
    element.style.right = "-70%";
    afterFun(element);
  }, duration - 50);
}
