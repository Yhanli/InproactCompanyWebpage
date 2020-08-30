import axios from 'axios';
import {CREATE_MESSAGE, GET_ABOUTUS, GET_MAINPAGE, ERROR_MESSAGE, AUTO} from "./types";
import {REST_API} from "./constants";
import {
    GET_WEBSITEPAGES_REQUEST,
    GET_WEBSITEPAGES_SUCCESS,
} from "./types";
import smoothscroll from "smoothscroll-polyfill";


export const getLandingContent = () => (dispatch,getState) => {
    axios.get('/api/websitemain/')
        .then(
            res => {
                dispatch({
                    type: GET_MAINPAGE,
                    payload: res.data
                });
            }
        )
        .catch(
            err => console.log(err)
        );
};

export const getAboutUs = () => (dispatch,getState) => {
    axios.get('/api/aboutus/')
        .then(
            res => {
                dispatch({
                    type: GET_ABOUTUS,
                    payload: res.data
                });
            }
        )
        .catch(
        err => console.log(err)
    );
};

export const getWebsitePages = () => (dispatch,getState) => {
    dispatch({
        type:GET_WEBSITEPAGES_REQUEST
    });
    axios.get('/api/websitepages/')
        .then(
            res => {
                dispatch({
                    type: GET_WEBSITEPAGES_SUCCESS,
                    payload: res.data
                });
            }
        )
        .catch(
            err => console.log(err)
        );
};


export const createMessage = msg => {
  return {
      type: CREATE_MESSAGE,
      payload: msg
  }
};

export const errorMessage = (msg,status) => {
    return {
        type: ERROR_MESSAGE,
        payload: {msg,status}
    }
};

export const getPosts = () => {
    return axios.get(REST_API.Posts)

};

