//document.getElementById("count-el").innerText = 5

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)


// function myAkuma(){
//     console.log(45)
// }
// akuma()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function myMaps(){
//     let totalTime = lap1+lap2+lap3
//     console.log(totalTime)
// }
// myMaps()

// let lapsCompleted = 0

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementlaps(){
//     lapsCompleted = lapsCompleted + 1
// }
// incrementlaps()
// incrementlaps()

// console.log(lapsCompleted)

// //strings
// let name = "Rohit"
// let greeting = "Hi there!"
// let myGreeting = name + greeting

// console.log(myGreeting)


// let welcomeEl = document.getElementById("welcome-el")

// let name = "Rohit"
// let greeting = "Merry Christmas "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText +=  "👋"

let saveEl = document.getElementById("save-el")

let countEl = document.getElementById("count-el")
 console.log(countEl)
let count = 0
function increment(){
    count +=  1
    countEl.textContent = count
    
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

