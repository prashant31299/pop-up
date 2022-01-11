let  popups = document.querySelectorAll(".popup")
let pop= document.querySelector(".output")
let popmessage=document.querySelector(".message")
let closebtn= document.querySelector(".close")

    closebtn.addEventListener("click",function(){
        pop.classList.add("hide")
    })

for(let i=0;i<popups.length;i++){
    
    console.log(popups[i]);
    popups[i].addEventListener("click",function(){

        let outputText =this.getAttribute('data-message')
        message(outputText)
    })

    function message(output){
        pop.classList.remove("hide")
        popmessage.innerHTML=output
    }

}
