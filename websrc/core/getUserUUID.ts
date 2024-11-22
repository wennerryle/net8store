import { v4 as uuidv4, validate as validateUUID } from "uuid";

const UUID_KEY = "uuid_key/someuntropia32423904";

/**
 * Берет ключ пользователя из localstorage
 * 
 * Если его нет, то генерирует его и сохраняет в localstorage
 */
export function getUserUUID(): string {
  let key = localStorage.getItem(UUID_KEY);

  if (key && validateUUID(key)) {
    return key;
  }

  key = uuidv4();
  localStorage.setItem(UUID_KEY, key);
  return key;
}
