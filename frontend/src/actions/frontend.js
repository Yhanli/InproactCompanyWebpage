import axios from 'axios';
import {GET_ABOUTUS,GET_MAINPAGE} from "./types";


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
