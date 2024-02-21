console.log('gooos');

import { fetchBreeds, fetchCatByBreed } from "./cat-api";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const loader = document.querySelector(".loader");

const slim = new SlimSelect({
    select: breedSelect,
    placeholder: 'Choose a Cat'
})

  try {
    loader.classList.remove('invisible');
    fetchBreeds().then(data => {
      renderSelect(data);
      // Refresh Slim Select after updating the options
      slim.setData([{ text: 'Choose a Cat', value: '' }, ...data.map(({ id, name }) => ({ value: id, text: name }))]);
  });
  } catch (error) {
    console.log(error);
  }


function renderSelect(breeds) {

  const defaultOption = '<option value="">Choose a Cat</option>';

    const markup = breeds
      .map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`;
      })
      .join("");
    breedSelect.insertAdjacentHTML("beforeend", markup);
    loader.classList.add('invisible');
}

breedSelect.addEventListener('change', e => {
  const selectedValue = e.target.value;
  if (selectedValue === '') {
    catInfo.innerHTML = '';
    return;
}
    loader.classList.remove('invisible');
    fetchCatByBreed(selectedValue)
        .then(data => renderCat(data[0]));
    catInfo.innerHTML = '';    
});
    

function renderCat(catData) {
    const { url } = catData;
    const { description, name, temperament } = catData.breeds[0];
    catInfo.innerHTML = 
    `<div class="img-container">
    <img id="cat-pic" src="${url}" />
    </div>
    <div class="info-container">
    <h2>${name}</h2>
    <p>${description}</p>
    <p><span id="span-cat">Temperament: </span>${temperament}</p>
    </div>`;
    loader.classList.add('invisible');
}














// import { fetchBreeds, fetchCatByBreed } from "./cat-api";
// import './css/styles.css';
// import Notiflix from 'notiflix';

// Notiflix.Notify.init({
// timeout: 2000,
// });

// const catter = document.querySelector('.cat-info');

// /** @type {HTMLSelectElement || null} */
// const body = document.querySelector('body');
// const breeds = document.querySelector('.breed-select');
// const content = document.querySelector('#content');

// window.addEventListener('load', () => {
    
//         content.classList.add('invisible-refresh');
//         Notiflix.Notify.info('Loading data, please wait...');
//         console.log('1sec');

//     // Remove the 'invisible-refresh' class after 2 seconds
//     setTimeout(() => {
//         content.classList.remove('invisible-refresh');
//         console.log('2sec');
//     }, 2300);
// });

// fetchBreeds().then((data) => {
//     const html = data.map((breed) => `<option value="${breed.id}">${breed.name}</option>`)
//     breeds.innerHTML = html;
// });

// breeds.addEventListener('change', (ev) => {
//     const breedId = ev.target.value;
//     catter.innerHTML = '';
//     //Notiflix.Notify.info('Content is loading...');
//     //breeds.classList.add('invisible');
//     catter.classList.add('invisible');

//     fetchCatByBreed(breedId).then((cats) => {
//             //catter.innerHTML = JSON.stringify(cats);
            
//             const array = cats.map((cat) => `<div class="img-container"><img id="cat-pic" src="${cat.url}" /></div><div class="info-container"><h2>${cat.breeds[0].name}</h2><p>${cat.breeds[0].description}</p><p><span id="span-cat">Temperament: </span>${cat.breeds[0].temperament}</p></div>`);
//             if (array.length !== 0) {
//                 Notiflix.Notify.info('Content is loading...');
//                 catter.innerHTML = array.join("");
//             } else {
//                 Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
//             }
//         });
    
//     setTimeout(() => {
        
        
//         catter.classList.remove('invisible');
//     }, 1500);
// });

