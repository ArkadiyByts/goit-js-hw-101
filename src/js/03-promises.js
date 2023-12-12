console.log('script goemon');
import Notiflix from 'notiflix';

const submitBtn = document.querySelector('button');
//console.log(submitBtn);
const firstDelay = document.querySelector('[name="delay"]');
//console.log(firstDelay);
const delayStep = document.querySelector('[name="step"]');
//console.log(delayStep);
const amount = document.querySelector('[name="amount"]');
//console.log(amount);

function createPromise(position, delay, delayForAlert) {
  // Return a promise that resolves or rejects after the specified delay

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay, delayForAlert});
      } else {
        reject({ position, delay, delayForAlert});
      }     
    }, delay);
  });
}

function processPromise(position, delay, delayForAlert) {
  createPromise(position, delay, delayForAlert)
    .then(({ position, delayForAlert}) => {           
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayForAlert}ms`);
    })
    .catch(({ position, delayForAlert}) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayForAlert}ms`);
    })
    .finally(() => {
      if (position === +amount.value) {
        console.log('All repetitions completed.');
        submitBtn.removeAttribute('disabled');
        return;
      }
      //Call processPromise func with updated position&delay
      processPromise(position + 1, delay = +delayStep.value, delayForAlert + +delayStep.value);
    })
}

// Add a submit event listener to the form
document.querySelector('.form').addEventListener("submit", (e) => {
    e.preventDefault();
    
    submitBtn.setAttribute('disabled', 'disabled');

    //Start process with initial position&delay
    processPromise(1, +firstDelay.value, +firstDelay.value);
  });






