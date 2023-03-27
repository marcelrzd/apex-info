import axios from "axios";
import { newsURL } from "../api";

export const loadNews = () => async (dispatch) => {
  // Fetch axios
  const newsData = await axios.get(newsURL());

  // dispatch the data after the return of the api
  dispatch({
    type: "GET_NEWS",
    payload: {
      news: newsData.data,
    },
  });
};
