export function createElement(
  type = "div",
  settings = {
    className: "",
    textContent: "",
    append: null,
    before: null,
  }
) {
  const element = document.createElement(type);
  if (settings.className) element.className = settings.className;
  if (settings.textContent) element.textContent = settings.textContent;
  if (settings.append) {
    if (settings.before) {
      settings.append.insertBefore(element, settings.before);
    } else settings.append.appendChild(element);
  }

  return element;
}
