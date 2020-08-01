import {GET_MAINPAGE} from "../actions/types";

const initialState = {
    maincontent:[]
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_MAINPAGE:
            return {
                ...state,
                maincontent:action.payload
            };
        default:
            return state;
    }
}