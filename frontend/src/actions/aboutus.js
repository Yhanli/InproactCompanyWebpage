import axios from 'axios'






export const getAboutUs = () => (dispatch,getState) => {
    return axios.get('/api/aboutus/');

};