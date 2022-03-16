let day = (new Date()).getDay();

for(let i = 0; i<7; i++){
    if(i!==day) document.querySelectorAll(".days p")[i].classList.remove("highlight");
    else document.querySelectorAll(".days p")[i].classList.add("highlight");
}


setInterval(()=>{
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    
    if(hr/10 < 1) hr = "0"+hr;
    if(min/10 < 1) min = "0"+min;
    if(sec/10 < 1) sec = "0"+sec;

    if(document.querySelectorAll(".switch-type p")[0].classList.contains("highlight")){
        if(hr>12){
            hr%=12;
            document.querySelector(".time").textContent = `${hr}:${min}:${sec} PM`;
        }else{
            document.querySelector(".time").textContent = `${hr}:${min}:${sec} AM`;
        }
    }else{
        document.querySelector(".time").textContent = `${hr}:${min}:${sec}`;
    }
    
},1000);


document.querySelectorAll(".switch-type p").forEach(element=>{
    element.addEventListener("click",toggle);
});

function toggle(){
    let type = document.querySelectorAll(".switch-type p");
    type.forEach(element=>{
        element.classList.toggle("highlight");
    });
}

