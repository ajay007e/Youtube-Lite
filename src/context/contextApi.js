import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromApis } from "../utils/api";

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [cursor, setCursor] = useState(null);
  const [loadMore,setLoadMore] = useState(false);

  useEffect(() => {
    console.log(new Date(),loading,loadMore);
    if (selectCategories === "home") {
      fetchHomeData(cursor);
    } else {
      fetchSelectedCategoryData(selectCategories,cursor);
    }
  }, [selectCategories, loadMore]);


  const fetchSelectedCategoryData = (query,cursor) => {
    setLoading(true);
    fetchDataFromApis(`search/?q=${query}`,cursor)
      .then(({ contents, cursorNext }) => {
        setCursor(cursorNext);
        setSearchResults(prev=>[...prev,...contents]);
        setNetworkError(false);
        setLoading(false);
        setLoadMore(false)
      })
      .catch((err) => {
        // console.log(err);
        setNetworkError(true);
        setLoading(false);
      });
  };
  const fetchHomeData = (cursor) => {
    setLoading(true);
    // console.log(cursor);
    fetchDataFromApis(`home/`,cursor)
      .then(({ contents, cursorNext }) => {
        // console.log(contents);
        setCursor(cursorNext);
        setSearchResults(prev=>[...prev,...contents]);
        setNetworkError(false);
        setLoading(false);
        setLoadMore(false);
      })
      .catch((err) => {
        console.log(err);
        setNetworkError(true);
        setLoading(false);
        setLoadMore(false);

      });
  };
  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        setSearchResults,
        selectCategories,
        setSelectCategories,
        mobileMenu,
        setMobileMenu,
        networkError,
        setNetworkError,
        cursor,
        setCursor,
        loadMore,
        setLoadMore
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
