console.log('script go');
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

// Add a submit event listener to the form
document.querySelector('.form').addEventListener("submit", (e) => {
    e.preventDefault();
    let position = 1;
    let delay = +firstDelay.value;
    console.log(delay);
    console.log(delay + 1);
  

    if (amount.value > 0) {
      
      // Set up an interval for promise creation and processing
      const interval = setInterval(() => {
        console.log(position);
        console.log(delay);
          
        // Create a promise with the current position and delay
        createPromise(position, delay)
          .then(({ position, delay }) => {
            
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          })
                   
            // Check if the position has reached the specified amount
            if (position === +amount.value) {
              clearInterval(interval);
              console.log('All repetitions completed.');
              position = 1;
              delay = +firstDelay.value;

            } else {
              delay += +delayStep.value;
              position += 1;
            }
           
            
            
          
      }, +delayStep.value);
    }
  });


// function createPromise() {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//   if (shouldResolve) {
//     resolve()
//   } else {
//     reject()
//   }
// })
// }

//   document.querySelector('.form').addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log(+firstDelay.value + 100);
//     console.log(delayStep.value);
//     console.log(amount.value);
    
//     if (amount.value > 0) {
//       setTimeout(() => { 
//         let positionSetter = 1;
//         let delaySetter = +firstDelay.value;
//         const interval = setInterval(() => {
          
//           createPromise()
//           .then(() => {
//             Notiflix.Notify.success(`✅ Fulfilled promise ${positionSetter} in ${delaySetter}ms`);
            
//           })
//           .catch(() => {
//             Notiflix.Notify.failure(`❌ Rejected promise ${positionSetter} in ${delaySetter}ms`);
            
//           })
//           .finally(() => {         
//             if (positionSetter === +amount.value) {
//               clearInterval(interval);
//               console.log('All repetitions completed.');
//             }
//             positionSetter += 1;
//             delaySetter += +delayStep.value;
             
//           });
//         }, +delayStep.value)
//       }, +firstDelay.value)
//     }
//   });






