
let p = fetch("https://goweather.herokuapp.com/weather/Ny")
p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2) => {
    console.log(value2)
})

const createToDo = async(todo) => {
let options = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(todo),

}

let d = await fetch('https://jsonplaceholder.typicode.com/posts', options)
let response = await d.json();
return response
}

const getTodo = async (id) => {
    let response=  await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
    let r =response.json()
    return r

}

const mainFunc = async()=> {
    let todo = {
        title: 'afnan',
        body: 'bhai',
        userId: 10,
    }
    let todoRes = await createToDo(todo)
    console.log(todoRes) //todoRes = todo Response
    console.log( await getTodo(5))
}


mainFunc()


