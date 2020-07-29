import axios from 'axios';
import {GET_ABOUTUS} from "./types";


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