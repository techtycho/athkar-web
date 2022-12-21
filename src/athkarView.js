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

if (url) {
  urlFetch(url).then((data) => {});
}
