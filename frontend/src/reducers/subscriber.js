import {ADD_SUBSCRIBER} from "../actions/types";


const initialState ={
    subscriber:[]
};

export default function(state = initialState, action){
    switch (action.type){
        case ADD_SUBSCRIBER:
            return{
                ...state,
                subscriber:[...state.subscriber, action.payload]
            };
        default:
            return state;
    }
}