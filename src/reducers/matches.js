import { ADD_MATCH, EDIT_MATCH } from "../actions/matches";
const initialState = {
  selectedGame: "",
  selectedMatchType: "",
  matches: [],
};

const matches = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH:
      return [...state, action.matchRecord];
    case EDIT_MATCH:
      return [...state];
    default:
      return state;
  }
};

export default matches;
