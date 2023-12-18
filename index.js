// Promise.allSettled in JavaScript
const promise1 = fetchData();
const promise2 = fetchAnotherData();

Promise.allSettled([promise1, promise2])
    .then(results => {
        // ... (handle settled results)
    })
    .catch(error => {
        // ... (handle errors)
    });
