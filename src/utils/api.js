import axios from "axios";

const baseUrl = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    cursor:""
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchDataFromApis = async (url,cursor) => {
  if(cursor){
    options.params.cursor=cursor;
  }
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  // console.log(data);
  return data;
};
