let number=document.querySelector("#number");
let button=document.querySelector("#check");
let result=document.querySelector("#result");
let alert=document.querySelector(".alert");


    n=Math.floor(Math.random() * 101)


button.addEventListener("click",()=>{
    if(number.value<0 && number.value>0){
        alert.innerText="Invalid Number"
    }else if(number.value<n){
        result.innerText+=" "+number.value
        alert.innerText="the closest big guess to your number"

    }else if(number.value>n){
        result.innerText+=" "+number.value
        alert.innerText="the lowest guess closest to your number"
    }
    else if(number.value==n){
        alert.innerText="you win"
        result.innerText+=" "+number.value

        
    }
})
