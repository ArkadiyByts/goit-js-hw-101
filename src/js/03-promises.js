console.log('script goemona');
import Notiflix from 'notiflix';

const submitBtn = document.querySelector('button');
//console.log(submitBtn);
const firstDelay = document.querySelector('[name="delay"]');
//console.log(firstDelay);
const delayStep = document.querySelector('[name="step"]');
//console.log(delayStep);
const amount = document.querySelector('[name="amount"]');
//console.log(amount);

function createPromise(position, delay) {
  // Return a promise that resolves or rejects after the specified delay

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }     
    }, delay);
  });
}

function processPromise(position, delay) {
  createPromise(position, delay)
    .then(({ position, delay }) => {           
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    })
    .finally(() => {
      if (position === +amount.value) {
        console.log('All repetitions completed.');
        submitBtn.removeAttribute('disabled');
        return;
      }
      //Call processPromise func with updated position&delay
      processPromise(position + 1, delay + +delayStep.value);
    })
}

// Add a submit event listener to the form
document.querySelector('.form').addEventListener("submit", (e) => {
    e.preventDefault();
    
    submitBtn.setAttribute('disabled', 'disabled');

    //Start process with initial position&delay
    processPromise(1, +firstDelay.value);
  });






