let head = document.querySelector(".head");

window.addEventListener('scroll',()=>{
    if(window.pageYOffset>40){
        head.classList.remove("active");
    }else{
        head.classList.add("active");
    }
});
let count = 1


setInterval(function(){
    document.getElementById('r' + count).checked = true
    count ++;

    if(count > 4){
        count = 1
    }
},5000);

let value = document.querySelectorAll(".number");

let interval = 3000;

value.forEach((value) => {


    let startValue = 0;

    let endValue = parseInt(value.getAttribute("data-val"));

    let duration = interval/endValue;

    let result = setInterval(function(){
        startValue +=1;
        value.textContent = startValue;
       
        if(startValue == endValue){
            clearInterval(result);
        }
    }, duration);
});

let menu = document.querySelectorAll(".menu");

menu.forEach((menus, index) => {
    menus.addEventListener('click', () => {
        menu.forEach((menu) => {
            menu.classList.remove("active");

        })
       menu[index].classList.add("active");
    }); 
    
})

let acc = document.getElementsByClassName("accordion");

let text = document.getElementsByClassName("accordion-text");

for(let i=0; i<acc.length; i++){
    // console.log(acc.length);

    acc[i].onclick = function(){
        for(let a=0; a<acc.length; a++){
            if(i == a){

            }else{
                text[a].classList.remove("show");
            }
        }

        text[i].classList.toggle("show");
    }
}

let btn = document.querySelector(".circle-home");

window.addEventListener('scroll',()=>{
    if(window.pageYOffset>100){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }
});