console.log('script goes');
import Notiflix from 'notiflix';

const submitBtn = document.querySelector('button');
//console.log(submitBtn);
const firstDelay = document.querySelector('[name="delay"]');
//console.log(firstDelay);
const delayStep = document.querySelector('[name="step"]');
//console.log(delayStep);
const amount = document.querySelector('[name="amount"]');
//console.log(amount);
const shouldResolve = Math.random() > 0.3;

function createPromise() {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
  if (shouldResolve) {
    resolve()
  } else {
    reject()
  }
})
}

  submitBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(+firstDelay.value + 100);
    console.log(delayStep.value);
    console.log(amount.value);
    
    if (amount.value > 0) {
      setTimeout(() => { 
        let positionSetter = 1;
        let delaySetter = +firstDelay.value;
        const interval = setInterval(() => {
          
          createPromise()
          .then(() => {
            Notiflix.Notify.success(`✅ Fulfilled promise ${positionSetter} in ${delaySetter}ms`);
            
          })
          .catch(() => {
            Notiflix.Notify.failure(`❌ Rejected promise ${positionSetter} in ${delaySetter}ms`);
            
          })
          .finally(() => {         
            if (positionSetter === +amount.value) {
              clearInterval(interval);
              console.log('All repetitions completed.');
            }
            positionSetter += 1;
            delaySetter += +delayStep.value;
             
          });
        }, +delayStep.value)
      }, +firstDelay.value)
    }
  });