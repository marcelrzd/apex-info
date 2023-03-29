import axios from "axios";
import { br_map_rotationURL, craftingURL } from "../api";

export const getBrMapRotation = () => async (dispatch) => {
  // Fetch axios
  const brMapData = await axios.get(br_map_rotationURL());

  // dispatch the data after the return of the api
  dispatch({
    type: "GET_BR_MAP_ROTATION",
    payload: {
      brMap: brMapData.data,
    },
  });
};

export const getCraftingItemsRotation = () => async (dispatch) => {
  // Fetch axios
  const crafting = await axios.get(craftingURL());

  // dispatch the data after the return of the api
  dispatch({
    type: "GET_CRAFTING_ITEMS_ROTATION",
    payload: {
      crafting: crafting.data,
    },
  });
};
