// grab the count-el element, store it in a countEl variable
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
     countEl.innerText = count
    // set countEl's innerText to the count
}
//saving 
function save() {

    let countStr = count + " - " 
    console.log(count)
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
}







