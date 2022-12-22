import { query, queryId } from "./dom/dom";
import { urlFetch } from "./http/fetch";
import { athkarRoutes } from "./routes";

const searchParams = new URLSearchParams(document.location.search);
const thikrParam = searchParams.get("t");
let url = "";

for (const route in athkarRoutes) {
  if (thikrParam === route) {
    url = athkarRoutes[route];
  }
}

const athkar = queryId("athkar-ui");
const counter = query(".counter");

function check(element) {
  const overflow = element.style.overflow;
  if (!overflow || overflow === "visible") element.style.overflow = "hidden";

  let isOverflowing =
    element.clientWidth < element.scrollWidth ||
    element.clientHeight < element.scrollHeight;

  element.style.overflow = overflow;
  return isOverflowing;
}

if (url) {
  urlFetch(url).then((data) => {
    athkar.setData(data[2]);
    athkar.setProgress();

    if (check(athkar.children[1])) {
      athkar.children[2].style.borderBottomWidth = "1px";
    } else athkar.children[2].style.borderBottomWidth = "0";

    document.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        counter.click();
      }
    });
  });
}
