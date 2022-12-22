export function checkOverflow(element) {
  const overflow = element.style.overflow;
  if (!overflow || overflow === "visible") element.style.overflow = "hidden";

  const overflowing =
    element.clientWidth < element.scrollWidth ||
    element.clientHeight < element.scrollHeight;

  element.style.overflow = overflow;
  return overflowing;
}
