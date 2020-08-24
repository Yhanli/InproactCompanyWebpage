import {
    GET_WEBSITEPAGES_REQUEST,
    GET_WEBSITEPAGES_SUCCESS,
    GET_WEBSITEPAGES_FAILURE} from '../actions/types';

const initialState = {
    loading: false,
    websitePage:{},
    error:''
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_WEBSITEPAGES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case GET_WEBSITEPAGES_SUCCESS:
            // console.log(action.payload);
            return {
                ...state,
                websitePage:action.payload,
                loading: false,
                error: ""
            };
        case GET_WEBSITEPAGES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}