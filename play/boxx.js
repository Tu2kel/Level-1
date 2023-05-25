const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener("click", e => {
    
    console.log("shit was clicked");
})

// function gpClicked (e) {
//     console.log(e, "Gp Clicked");
// }
// grandparent.addEventListener("click", gpClicked)