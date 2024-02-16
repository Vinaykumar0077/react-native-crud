import { ADD_PROFILE, DELETE_PROFILE, EDIT_PROFILE } from "./constants";

const initialState = [];

const handleEdit = (state, payload) => {
  newState = [...state];
  let index = newState.findIndex((item) => item.email == payload.email);
  newState.splice(index, 1, payload);
  return [...newState];
};

export const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_PROFILE:
      return [...state, payload];

    case EDIT_PROFILE:
      return handleEdit(state, payload);

    case DELETE_PROFILE:
      return state.filter((item) => item.email != payload.email);

    default:
      return state;
  }
};
