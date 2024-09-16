window.addEventListener("DOMContentLoaded",function(){
    "use strict";
    const input = document.querySelector(".main_input");
    const button = document.querySelector(".add_button");

    button.addEventListener("click",function(e){
        e.preventDefault();
        let paragraph = document.createElement("p");
        let valued = input.value;
        paragraph.innerText = valued;
        paragraph.classList.add("inactive");
        button.after(paragraph);
        paragraph.addEventListener("click",function(){
            if(paragraph.classList.contains("inactive")){
                paragraph.classList.toggle("active"); 
            } 
        })
    })

})