export interface RawJoke {
  categories: any[];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
}

export interface JokeState {
  joke: any;
  loading: boolean;
  error: null | string;
}

export enum JokeActionTypes {
  FETCH_JOKE = "FETCH_JOKE",
  FETCH_JOKE_SUCCESS = "FETCH_JOKE_SUCCESS",
  FETCH_JOKE_ERROR = "FETCH_JOKE_ERROR"
}
interface FetchJokesAction {
  type: JokeActionTypes.FETCH_JOKE;
}

interface FetchJokesSuccessAction {
  type: JokeActionTypes.FETCH_JOKE_SUCCESS;
  payload: RawJoke;
}

interface FetchJokesErrorAction {
  type: JokeActionTypes.FETCH_JOKE_ERROR;
  payload: string;
}

export type JokeAction =
  | FetchJokesAction
  | FetchJokesErrorAction
  | FetchJokesSuccessAction;
