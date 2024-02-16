import { ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE } from "./constants";

export function addProfile(item) {
  return {
    type: ADD_PROFILE,
    payload: item,
  };
}

export function editProfile(item) {
  return {
    type: EDIT_PROFILE,
    payload: item,
  };
}

export function deleteProfile(item) {
  return {
    type: DELETE_PROFILE,
    payload: item,
  };
}
