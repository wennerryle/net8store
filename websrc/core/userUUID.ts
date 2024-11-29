import { v4 as uuidv4, validate as validateUUID } from "uuid";
import { createLocalStorageSignal } from "./localStorage";

const UUID_KEY = "uuid_key|someuntropia32423904";

const userUUID = createLocalStorageSignal(UUID_KEY, uuidv4());

userUUID.subscribe(value => {
  if (!validateUUID(value)) {
    userUUID.value = uuidv4()
  }
})

export default userUUID;