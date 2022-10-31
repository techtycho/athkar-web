export function saveStorage(key, value) {
  localStorage.setItem(key, value);
}

export function getStorage(key) {
  return localStorage.getItem(key);
}

export function processStorage(key, value) {
  if (localStorage.getItem(key)) return localStorage.getItem(key);
  localStorage.setItem(key, value);
  return localStorage.getItem(key);
}

export function clearStorage() {
  localStorage.clear();
}
