// TODO: Select all elements needed
//    Use the HTML to figure out what classes/ids will work best for selecting each element
const form = document.querySelector("#form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")
const terms = document.getElementById('terms')
const errorsContainer = document.querySelector(".errors")
const errorsList = document.querySelector(".errors-list")
//const username = document.getElementById("")



// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit", e => {

    // showErrors();
    // e.preventDefault();
   
    const errorMessages = []
    clearErrors()
    
if(username.value.length <6)
{
    errorMessages.push("USERNAME LENGTH MUST BE GREATER THAN 6!!")

}

if(password.value.length <10){
    errorMessages.push("PASSWORD LENGTH MUST BE GREATER THAN 10!!")


}

if(passwordConfirmation !== password )
{
    errorMessages.push("PASSWORD DO NOT MATCH!!")

}

if(!terms.checked)
 {errorMessages.push("Please accept terms!")
 }

 if(errorMessages.length>0)
 {
     showErrors(errorMessages)
     e.preventDefault()
 }
})

//    TODO: Create an array to store all error messages and clear any old error messages
//    TODO: Define the following validation checks with appropriate error messages
//      1. Ensure the username is at least 6 characters long
//      2. Ensure the password is at least 10 characters long
//      3. Ensure the password and confirmation password match
//      4. Ensure the terms checkbox is checked
//    TODO: If there are any errors then prevent the form from submitting and show the error messages

// TODO: Define this function
function clearErrors() {
    
    // Loop through all the children of the error-list element and remove them
    // IMPORTANT: This cannot be done with a forEach loop or a normal for loop since as you remove children it will modify the list you are looping over which will not work
    // I recommend using a while loop to accomplish this task
    // This is the trickiest part of this exercise so if you get stuck and are unable to progress you can also set the innerHTML property of the error-list to an empty string and that will also clear the children. I recommend trying to accomplish this with a while loop, though, for practice.
    // Also, make sure you remove the show class to the errors container
    while (errorsList.children[0] != null) {
        errorsList.removeChild(errorsList.children[0])
      }
      errorsContainer.classList.remove("show")
    }
  
  
  // TODO: Define this function
  function showErrors(errorMessages) {
    errorMessages.forEach(errorMessages=> {
        const li = document.createElement("li")
        li.innerText = errorMessages
        errorList.appendChild(li)

    })
    // Add each error to the error-list element
    // Make sure to use an li as the element for each error
    // Also, make sure you add the show class to the errors container
        errorsContainer.classList.add("show");  
}
  