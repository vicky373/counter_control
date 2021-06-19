let decbtn=document.getElementById("decbutton");
let resbtn=document.getElementById("resbutton");
let incbtn=document.getElementById("incbutton");
let countervar=document.querySelector(".counter");
let count=0;


let colorChange =(c)=>{
    
    if(c<0){
        countervar.style.color="red";
    }
    else if(c>0){
        countervar.style.color="teal";
    }
    else{
        countervar.style.color="white";
    }
}

let setFunction = () =>{
    colorChange(count);
    countervar.innerHTML=count;
}

decbtn.addEventListener("click",()=>{
    count--;
    setFunction();
});

resbtn.addEventListener("click",()=>{
    count=0;
    setFunction();
});

incbtn.addEventListener("click",()=>{
    count++;
    setFunction();
});