export function getLocalStorage(key, defaultValue) {
  const storage = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key)) : defaultValue;
  
  return storage;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}


