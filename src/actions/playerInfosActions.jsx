import axios from "axios";
import { playerDetailsURL } from "../api";

export const getPlayerInfos = () => async (dispatch) => {
  // Fetch axios
  const playerInfosData = await axios.get(playerDetailsURL());

  // dispatch the data after the return of the api
  dispatch({
    type: "GET_PLAYER_INFO",
    payload: {
      playerInfos: playerInfosData.data,
    },
  });
};
