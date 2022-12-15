const panel = query(".panel");

const athkarBox = createElement("div", {
  className: "thikr",
  textContent: "...",
  append: panel,
});

const counter = createElement("div", {
  className: "thikr-counter",
  textContent: "0",
  append: panel,
});

function render(index, dataObject) {
  const data = dataObject[index];
  athkarBox.style.display = "block";

  arr.forEach((a) => {
    a.remove();
  });

  if (d.isArray) {
    athkarBox.style.display = "none";
    d.body.forEach((b, j) => {
      arr.push(
        createElement("div", {
          className: "thikr",
          textContent: b,
          append: panel,
          before: counter,
        })
      );
    });
  } else athkarBox.textContent = d.body;

  counter.textContent = d.repeat;
  j = data[index].repeat;
}

fetch("/api/athkar/morning.json")
  .then((res) => res.json())
  .then((data) => {
    const arr = [];

    let i = 0;
    let j = data[i].repeat;
    render(i, data);

    onClick(counter, () => {
      if (j !== 1) {
        counter.textContent = --j;
      } else render(++i, data);
    });
  });
