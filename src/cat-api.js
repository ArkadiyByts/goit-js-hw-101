
import axios from "axios";
import Notiflix from 'notiflix';
// axios.defaults.headers.common['x-api-key'] = 'live_xV4P8GODSToxWGFcWBRktHi2HWYRaBbjERo5IeqTpaRTLrNpRtRsvSqBclkITomc';
// axios.defaults.baseURL = "https://api.thecatapi.com/v1";

// export function fetchBreeds() {
//     return axios.get('/breeds').then(({ data }) => data);
// }

// export function fetchCatByBreed(breedId) {
//     return axios.get(`/images/search?breed_ids=${breedId}12`).then(({ data }) => data);
// }



export const fetchBreeds = () => {
    axios.defaults.headers.common['x-api-key'] = 
        'live_xV4P8GODSToxWGFcWBRktHi2HWYRaBbjERo5IeqTpaRTLrNpRtRsvSqBclkITomc';

    return axios.get(`https://api.thecatapi.com/v1/breeds`)
        .then(res => res.data)
        .catch(error => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
          });
        
};

export const fetchCatByBreed = breedId => {
   return axios
        .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(res => res.data);
};