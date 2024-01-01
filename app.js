let counter = document.getElementById("counter");
let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");

let counterValue = 0;

increment.addEventListener("click",() => {
    counterValue += 1
    counter.innerText = parseFloat(counterValue)
})
decrement.addEventListener("click",() => {
    if(counterValue > 0){
        counterValue -= 1
        counter.innerText = counterValue
    }else{
        counter.innerText = "Minus decrement does not allow"
    }
    
}) 