const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)

})
promiseOne.then(function () {
    console.log("Promise 1 consumed")
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2")
    }, 1000)
}).then(() => console.log("Async 2 resolved"))

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "chai", email: "chai@12" })

    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user)


})
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "abs", email: "baba@12" })
        } else (
            console.log("error 505")
        )
    }, 1000)

})
promiseFour.then(function (user) {
    console.log(user);
    return user.username
}).then((xyz) => {
    console.log(xyz)
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("either resolved or rejected");
})


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.