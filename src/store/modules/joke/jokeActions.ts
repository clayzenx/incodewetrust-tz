import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { JokeAction, JokeActionTypes } from "../../../types/joke";

let inter: any = null;

export const fetchJoke = () => {
  return async (dispatch: Dispatch<JokeAction>) => {
    try {
      dispatch({ type: JokeActionTypes.FETCH_JOKE });
      const r = await axios.get("https://api.chucknorris.io/jokes/random");
      dispatch({ type: JokeActionTypes.FETCH_JOKE_SUCCESS, payload: r.data });
    } catch (e) {
      dispatch({
        type: JokeActionTypes.FETCH_JOKE_ERROR,
        payload: "Чак Норис не придумал шутку..."
      });
    }
  };
};

export const intervalJoking = (interval: number) => {
  return (dispatch: Dispatch<JokeAction>) => {
    try {
      dispatch(fetchJoke());
      inter = setInterval(() => dispatch(fetchJoke()), interval * 1000);
    } catch (e) {
      dispatch({
        type: JokeActionTypes.FETCH_JOKE_ERROR,
        payload: "Чак Норис устал шутить"
      });
    }
  };
};

export const stopJoking = () => {
  if (inter) clearInterval(inter);
};
