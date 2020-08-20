import {combineReducers} from 'redux';
import aboutus from "./aboutus";
import maincontent from "./main";
import messages from "./messages";
import errors from "./error";

export default combineReducers({
    aboutus,
    maincontent,
    messages,
    errors
});