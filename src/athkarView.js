import { query, queryId, createElement } from "./dom/dom";
import { urlFetch } from "./http/fetch";

import { athkarRoutes } from "./routes";

const panel = query(".panel");
const main = queryId("main");

const searchParams = new URLSearchParams(document.location.search);
const thikrParam = searchParams.get("t");
let url = "";

for (const route in athkarRoutes) {
  if (thikrParam === route) {
    url = athkarRoutes[route];
  }
}

if (url) {
  urlFetch(url).then((data) => {
    const dataRepeat = data.map((d) => d.repeat);
    counter.setNumberArray(dataRepeat);
  });
}

const counter = queryId("counter");
