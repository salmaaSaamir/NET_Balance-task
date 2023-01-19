let myValue = document.querySelector(".net-value");
let balanceValue = document.querySelector("p");
let calc = document.querySelector(".calc");
let toClear = document.querySelector(".clear");


calc.onclick = () =>{
    if(myValue.value <=0){
        alert("you must enter a positive number") ;
    }
    else{
        let theBalanceValue = myValue.value -(myValue.value * .3)
        balanceValue.textContent =  theBalanceValue ;
        balanceValue.style.color = "#142c36" ;
    }
}
toClear.onclick = () =>{
    myValue.value = ""  ;
    balanceValue.style.color = "rgb(255, 255, 255)" ;
}