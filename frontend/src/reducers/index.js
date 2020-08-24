import {combineReducers} from 'redux';
import aboutus from "./aboutus";
import maincontent from "./main";
import messages from "./messages";
import errors from "./error";
import websitePage from "./websitePages";

export default combineReducers({
    aboutus,
    maincontent,
    messages,
    errors,
    websitePage,
});