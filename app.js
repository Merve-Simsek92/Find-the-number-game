let number=document.querySelector("#number");
let button=document.querySelector("#check");
let result=document.querySelector("#result");
let alert=document.querySelector(".alert");


    n=Math.floor(Math.random() * 101)


button.addEventListener("click",()=>{
    if(number.value<0 && number.value>100){
        alert.innerText="Invalid Number"
    }else if(number.value<n){
        result.innerText+=" "+number.value
        alert.innerText="Enter a Larger Number"
        number.value="";

    }else if(number.value>n){
        result.innerText+=" "+number.value
        alert.innerText="Enter a smaller number"
        number.value="";
    }
    else if(number.value==n){
        alert.innerText="YOU WIN"
        result.innerText+=" "+number.value
        number.value="";

        
    }
})
