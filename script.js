// TASK1
// function delayedPromise(value, time) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(value);
//         }, time);
    
// });
// }

// const promiseMassive = [
//     delayedPromise(1000),
//     delayedPromise(2000),
//     delayedPromise(1500),
//     delayedPromise(500),
//     delayedPromise(1100),
// ];

// Promise.all(promiseMassive).then((res) => {
//     res.forEach((res, index) => {
//         console.log(`Promise ${index + 1}: ${res}`);
//     });
// })

// TASK2

function randomDelay(value) {
    const getRandomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({value, getRandomDelay});
        }, getRandomDelay);
    });
}

const promiseMassive = [
    randomDelay('Promise 1'),
    randomDelay('Promise 2'),
    randomDelay('Promise 3'),
    randomDelay('Promise 4'),
    randomDelay('Promise 5')
];

Promise.race(promiseMassive).then((res) => {
    console.log(`Найшвидший проміс: ${res.value}, затримка: ${res.getRandomDelay} ms)`);
});




