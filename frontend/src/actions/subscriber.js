import axios from 'axios';
import {createMessage, errorMessage} from "./frontend";
import {ADD_SUBSCRIBER} from "../actions/types";

export const addSubscriber = (subscriber) =>(dispatch,getState)=>{
    axios.post("/api/subscriber/", subscriber)
        .then(res => {
            console.log(res.data);
            dispatch(createMessage({addSubscriber:"You have subscribed to our feed/updates."}));
            dispatch({
                type:ADD_SUBSCRIBER,
                payload: res.data
            });
        }).catch(err =>
            dispatch(errorMessage(err.response.data, err.response.status))
    )
};
