import React from "react";
import type { RawJoke } from "../types/joke";
import { Flex } from "../components/styles/Flex.styled";
import { Joke } from "../components/Joke";
import { useForceUpdate } from "../utils/forceUpdate";

import { Button } from "../components/styles/Button.styled";

export const Favorites: React.FC = () => {
  let fav: string = "" + localStorage.getItem("favorites");
  let favArr: RawJoke[] | [] = JSON.parse(fav);

  const rerender = useForceUpdate();

  const removeJoke = (id: string) => {
    let fav: string = "" + localStorage.getItem("favorites");
    let favArr: RawJoke[] | [] = JSON.parse(fav);
    localStorage.setItem(
      "favorites",
      JSON.stringify(favArr.filter((fav) => fav.id !== id))
    );
    rerender();
  };

  const clearFavorite = () => {
    localStorage.removeItem("favorites");
    rerender();
  };

  if (!favArr?.length) {
    return (
      <>
        <div style={{ marginTop: "20px" }}></div>
        <span>No favorite jokes</span>
      </>
    );
  }

  return (
    <>
      <div style={{ marginTop: "20px" }}></div>
      <Flex wrap="wrap" gap={10}>
        {favArr.map((joke) => (
          <Flex direction="column" gap={10}>
            <Joke joke={joke} />
            <i class="bi bi-trash" onClick={() => removeJoke(joke.id)}></i>
          </Flex>
        ))}
      </Flex>
      <div style={{ marginTop: "20px" }}></div>
      <Button onClick={clearFavorite}>
        Clear All
        <i class="bi bi-bookmark-x-fill"></i>
      </Button>
    </>
  );
};

export default Favorites;
