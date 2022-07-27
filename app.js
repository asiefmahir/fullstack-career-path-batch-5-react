console.log("Hello Async Js");

console.log("I am second");

// third party
setTimeout(() => {
    console.log("I am from 1st SetTimeOut")
}, 1000 )

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(amarmonjaChat => amarmonjaChat.json()) // json ->  json()
  .then(data => console.log(data))
  .catch(err => console.log(err.message))


// fetch()

console.log("I am lower than 1st Timeout")
console.log("I am lower than 1st Timeout")
console.log("I am lower than 1st Timeout")
