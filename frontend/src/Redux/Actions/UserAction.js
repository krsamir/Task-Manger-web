import { LOGIN } from "./types";
import axios from "axios";
export const login = () => async (dispatch) => {
  await axios
    .post(`/api/login`)
    .then((response) => {
      dispatch({
        type: LOGIN,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
