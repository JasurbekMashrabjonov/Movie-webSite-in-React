import React from "react";
import { createContext, useReducer } from "react";
import reduce from "./reduce";

export const ContextProvider = createContext();

export default function ShopContext({ children }) {
  const initialState = {
    posts: [],
    search: "man",
    type: "movie",
    bg: "bg_light_navbar2",
    bgUl2: "bg_light_ul2",
    isClick: false,
    bgContent: "content_light",
    bgFooter: "footer_light",
    bgCard: "card_light",
    menuBar: "",
    isCarusel: true,
  };
  const [value, dispatch] = useReducer(reduce, initialState);
  value.setState = (posts) => {
    dispatch({ type: "GET", payload: posts });
  };
  value.setSearch = (search) => {
    dispatch({ type: "Search", payload: search });
  };
  value.setType = (type) => {
    dispatch({ type: "Type", payload: type });
  };
  value.setBg = (bg) => {
    dispatch({ type: "BgNavbar2", payload: bg });
  };
  value.setBgUl2 = (bg) => {
    dispatch({ type: "BgUl2", payload: bg });
  };
  value.setBgContent = (bg) => {
    dispatch({ type: "BgContent", payload: bg });
  };
  value.setBgFooter = (bg) => {
    dispatch({ type: "BgFooter", payload: bg });
  };
  value.setBgCard = (bg) => {
    dispatch({ type: "BgCard", payload: bg });
  };
  value.setIsClick = () => {
    dispatch({ type: "Click" });
  };
  value.setMneuBar = () => {
    dispatch({ type: "MenuBar" });
  };
  value.setMenuClose = () => {
    dispatch({ type: "MenuClose" });
  };
  return (
    <ContextProvider.Provider value={value}>
      {children}
    </ContextProvider.Provider>
  );
}
