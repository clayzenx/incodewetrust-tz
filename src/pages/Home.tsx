import React, { useEffect, useState, useMemo } from "react";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import { useForceUpdate } from "../utils/forceUpdate";
import {
  fetchJoke,
  intervalJoking,
  stopJoking
} from "../store/modules/joke/jokeActions";
import type { RawJoke } from "../types/joke";

import { Joke } from "../components/Joke";
import { Button } from "../components/styles/Button.styled";
import { Flex } from "../components/styles/Flex.styled";

export const Home: React.FC = () => {
  const { joke, error, loading } = useAppSelector(({ joke }) => joke);
  const dispatch = useAppDispatch();
  const rerender = useForceUpdate();

  const [isJoke, setJoking] = useState(false);

  useEffect(() => {
    return () => {
      stopJoking();
    };
  }, []);

  const toggleJoking = (e?: Event) => {
    (e?.target as HTMLElement)?.classList?.toggle("active");
    if (isJoke) stopJoking();
    else dispatch(intervalJoking(3));
    setJoking(!isJoke);
  };

  // @ts-ignore
  const isFav = useMemo(() => {
    let fav: string = "" + localStorage.getItem("favorites");
    let favArr: RawJoke[] | [] = JSON.parse(fav);
    if (Array.isArray(favArr) && favArr.length) {
      return !!favArr.find((fav) => fav.id === joke?.id);
    }
    return false;
  });

  const toggleFavorite = () => {
    if (joke && !isFav) {
      let fav: string = "" + localStorage.getItem("favorites");
      let favArr: RawJoke[] | [] = JSON.parse(fav) || [];
      if (favArr?.length >= 10) {
        favArr.shift();
      }
      favArr.push(joke);
      localStorage.setItem("favorites", JSON.stringify(favArr));
    } else if (joke && isFav) {
      let fav: string = "" + localStorage.getItem("favorites");
      let favArr: RawJoke[] | [] = JSON.parse(fav);
      localStorage.setItem(
        "favorites",
        JSON.stringify(favArr.filter((fav) => fav.id !== joke.id))
      );
    }
    rerender();
  };

  return (
    <>
      <h1>&lt;InCodeWeTrust /&gt;</h1>
      {error ? (
        <p>${error}</p>
      ) : loading ? (
        <p>thinking...</p>
      ) : joke ? (
        <Joke joke={joke} />
      ) : (
        <p>Tap to "Get joke" for new joke</p>
      )}

      <div style={{ marginTop: "20px" }}></div>

      <Flex gap={10}>
        <Button onClick={() => dispatch(fetchJoke())}>Get joke</Button>
        <Button onClick={toggleJoking}>Joking</Button>

        {joke ? (
          <Button onClick={toggleFavorite}>
            <i className={`bi bi-bookmark-heart${isFav ? "-fill" : ""}`}></i>
          </Button>
        ) : (
          ""
        )}
      </Flex>
    </>
  );
};

export default Home;
