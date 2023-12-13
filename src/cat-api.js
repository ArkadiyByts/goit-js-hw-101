export default function fetchBreeds() {
    return axios.get('/breeds').then(({ data }) => data);
}