console.log('goes');

import axios from "axios";

axios.defaults.headers.common['x-api-key'] = 'live_xV4P8GODSToxWGFcWBRktHi2HWYRaBbjERo5IeqTpaRTLrNpRtRsvSqBclkITomc';
axios.defaults.baseURL = "https://api.thecatapi.com/v1";

function fetchBreeds() {
    return axios.get('/breeds').then((responce) => {
        return responce.data;
    })
}

const catter = document.querySelector('.cat-info');

fetchBreeds().then((data) => {
    catter.insertAdjacentHTML('afterbegin', data);
})













// let page = 1;

// const catter = document.querySelector('.cat-info');
// const prev = document.querySelector('#prev');
// const next = document.querySelector('#next');
// const pageInfo = document.querySelector('#page');

// pageInfo.innerText = page;

// if (page === 1) {
//     prev.setAttribute('disabled', 'disabled');
// }

// prev.addEventListener('click', prevPage);
// next.addEventListener('click', nextPage);

// function nextPage() {
//     fetchAndRender(++page);
//     pageInfo.innerText = page;
//     togglePrevButton();
// }

// function prevPage() {
//     fetchAndRender(--page);
//     pageInfo.innerText = page;
//     togglePrevButton();
// }

// function togglePrevButton() {
//     if (page === 1) {
//         prev.setAttribute('disabled', 'disabled');
//     } else {
//         prev.removeAttribute('disabled');
//     } 
// }

// function fetchAndRender(currentPage) {
   
//     const url = "https://jsonplaceholder.typicode.com/posts";
//     const searchParams = new URLSearchParams({

//         _limit: 10,
//         _page: currentPage
//     });

//     fetch(`${url}?${searchParams.toString()}`)
//     .then((response) => {
//         return response.json();
//     })

//     .then(rerender)
//     .catch((error) => {
//         catter.insertAdjacentHTML(error);
//     });
// }

// fetchAndRender(page);

// function rerender(data) {
//     const html = data.map((elem) => `<div class='post'>[#${elem.id}] ${elem.title}</div>`)
//     catter.innerHTML = html.join("<br />"); 
// }