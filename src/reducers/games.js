import { ADD_GAME, GET_ALL_GAMES } from "../actions/games";

const initialState = {
  games: [],
  matchType: [],
};

const games = function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_GAMES:
      return state;
    case ADD_GAME:
      return state;
    default:
      return state;
  }
};

export default games;
