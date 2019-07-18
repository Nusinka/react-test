// @flow
import { SubgenreT } from "../../models";

export const CREATE_SUBGENRE = "CREATE_SUBGENRE";
export const CREATE_SUBGENRE_SUCCESS = "CREATE_SUBGENRE_SUCCESS";
export const CREATE_SUBGENRE_FAIL = "CREATE_SUBGENRE_FAIL";
export const TOGGLE_NEW_SUBGENRE = "TOGGLE_NEW_SUBGENRE";
export const CREATE_NEW_SUBGENRE = "CREATE_NEW_SUBGENRE";
export const CLEAR_NEW_SUBGENRE = "CLEAR_NEW_SUBGENRE";

export function createSubgenre(data: SubgenreT) {
  return { type: CREATE_SUBGENRE, data };
}

export function createSubgenreSuccess() {
  return { type: CREATE_SUBGENRE_SUCCESS };
}

export function createSubgenreFail(error: string) {
  return { type: CREATE_SUBGENRE_FAIL, error };
}

export function toggleNewSubgenre(newSubgenre: boolean) {
  return { type: TOGGLE_NEW_SUBGENRE, newSubgenre };
}

export function createNewSubgenre() {
  return { type: CREATE_NEW_SUBGENRE };
}

export function clearNewSubgenre() {
  return { type: CLEAR_NEW_SUBGENRE };
}
