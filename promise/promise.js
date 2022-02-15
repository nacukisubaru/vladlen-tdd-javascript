class MyPromise {
    constructor(executor) {
        executor();
    }

    then() {}

    catch() {}

    finally() {}
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("NgRx");
    }, 150);
});

// promise
//     .then((result) => result.toUpperCase())
//     .then((title) => console.log("title", title))
//     .catch((err) => console.log("Error", err))
//     .finally(() => console.log("Finally"));

module.exports = MyPromise;
