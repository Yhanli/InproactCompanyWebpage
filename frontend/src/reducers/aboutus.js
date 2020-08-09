import {GET_ABOUTUS} from '../actions/types';

const initialState = {
    aboutus:[]
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_ABOUTUS:
            return {
                ...state,
                aboutus:action.payload,
            };
        default:
            return state;
    }
}