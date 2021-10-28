import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const login = (formData) => async (dispatch) => {
    try {
        //log in the user

        // history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData) => async (dispatch) => {
  try {
    //sign up the user

    // history.push("/");
  } catch (error) {
    console.log(error);
  }
};