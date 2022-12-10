const computerOption = ["🪨", "🧻", "✂️"]
const option = document.querySelectorAll('.box-btn')
const stat = document.getElementById("status")
const computerBox = document.getElementById("computer-box")
const userBox = document.getElementById("user-box")
const drawBox = document.getElementById("draw-box")

let computerScore = 0
let userScore = 0
let drawScore = 0;
option.forEach(opt => {
    opt.onclick = () => {
        let random = Math.ceil((Math.random() * 3) - 1);
        // user wins
        if (opt.value == "🪨" && computerOption[random] == "✂️") {
          userScore += 1
            console.log("You won");
            stat.innerHTML = `<h1>You won by, 🪨. Computer loose by, ${computerOption[random]}</h1>`
           userBox.innerHTML = `<h1>Your score: ${userScore}</h1>`
        }
        else if (opt.value == "🧻" && computerOption[random] == "🪨") {
            userScore += 1
            console.log("You won");
            stat.innerHTML = `<h1>You won by, 🧻. Computer loose by, ${computerOption[random]}</h1>`
            userBox.innerHTML = `<h1>Your score: ${userScore}</h1>`
        }
        else if (opt.value == "✂️" && computerOption[random] == "🧻") {
            userScore += 1
            console.log("You won");
            stat.innerHTML = `<h1>You won by, ✂️. Computer loose by, ${computerOption[random]}</h1>`
            userBox.innerHTML = `<h1>Your score: ${userScore}</h1>`
        }
        else if (opt.value ==  computerOption[random] ) {
            console.log("You won");
            stat.innerHTML = `<h1>DRAW</h1>`
            drawScore += 1;
            drawBox.innerHTML = `<h1>Draw: ${drawScore}</h1>`
        }
        else if(opt.value == "Reset"){
        //console.log("reseeeee");
        computerScore = 0
        drawScore = 0;
        userScore = 0;
        computerBox.innerHTML = `<h1>Computer score: 0</h1>`
        drawBox.innerHTML = `<h1>Draw: 0</h1>`
        stat.innerHTML = " "
        userBox.innerHTML = `<h1>Your score: 0</h1>`
    }
        // computer wins
        else { console.log("Computer wins"); 
        computerScore += 1

        stat.innerHTML = `<h1>Computer won by, ${computerOption[random]}. You loose by, ${opt.value}</h1>`
        computerBox.innerHTML = `<h1>Computer score: ${computerScore}</h1>`
    }
    
    }
})
