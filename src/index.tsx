import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Navigation } from "./components/Navigation";

import "./styles.css";

const rootElement = document.getElementById("root");

render(
  <div className="App">
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Home />} />
          <Route path="fav-jokes" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </div>,
  rootElement
);
