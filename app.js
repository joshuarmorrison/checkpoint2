let steps = 0
let globalmultiplier = 0

function mine(){
steps++;
steps += Math.floor(globalmultiplier)
draw()
}
function draw(){
    document.getElementById("counter").innerText=steps.toString()
}

function drawInventory(){
//NOTE for in loop, document
document.getElementById("chicken").innerText=clickUpgrades.chicken.quantity.toString()
document.getElementById("salmon").innerText=clickUpgrades.salmon.quantity.toString()
document.getElementById("protein").innerText=automaticUpgrades.proteinshake.quantity.toString()
document.getElementById("steak").innerText=automaticUpgrades.steak.quantity.toString()
}
function buyChicken(){
    if(steps <50){
        return ("Not enough steps")
    }
    clickUpgrades.chicken.quantity++
    steps -= clickUpgrades.chicken.price
    globalmultiplier += clickUpgrades.chicken.multiplier
    draw()
    drawInventory()
}
function buySalmon(){
    if(steps <100){
        return ("Not enough steps")
    }
    clickUpgrades.salmon.quantity++
    steps-=clickUpgrades.salmon.price
    globalmultiplier += clickUpgrades.salmon.multiplier
    draw()
    drawInventory()
}
function buyProtein(){
    if(steps <150){
        return ("Not enough steps")
    }
    automaticUpgrades.proteinshake.quantity++
    steps-=automaticUpgrades.proteinshake.price
    globalmultiplier += automaticUpgrades.proteinshake.multiplier
    draw()
    drawInventory()
}
function buySteak(){
    if(steps <1000){
        return ("Not enough steps")
    }
    automaticUpgrades.steak.quantity++
    steps-=automaticUpgrades.steak.price
    globalmultiplier += automaticUpgrades.steak.multiplier
    draw()
    drawInventory()
}

let clickUpgrades = {
    chicken: {
      price: 50,
      quantity: 0,
      multiplier: 5
    },
    salmon: {
        price: 100,
        quantity: 0,
        multiplier: 8
    },
   
    }

  
  let automaticUpgrades = {
    proteinshake: {
        price: 400,
        quantity: 0,
        multiplier: 30
    },
    steak: {
        price: 2500,
        quantity: 0,
        multiplier: 50
  }
  }
  function collectAutomaticUpgrades(){
      let shake = automaticUpgrades.proteinshake
      steps += (shake.quantity*shake.multiplier)
      let steak= automaticUpgrades.steak
      steps += (steak.quantity*steak.multiplier)

  }
  setInterval( collectAutomaticUpgrades, 3000);