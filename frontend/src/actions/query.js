import axios from 'axios';
import {createMessage, errorMessage} from "./frontend";
import {ADD_QUERY,ADD_QUERY_SUCCESS,ADD_QUERY_FAILURE} from "../actions/types";

export const addQuery = (query) =>(dispatch,getState)=>{
    dispatch({
        type: ADD_QUERY,
    });
    axios.post("/api/query/", query)
        .then(res => {
            console.log(res.data);
            dispatch(createMessage({addQuery:"You have sent us a query, We will get back to you ASAP"}));
            dispatch({
                type:ADD_QUERY_SUCCESS,
                payload: res.data
            });
        }).catch(err =>
        {
            dispatch(errorMessage(err.response.data, err.response.status))
            dispatch({
                type: ADD_QUERY_FAILURE,
            });}

    )
};
