import { query } from "./dom/dom";
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

const panel = query(".panel");

if (url) {
  urlFetch(url).then((data) => {
    data.forEach((dataObject, i) => {
      const el = document.createElement("athkar-ui");
      panel.appendChild(el);
      el.setData(dataObject);

      if (i === 0) {
        el.style.paddingTop = `calc(((100vh - 9vh) / 2) - ${
          el.clientHeight / 2
        }px - 30px)`;
      } else {
        el.style.paddingTop = `calc(((100vh - 9vh) / 2) - ${
          el.clientHeight / 2
        }px)`;
      }
    });

    let i = 0;
    panel.childNodes.forEach((el) => {
      el.setFinishHook(() => {
        setTimeout(() => {
          panel.children[++i].scrollIntoView({ behavior: "smooth" });
        }, 50);
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        setTimeout(() => {
          panel.children[++i].scrollIntoView({ behavior: "smooth" });
        }, 50);
      }

      if (e.code === "ArrowUp") {
        setTimeout(() => {
          if (i > 0) panel.children[--i].scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    });

    document.addEventListener("keypress", (e) => {
      if (e.code === "Enter" || e.code === "Space") {
        panel.children[i].children[0].children[0].click();
      }
    });
  });
}
