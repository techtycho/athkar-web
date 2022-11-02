export async function getTemplate(path) {
  const res = await fetch(path);
  const text = await res.text();
  return text;
}
