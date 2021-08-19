const { default: hotkeys } = require('hotkeys-js');

const observerMap = {};

export function addKeyObserver(key, callback) {
  if (!observerMap[key]) {
    observerMap[key] = [];
    hotkeys(key, () => executeCallbacks(key));
  }
  observerMap[key].push(callback);
}

export function removeKeyObserver(key, callback) {
  observerMap[key] = observerMap[key].filter((item) => item !== callback);
}

function executeCallbacks(key) {
  for (const ob of observerMap[key]) {
    ob();
  }
}

export function keyboardToString() {
  console.log(JSON.stringify(observerMap));
}
