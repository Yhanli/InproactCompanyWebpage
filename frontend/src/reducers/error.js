import {ERROR_MESSAGE} from "../actions/types";
const initialState = {
    msg:{},
    status: null
};

export default function reducer(state=initialState,action){
    switch (action.type){
        case ERROR_MESSAGE:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            };
        default:
            return state;
    }
}