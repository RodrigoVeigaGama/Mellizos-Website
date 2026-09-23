// localStorage pode lançar erro (navegação anônima, dados bloqueados), então
// toda leitura e escrita passa por aqui.
export function readStorage(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}
