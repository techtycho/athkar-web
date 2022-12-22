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

if (url) {
  urlFetch(url).then((data) => {
    athkar.setData(data[2]);
    athkar.setProgress();

    document.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        counter.click();
      }
    });
  });
}
