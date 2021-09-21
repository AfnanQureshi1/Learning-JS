//1. select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')



form.addEventListener("submit", e => {
e.preventDefault()

  //  console.log(input.value)

  //create element
const item = document.createElement('div')
item.innerText = input.value
item.classList.add('list-item')

//console.log(item)// ADD ITEM THE LIST
list.appendChild(item)
//clear input
input.value = "";
// setup event listener to delete item when clicked
item.addEventListener("click" , ( )=> {
list.removeChild(item)
})

})


