import axios from "axios";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constants/userConstants";

// Login
export const login = (email, password) => async (dispatch) => {
  
  try {
    const config = {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `https://stage.api.sloovi.com/login`,
      { email, password },
      config
    );
    // console.log(data);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: {error:"Error Loggin in"} });
  }
};
