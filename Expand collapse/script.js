//user will click on buttons
// const buttonId = document.querySelector('expand-button')
// buttonId.addEventListener('click' , e=> {
//     e.preventDefault()

// })
document.addEventListener("click", e => {
    if (!e.target.matches(".expand-button")) return
  
    const card = e.target.closest(".card")
    const cardBody = card.querySelector(".card-body")
  
    cardBody.classList.toggle("show")
    if (e.target.innerText === "Expand") {
      e.target.innerText = "Collapse"
    } else {
      e.target.innerText = "Expand"
    }
    // e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand"
  })

//change state of buttons


// on one state change class id and assign class id as expand or collapse


