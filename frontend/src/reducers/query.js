import {ADD_QUERY,ADD_QUERY_SUCCESS,ADD_QUERY_FAILURE} from "../actions/types";


const initialState ={
    loading: false,
    query:[]
};

export default function(state = initialState, action){
    switch (action.type){
        case ADD_QUERY:
            return{
                ...state,
                loading: true
            };
        case ADD_QUERY_SUCCESS:
            return{
                ...state,
                query:[...state.query, action.payload]
            };
        case ADD_QUERY_FAILURE:
            return{
                ...state,
                loading: false
            };
        default:
            return state;
    }
}