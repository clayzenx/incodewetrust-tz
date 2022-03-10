import { JokeAction, JokeActionTypes, JokeState } from "../../../types/joke";

const initState = {
  joke: null,
  loading: false,
  error: null
};

export const jokeReducer = (
  state: JokeState = initState,
  action: JokeAction
): JokeState => {
  switch (action.type) {
    case JokeActionTypes.FETCH_JOKE:
      return { loading: true, error: null, joke: null };
    case JokeActionTypes.FETCH_JOKE_SUCCESS:
      return { loading: false, error: null, joke: action.payload };
    case JokeActionTypes.FETCH_JOKE_ERROR:
      return { loading: false, error: action.payload, joke: null };
    default:
      return state;
  }
};
