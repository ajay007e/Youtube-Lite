import React,{createContext,useState,useEffect} from "react";

import { fetchDataFromApis } from "../utils/api";

export const Context = createContext()

export const AppContext = (props)=>{
    const [loading,setLoading]=useState(false)
    const [searchResult,setSearchResult] = useState(false);
    const [selectCategories, setSelectCategories] = useState("new");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategories);
    },[selectCategories]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApis(`search/?q=${query}`).then((res) => {
          console.log(res);
          // setSearchResult(res);
          setLoading(false);
        });
    };
    return (
        <Context.Provider value={{loading,setLoading,searchResult,setSearchResult,selectCategories,setSelectCategories,mobileMenu,setMobileMenu}}>
            {props.children}
        </Context.Provider>
    );
}